import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Search + AI answer-engine crawlers we explicitly welcome. */
const AI_BOTS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User", // ChatGPT browsing
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews grounding control
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot-Extended",
  "Bingbot",
];

/** Bandwidth-heavy crawlers with no search or answer-engine value for this site. Keep in step with BAD_USER_AGENTS. */
const SCRAPERS = ["Bytespider", "MJ12bot", "BLEXBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search-result style URLs (?q=) are thin duplicates of /courses; keep crawl budget for real pages.
      { userAgent: "*", allow: "/", disallow: ["/api/", "/*?q="] },
      { userAgent: AI_BOTS, allow: "/", disallow: ["/api/", "/*?q="] },
      // Aggressive scrapers that give us nothing back. The proxy also refuses them, because many ignore robots.txt.
      { userAgent: SCRAPERS, disallow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
