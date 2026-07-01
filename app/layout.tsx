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
    default: "StudioCTRL — Software Tools for Modern Musicians",
    template: "%s | StudioCTRL",
  },
  description:
    "StudioCTRL builds professional software tools for musicians, keyboard players, live performers, and music producers. Real-time MIDI diagnostics, chord detection, and performance system tools.",
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
  authors: [{ name: "StudioCTRL Technologies" }],
  creator: "StudioCTRL Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studioctrl.com",
    siteName: "StudioCTRL",
    title: "StudioCTRL — Software Tools for Modern Musicians",
    description:
      "Professional software tools for musicians, keyboard players, and live performers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "StudioCTRL",
    description:
      "Software tools for modern musicians and live performance systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
