"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Turnstile from "@/components/forms/Turnstile";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "limited" | "error";

/** Posts every named field to /api/enquiry. Never reports success unless the API accepted it. */
export default function LeadForm({
  source,
  id,
  className,
  style,
  children,
}: {
  source: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");
  // When the form first appeared. Sent as elapsed time so the server can spot bots that submit instantly.
  const shownAt = useRef(0);
  useEffect(() => {
    shownAt.current = Date.now();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          source,
          page: window.location.pathname,
          elapsedMs: Math.max(0, Date.now() - shownAt.current),
          fields: Object.fromEntries(new FormData(form)),
        }),
      });
      if (res.ok) {
        form.reset();
        setStatus("done");
      } else setStatus(res.status === 429 ? "limited" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form id={id} className={className} style={style} onSubmit={onSubmit} aria-busy={status === "sending"}>
      {children}
      {/* Honeypot: real visitors never see or fill this. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      <Turnstile />
      <p
        role="status"
        className="help"
        style={{ flexBasis: "100%", textAlign: "center", color: status === "error" || status === "limited" ? "var(--danger)" : undefined }}
      >
        {status === "sending" && "Sending…"}
        {status === "done" && "Thank you. An advisor will call you back soon."}
        {status === "limited" && (
          <>
            You have sent a few enquiries already. Please wait a few minutes, or call{" "}
            <a href={`tel:${SITE.phone.replace(/s/g, "")}`}>{SITE.phone}</a>.
          </>
        )}
        {status === "error" && (
          <>
            We couldn&apos;t send that. Please call <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a> or
            WhatsApp {SITE.whatsapp}.
          </>
        )}
      </p>
    </form>
  );
}
