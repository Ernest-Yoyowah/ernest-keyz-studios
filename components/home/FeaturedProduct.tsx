"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  Activity,
  Keyboard,
  Sliders,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import AppMockup from "@/components/shared/AppMockup";
import IconBox from "@/components/shared/IconBox";
import TagBadge from "@/components/shared/TagBadge";
import { PULSEMIDI_VERSION } from "@/lib/product";

const features = [
  {
    icon: Activity,
    label: "Real-time MIDI monitor",
    desc: "Live message stream with filtering",
  },
  {
    icon: Keyboard,
    label: "88-key visualization",
    desc: "Animated keyboard display",
  },
  {
    icon: Sliders,
    label: "CC + sustain diagnostics",
    desc: "Control change monitoring",
  },
  {
    icon: GitBranch,
    label: "Routing visualization",
    desc: "MIDI device routing map",
  },
];

const tags = ["Standalone", "VST3", "CLAP", "macOS"];

export default function FeaturedProduct() {
  return (
    <section className="relative py-32 overflow-hidden">
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
          Featured Product
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-[#f0f0f8] tracking-tight text-center mb-4"
        >
          PulseMIDI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg text-[#7d7d9a] text-center max-w-xl mx-auto mb-16"
        >
          Real-time MIDI diagnostic tool for macOS. Monitor, visualize, and
          debug your entire MIDI signal chain from a single interface.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <AppMockup />
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 blur-2xl opacity-25"
              style={{
                background: "radial-gradient(ellipse, #00d4ff, transparent)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <TagBadge key={tag}>{tag}</TagBadge>
              ))}
              <span className="text-xs font-mono px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                v{PULSEMIDI_VERSION}
              </span>
            </div>

            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-xl glass-panel glass-panel-hover"
              >
                <IconBox icon={feat.icon} size="sm" />
                <div>
                  <p className="text-sm font-medium text-[#f0f0f8]">
                    {feat.label}
                  </p>
                  <p className="text-xs text-[#7d7d9a] mt-0.5">{feat.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="/download"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#07070c] bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]"
              >
                <Download size={15} />
                Download Free
              </Link>
              <Link
                href="/products/pulsemidi"
                className="flex items-center gap-1.5 text-sm font-medium text-[#7d7d9a] hover:text-[#00d4ff] transition-colors"
              >
                Full documentation
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
