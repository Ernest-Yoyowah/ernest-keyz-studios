import type { Metadata } from "next";
import PulseMIDIContent from "./PulseMIDIContent";

export const metadata: Metadata = {
  title: "PulseMIDI",
  description:
    "Real-time MIDI diagnostic tool for macOS. Monitor, visualize, and debug your complete MIDI signal chain — 88-key visualization, CC monitoring, chord detection, MIDI routing. Standalone, VST3, and CLAP formats.",
};

export default function Page() {
  return <PulseMIDIContent />;
}
