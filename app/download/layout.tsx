import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download PulseMIDI — a free, real-time MIDI diagnostic tool for macOS. Universal binary for Apple Silicon and Intel. Standalone app, VST3, and CLAP plugin formats.",
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
