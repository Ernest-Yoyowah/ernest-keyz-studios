"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Activity,
  Keyboard,
  Sliders,
  GitBranch,
  Mic,
  Music,
  BarChart2,
  Layers,
} from "lucide-react";
import Link from "next/link";
import AppMockup from "@/components/shared/AppMockup";
import IconBox from "@/components/shared/IconBox";
import TagBadge from "@/components/shared/TagBadge";
import { PULSEMIDI_VERSION, LIVEKEY_VERSION } from "@/lib/product";

const pulsemidiFeatures = [
  { icon: Activity, label: "Real-time MIDI monitor", desc: "Live message stream with filtering" },
  { icon: Keyboard, label: "88-key visualization", desc: "Animated keyboard display" },
  { icon: Sliders, label: "CC + sustain diagnostics", desc: "Control change monitoring" },
  { icon: GitBranch, label: "Routing visualization", desc: "MIDI device routing map" },
];

const livekeyFeatures = [
  { icon: Mic, label: "Real-time pitch detection", desc: "YIN algorithm at 20–50 Hz" },
  { icon: Music, label: "Live key identification", desc: "Krumhansl-Schmuckler profiles" },
  { icon: BarChart2, label: "Scale degree numbers", desc: "1–7 for worship musicians" },
  { icon: Layers, label: "Chord suggestions", desc: "I, IV, V, vi after 78% confidence" },
];

export default function FeaturedProduct() {
  return (
    <section className="relative py-32 overflow-hidden border-t border-white/[0.04]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-4 text-center"
        >
          Featured Products
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-[#f0f0f8] tracking-tight text-center mb-4"
        >
          The flagship tools
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-[#9898b0] text-center max-w-xl mx-auto mb-20"
        >
          Two standalone macOS apps, each solving a specific real problem for live performers.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PulseMIDI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-[#f0f0f8]">PulseMIDI</h3>
              <span className="text-xs font-mono text-[#00d4ff]/70 bg-[#00d4ff]/08 border border-[#00d4ff]/15 px-2.5 py-0.5 rounded">
                v{PULSEMIDI_VERSION}
              </span>
            </div>

            <p className="text-sm text-[#9898b0] leading-relaxed mb-6">
              Real-time MIDI diagnostic tool for macOS. Monitor, visualize, and debug your entire MIDI signal chain from a single interface.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Standalone", "VST3", "CLAP", "macOS"].map((tag) => (
                <TagBadge key={tag}>{tag}</TagBadge>
              ))}
            </div>

            <div className="relative mb-8">
              <AppMockup />
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 blur-2xl opacity-20"
                style={{ background: "radial-gradient(ellipse, #00d4ff, transparent)" }}
              />
            </div>

            <div className="space-y-3 mb-8">
              {pulsemidiFeatures.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3 p-3 rounded-lg glass-panel"
                >
                  <IconBox icon={feat.icon} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-[#f0f0f8]">{feat.label}</p>
                    <p className="text-xs text-[#9898b0] mt-0.5">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <Link
                href="/download"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#07070c] bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]"
              >
                <Download size={15} />
                Download Free
              </Link>
              <Link
                href="/products/pulsemidi"
                className="flex items-center gap-1.5 text-sm font-medium text-[#9898b0] hover:text-[#00d4ff] transition-colors"
              >
                Learn more
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* LiveKey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold text-[#f0f0f8]">LiveKey</h3>
              <span className="text-xs font-mono text-[#00d4ff]/70 bg-[#00d4ff]/08 border border-[#00d4ff]/15 px-2.5 py-0.5 rounded">
                v{LIVEKEY_VERSION}
              </span>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full ml-auto">
                New
              </span>
            </div>

            <p className="text-sm text-[#9898b0] leading-relaxed mb-6">
              Real-time live key detection for worship musicians and keyboard players. Listens through a microphone and identifies the key — no internet, no cloud, no latency.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Standalone", "macOS 11+", "Microphone"].map((tag) => (
                <TagBadge key={tag}>{tag}</TagBadge>
              ))}
            </div>

            <div className="glass-panel rounded-xl p-5 mb-8 border border-[#00d4ff]/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">LIVE</span>
                </div>
                <span className="text-xs font-mono text-[#6a6a80]">v{LIVEKEY_VERSION}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="glass-panel rounded-lg p-3">
                  <p className="text-xs text-[#6a6a80] mb-1">Current Note</p>
                  <p className="text-2xl font-bold text-[#00d4ff]">A4</p>
                  <p className="text-xs text-[#9898b0]">440.0 Hz · degree 3</p>
                </div>
                <div className="glass-panel rounded-lg p-3" style={{ borderColor: "rgba(0,212,255,0.15)" }}>
                  <p className="text-xs text-[#6a6a80] mb-1">Detected Key</p>
                  <p className="text-2xl font-bold text-[#f0f0f8]">F Major</p>
                  <p className="text-xs text-emerald-400">91% · locked</p>
                </div>
              </div>
              <div className="glass-panel rounded-lg p-3">
                <p className="text-xs text-[#6a6a80] mb-2">Chord Suggestions</p>
                <div className="grid grid-cols-4 gap-2">
                  {[{ roman: "I", name: "F" }, { roman: "IV", name: "Bb" }, { roman: "V", name: "C" }, { roman: "vi", name: "Dm" }].map((c) => (
                    <div key={c.roman} className="rounded bg-white/[0.04] border border-white/[0.07] p-2 text-center">
                      <p className="text-xs font-mono text-[#00d4ff]/60">{c.roman}</p>
                      <p className="text-sm font-bold text-[#f0f0f8]">{c.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {livekeyFeatures.map((feat, i) => (
                <motion.div
                  key={feat.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3 p-3 rounded-lg glass-panel"
                >
                  <IconBox icon={feat.icon} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-[#f0f0f8]">{feat.label}</p>
                    <p className="text-xs text-[#9898b0] mt-0.5">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <Link
                href="/download/livekey"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#07070c] bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]"
              >
                <Download size={15} />
                Download Free
              </Link>
              <Link
                href="/products/livekey"
                className="flex items-center gap-1.5 text-sm font-medium text-[#9898b0] hover:text-[#00d4ff] transition-colors"
              >
                Learn more
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
