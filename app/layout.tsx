import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ernest Keyz Studios — Software Tools for Modern Musicians",
    template: "%s | Ernest Keyz Studios",
  },
  description:
    "Ernest Keyz Studios builds professional software tools for musicians, keyboard players, live performers, and music producers. Real-time MIDI diagnostics, chord detection, and performance system tools.",
  keywords: [
    "MIDI tools",
    "music software",
    "keyboard player",
    "live performance",
    "music producer",
    "PulseMIDI",
    "MIDI monitor",
    "chord detection",
    "VST plugin",
    "CLAP plugin",
    "macOS music software",
  ],
  authors: [{ name: "Ernest Keyz Studios" }],
  creator: "Ernest Keyz Studios",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ernestkeyzstudios.com",
    siteName: "Ernest Keyz Studios",
    title: "Ernest Keyz Studios — Software Tools for Modern Musicians",
    description:
      "Professional software tools for musicians, keyboard players, and live performers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ernest Keyz Studios",
    description:
      "Software tools for modern musicians and live performance systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#07070c] text-[#f0f0f8]">
        {children}
      </body>
    </html>
  );
}
