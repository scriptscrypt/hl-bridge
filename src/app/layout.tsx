import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  redaction,
  redactionBold,
  redactionItalic,
} from "@/assets/fonts/fonts-custom";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Hyperliquid Bridge",
  description: "Experience Hyperliquid Anytime, Anywhere",
  keywords: ["Hyperliquid", "hyperliquid", "bridge", "Hyperliquid Bridge"],
  authors: [{ name: "hyperliquid", url: "" }],
  openGraph: {
    title: "Hyperliquid Bridge",
    description: "Experience Hyperliquid Anytime, Anywhere",
    url: "",
    siteName: "Hyperliquid Bridge",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hyperliquid Bridge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperliquid Bridge",
    description: "Experience Hyperliquid Anytime, Anywhere",
    images: ["/og.png"],
  },
  metadataBase: new URL(""),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${redaction.variable} ${redactionBold.variable} ${redactionItalic.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
