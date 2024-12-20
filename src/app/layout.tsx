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
