import "server-only";
import { z } from "zod";

/**
 * Server-side environment, validated once. `server-only` makes the build FAIL if any client component ever imports
 * this file, which is how secrets are kept out of the browser bundle.
 * Empty strings (a common `.env` mistake) are treated as "not set".
 */
const blank = (v: unknown) => (typeof v === "string" && v.trim() === "" ? undefined : v);

const schema = z.object({
  /** Where enquiry leads are forwarded (CRM, Zapier, Google Apps Script ...). Must be https in production. */
  ENQUIRY_WEBHOOK_URL: z.preprocess(
    blank,
    z
      .url()
      .refine((u) => process.env.NODE_ENV !== "production" || u.startsWith("https://"), "must be an https URL in production")
      .optional(),
  ),
  /** Cloudflare Turnstile secret. When set, every enquiry must carry a valid challenge token. */
  TURNSTILE_SECRET_KEY: z.preprocess(blank, z.string().min(10).optional()),
});

export type ServerEnv = z.infer<typeof schema>;

let cached: ServerEnv | undefined;

export function getEnv(): ServerEnv {
  if (cached) return cached;
  const parsed = schema.safeParse({
    ENQUIRY_WEBHOOK_URL: process.env.ENQUIRY_WEBHOOK_URL,
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
  });
  if (!parsed.success) {
    // Never print the values; only which variable is wrong.
    const bad = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
    console.error(`[env] invalid configuration, ignoring the bad variables: ${bad}`);
    cached = { ENQUIRY_WEBHOOK_URL: undefined, TURNSTILE_SECRET_KEY: undefined };
    return cached;
  }
  cached = parsed.data;
  return cached;
}
