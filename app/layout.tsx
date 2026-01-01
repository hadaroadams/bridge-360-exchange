import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Oswald, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bridge360 Exchange | Study Abroad & Visa Services",
    template: "%s | Bridge360 Exchange",
  },
  description:
    "Bridge360 Exchange helps students and professionals unlock global opportunities through study abroad programs, exchange initiatives, internships, visa applications, interview preparation, and international exam training.",
  keywords: [
    "Bridge360 Exchange",
    "study abroad",
    "exchange programs",
    "international internships",
    "study in USA",
    "study in Europe",
    "study in Australia",
    "visa application services",
    "visa interview preparation",
    "IELTS preparation",
    "international education consultancy",
  ],
  authors: [{ name: "Bridge360 Exchange" }],
  creator: "Bridge360 Exchange",
  publisher: "Bridge360 Exchange",

  // metadataBase: new URL("https://bridge360exchange.com"), // 🔴 change if different

  openGraph: {
    title: "Bridge360 Exchange | Global Study & Visa Opportunities",
    description:
      "Bridge360 Exchange guides you every step of the way to study, work, and succeed abroad with trusted visa and education support.",
    // url: "https://bridge360exchange.com",
    siteName: "Bridge360 Exchange",
    images: [
      {
        url: "/logo-light.jpg", // 🔴 add this image
        width: 1200,
        height: 630,
        alt: "Bridge360 Exchange – Study Abroad & Visa Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bridge360 Exchange",
    description:
      "Unlock global opportunities with expert study abroad and visa support from Bridge360 Exchange.",
    images: ["/logo-light.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo-dark",
    shortcut: "/logo-dark",
    apple: "/logo-dark",
  },
};

const barlow_Condensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "700"], // only what you use
  display: "swap", // best practice
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${barlow_Condensed.variable} ${oswald.variable} antialiased w-dvw overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
