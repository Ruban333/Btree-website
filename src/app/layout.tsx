import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.tagline} | BTree`,
    template: "%s | BTree",
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: "/",
    title: `${SITE.tagline} | BTree`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", title: `${SITE.tagline} | BTree`, description: SITE.description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: SITE.verification.google, other: SITE.verification.bing ? { "msvalidate.01": SITE.verification.bing } : undefined },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body suppressHydrationWarning>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <div className="pg t-light" style={{ ["--sans" as string]: "var(--font-jakarta), system-ui, sans-serif" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
