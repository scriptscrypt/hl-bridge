import localFont from "next/font/local";

export const redaction = localFont({
  src: "./redaction20/Redaction20Regular.otf",
  variable: "--font-redaction",
  weight: "100 900",
});

export const redactionBold = localFont({
  src: "./redaction20/Redaction20Bold.otf",
  variable: "--font-redaction-bold",
  weight: "100 900",
});

export const redactionItalic = localFont({
  src: "./redaction20/Redaction20Italic.otf",
  variable: "--font-redaction-italic",
  weight: "100 900",
});