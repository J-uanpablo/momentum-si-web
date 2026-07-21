import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SITE_CONFIG } from "@/constants/site";
import { DisableImageDrag } from "@/components/ui/DisableImageDrag";
import "./globals.css";

const circeRounded = localFont({
  src: [
    {
      path: "../fonts/CIRCE/CirceRounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CIRCE/CirceRounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/CIRCE/CirceRounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/CIRCE/CirceRounded-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-circe-rounded",
  display: "swap",
});

const introBoldAlt = localFont({
  src: [
    {
      path: "../fonts/INTRO-FONT/Intro-BoldAlt.otf",
      style: "normal",
    },
  ],
  variable: "--font-intro-bold-alt",
  display: "swap",
});
const introMedium = localFont({
  src: [
    {
      path: "../fonts/INTRO-FONT/Intro-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-intro-medium",
  display: "swap",
});
const introBold = localFont({
  src: [
    {
      path: "../fonts/INTRO-FONT/Intro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-intro-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body
        className={`${circeRounded.variable} ${introBoldAlt.variable} ${introMedium.variable} ${introBold.variable}`}
      >
        <DisableImageDrag />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
