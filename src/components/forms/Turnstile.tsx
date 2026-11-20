"use client";

import { useEffect, useRef } from "react";

/**
 * Cloudflare Turnstile widget. Renders nothing unless NEXT_PUBLIC_TURNSTILE_SITE_KEY is set, so it costs nothing
 * (no third-party script, no request) while the feature is off. When on, the widget adds a hidden
 * "cf-turnstile-response" field to the surrounding form, which the server verifies.
 * The script origin is already allowed in the Content Security Policy (src/lib/csp.ts).
 */
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: { sitekey: string; theme?: "light" | "dark" | "auto" }) => string;
      remove: (id: string) => void;
    };
  }
}

export default function Turnstile() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!SITE_KEY || !box.current) return;
    let widget: string | undefined;
    let cancelled = false;

    const mount = () => {
      if (cancelled || !box.current || !window.turnstile) return;
      widget = window.turnstile.render(box.current, { sitekey: SITE_KEY, theme: "light" });
    };

    if (window.turnstile) {
      mount();
    } else {
      let script = document.querySelector<HTMLScriptElement>("script[data-turnstile]");
      if (!script) {
        script = document.createElement("script");
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        script.dataset.turnstile = "1";
        document.head.appendChild(script);
      }
      script.addEventListener("load", mount);
    }

    return () => {
      cancelled = true;
      if (widget) window.turnstile?.remove(widget);
    };
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={box} style={{ minHeight: 65 }} />;
}
