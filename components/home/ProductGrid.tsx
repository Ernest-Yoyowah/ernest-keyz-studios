"use client";
import { PULSEMIDI_VERSION } from "@/lib/product";

import { motion } from "framer-motion";
import ProductCard from "@/components/shared/ProductCard";

const products = [
  {
    name: "PulseMIDI",
    tagline: "Real-time MIDI diagnostic tool",
    description:
      "Monitor, visualize, and debug your complete MIDI signal chain. Built for live performers who need to know what's happening inside their system — in real time.",
    version: PULSEMIDI_VERSION,
    status: "available" as const,
    platform: ["macOS 12+", "Intel + Apple Silicon"],
    formats: ["Standalone", "VST3", "CLAP"],
    features: [
      "Real-time MIDI message monitor",
      "88-key keyboard visualization",
      "CC and sustain diagnostics",
      "MIDI routing visualization",
      "Chord detection engine",
    ],
    href: "/products/pulsemidi",
    downloadHref: "/download",
  },
  {
    name: "PulsePad",
    tagline: "Wireless MIDI control surface",
    description:
      "Transform phones and tablets into modern wireless MIDI controllers for live performance, DAW control, playback systems, and worship environments. Built for musicians who need flexible realtime control on stage.",
    status: "coming-soon" as const,
    platform: ["iOS", "Android", "macOS Bridge"],
    formats: ["Mobile App", "Desktop Bridge"],
    features: [
      "Wireless MIDI control",
      "Performance pads and macros",
      "XY modulation controls",
      "DAW transport controls",
      "Scene and playback triggering",
    ],
    href: "/products",
  },
  {
    name: "KeyMapper",
    tagline: "Advanced keyboard remapping",
    description:
      "Split, layer, and remap your MIDI keyboard with a visual editor. Design complex performance setups without touching a DAW.",
    status: "coming-soon" as const,
    platform: ["macOS"],
    formats: ["Standalone", "VST3"],
    features: [],
    href: "/products",
  },
  {
    name: "SignalFlow",
    tagline: "Visual MIDI routing engine",
    description:
      "Node-based MIDI routing and processing. Connect hardware and software in a modular signal graph with real-time monitoring.",
    status: "coming-soon" as const,
    platform: ["macOS"],
    formats: ["Standalone"],
    features: [],
    href: "/products",
  },
];

export default function ProductGrid() {
  return (
    <section className="relative py-28 border-t border-white/[0.04]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,212,255,0.025) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-4">
              Products
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f8] tracking-tight">
              The full toolkit
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-[#7d7d9a] max-w-xs sm:text-right"
          >
            More tools in development. Each built around a specific musician
            problem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
