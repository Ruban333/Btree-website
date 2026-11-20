import { z } from "zod";

/**
 * Strict schema for the enquiry endpoint. Anything not described here is rejected, which is the point:
 * a form that accepts "any JSON" is an injection and abuse surface.
 */
export const enquirySchema = z
  .object({
    /** Which form sent it, e.g. "contact" or "course-power-bi". Lowercase slug only. */
    source: z.string().regex(/^[a-z0-9][a-z0-9-]{0,59}$/),
    /** Page path the form was on. */
    page: z.string().max(200).regex(/^\/\S*$/).default("/"),
    /** Milliseconds the visitor spent on the form before submitting (catches bots that submit instantly). */
    elapsedMs: z.number().int().nonnegative().max(86_400_000),
    /** Field values by name. Names are identifiers only; values are capped below. */
    fields: z
      .record(z.string().regex(/^[A-Za-z][A-Za-z0-9_-]{0,39}$/), z.string().max(2000))
      .refine((o) => Object.keys(o).length > 0 && Object.keys(o).length <= 20, "1 to 20 fields"),
  })
  .strict();

export type Enquiry = z.infer<typeof enquirySchema>;

/**
 * Removes control characters and invisible/bidirectional-override characters. Attackers use these to hide text in
 * a CRM ("Trojan source" style) or to break log lines; nobody typing a name or a question needs them.
 */
export function cleanText(s: string): string {
  return s
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[​-\u200F-\u202E⁠-⁤﻿]/g, "")
    .trim();
}

const emailSchema = z.email();

/** 10-digit Indian mobile (starts 6-9), with optional +91 / 91 / spaces / dashes. Returns the 10 digits or null. */
export function indianMobile(v: string): string | null {
  let d = v.replace(/[\s\-()]/g, "");
  if (d.startsWith("+")) d = d.slice(1);
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  return /^[6-9]\d{9}$/.test(d) ? d : null;
}

export const isEmail = (v: string) => emailSchema.safeParse(v).success;

/** Typical link-spam and script-injection markers. Real enquiries rarely contain more than one link. */
function looksLikeSpam(values: string[]): string | null {
  const text = values.join("\n");
  if (/<\s*(script|iframe|object|embed)\b|javascript:|on(error|load|click)\s*=/i.test(text)) return "script-markup";
  if (/<a\s|\[url[=\]]/i.test(text)) return "link-markup";
  const links = text.match(/https?:\/\/|www\./gi)?.length ?? 0;
  if (links > 2) return "many-links";
  return null;
}

export type Verdict =
  | { kind: "ok"; fields: Record<string, string> }
  | { kind: "reject"; reason: "no-contact" }
  | { kind: "spam"; reason: string };

/** Cleans every value, then decides whether this looks like a real enquiry from a reachable person. */
export function judge(enquiry: Enquiry): Verdict {
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(enquiry.fields)) fields[k] = cleanText(v);

  // Honeypot: a hidden field real visitors never see. Bots fill every field they find.
  if (fields.website) return { kind: "spam", reason: "honeypot" };

  const values = Object.values(fields).filter(Boolean);
  const spam = looksLikeSpam(values);
  if (spam) return { kind: "spam", reason: spam };

  if (!values.some((v) => indianMobile(v) || isEmail(v))) return { kind: "reject", reason: "no-contact" };

  // Normalise phone numbers so the CRM gets one consistent format.
  for (const [k, v] of Object.entries(fields)) {
    const m = indianMobile(v);
    if (m) fields[k] = m;
  }
  delete fields.website;
  delete fields["cf-turnstile-response"];
  return { kind: "ok", fields };
}
