import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["cyrillic", "latin"], variable: "--font-body", display: "swap" });
const unbounded = Unbounded({ subsets: ["cyrillic", "latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Petrokas — сайты и веб-приложения для бизнеса",
    template: "%s · Petrokas",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Petrokas — веб-разработка с характером",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "ru_RU",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
};

export const viewport: Viewport = { themeColor: "#0d1916", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
