import type { Metadata } from "next";
import { PULSEMIDI_VERSION } from "@/lib/product";
import PageLayout from "@/components/shared/PageLayout";
import ProductCard from "@/components/shared/ProductCard";
import SectionHeader from "@/components/shared/SectionHeader";
import GlowButton from "@/components/shared/GlowButton";
import { GithubIcon } from "@/components/shared/GithubIcon";

export const metadata: Metadata = {
  title: "Products",
  description:
    "All software tools from Ernest Keyz Studios — MIDI diagnostics, keyboard tools, and live performance software for macOS.",
};

const products = [
  {
    name: "PulseMIDI",
    tagline: "Real-time MIDI diagnostic tool",
    description:
      "Monitor, visualize, and debug your complete MIDI signal chain. Built for live performers who need to know exactly what's happening inside their system — in real time, with zero latency.",
    version: PULSEMIDI_VERSION,
    status: "available" as const,
    platform: ["macOS 12+", "Intel + Apple Silicon"],
    formats: ["Standalone", "VST3", "CLAP"],
    features: [
      "Real-time MIDI message monitor with filtering",
      "88-key animated keyboard visualization",
      "CC monitoring and sustain diagnostics",
      "MIDI routing visualization",
      "Chord detection engine",
      "Device connection status",
    ],
    href: "/products/pulsemidi",
    downloadHref: "/download",
  },
  {
    name: "PulseControl Mobile",
    tagline: "Wireless MIDI control surface",
    description:
      "Professional wireless MIDI controller for iPhone and Android. Control DAWs, plugins, live playback systems, and external hardware using responsive touch faders and rotary controls over Wi-Fi.",
    status: "available" as const,
    platform: ["Android", "iOS Coming Soon"],
    formats: ["Mobile App"],
    downloadHref: "/download/pulsecontrol-mobile",
    features: [
      "8 high-resolution MIDI faders",
      "8 rotary MIDI control knobs",
      "Wireless WebSocket MIDI communication",
      "Scene-based controller layouts",
      "QR pairing with desktop bridge",
      "Low-latency realtime control",
    ],
    href: "/products/pulsecontrol-mobile",
  },
  {
    name: "PulseControl Bridge",
    tagline: "Desktop MIDI bridge engine",
    description:
      "Native macOS bridge application that connects PulseControl Mobile to DAWs and hardware using CoreMIDI, WebSocket transport, and automatic device discovery.",
    status: "available" as const,
    platform: ["macOS 11+", "Intel + Apple Silicon"],
    formats: ["Standalone"],
    features: [
      "CoreMIDI virtual MIDI output",
      "Realtime WebSocket MIDI server",
      "QR-based mobile pairing",
      "mDNS / Bonjour auto discovery",
      "Live MIDI activity monitoring",
      "Universal macOS installer support",
    ],
    href: "/products/pulsecontrol-bridge",
    downloadHref: "/download/pulsecontrol-bridge",
  },
];

export default function ProductsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionHeader
              eyebrow="All Products"
              title="Software for the full musician workflow"
              subtitle="Each tool is built around a specific, real problem encountered in performance or production. Focused, professional, and designed to get out of your way."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>

          <div className="mt-16 glass-panel rounded-2xl p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4a4a5e] mb-3">
              Roadmap
            </p>
            <h3 className="text-xl font-bold text-[#f0f0f8] mb-3">
              More tools are coming
            </h3>
            <p className="text-sm text-[#7d7d9a] max-w-lg mx-auto">
              Ernest Keyz Studios releases tools based on real musician
              problems. Follow on GitHub to track development, submit feature
              requests, or contribute.
            </p>
            <div className="mt-6 flex justify-center">
              <GlowButton
                href="https://github.com/Ernest-Yoyowah/pulsemidi"
                variant="primary"
                size="md"
                external
              >
                <GithubIcon size={16} />
                Follow on GitHub
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
