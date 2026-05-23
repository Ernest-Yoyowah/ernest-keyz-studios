"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-28 border-t border-white/[0.04] overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.03) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-5">
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f0f0f8] tracking-tight leading-tight mb-6">
              Built by a
              <br />
              musician
              <br />
              who codes
            </h2>
            <div className="space-y-4 text-base text-[#7d7d9a] leading-relaxed max-w-lg">
              <p>
                Ernest Keyz Studios is an independent music software company
                built around one core belief: the best tools come from people
                who actually use them.
              </p>
              <p>
                Every product starts with a real problem — a missing diagnostic
                during a live set, a MIDI routing quirk that took hours to
                debug, a workflow that should have taken one click but took
                twelve.
              </p>
              <p>
                The studio sits at the intersection of music performance and
                software engineering. That&apos;s not a background that&apos;s
                common in music tech — and that&apos;s exactly the point.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors"
            >
              Read the full story
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "1", unit: "active product", label: "PulseMIDI" },
              {
                value: "3",
                unit: "plugin formats",
                label: "Standalone · VST3 · CLAP",
              },
              {
                value: "2",
                unit: "architectures",
                label: "Intel + Apple Silicon",
              },
              {
                value: "∞",
                unit: "MIDI messages",
                label: "real-time monitoring",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="glass-panel glass-panel-hover rounded-xl p-6"
              >
                <p className="text-3xl font-bold text-[#00d4ff] mb-1">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-[#f0f0f8]/60 mb-2">
                  {stat.unit}
                </p>
                <p className="text-xs text-[#4a4a5e] font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
