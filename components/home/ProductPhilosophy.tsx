"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Built for Real Workflows",
    body: "Every feature comes from actual musician frustration. If a problem exists on stage or in the studio, it gets solved — not worked around.",
  },
  {
    number: "02",
    title: "Precision Over Bloat",
    body: "Tools that do exactly what they say. No feature creep. No subscription. No telemetry. Software that respects your time and your signal chain.",
  },
  {
    number: "03",
    title: "Performance-First Architecture",
    body: "Low latency, zero dropouts. Every tool is designed to handle the demands of live performance — not just studio sessions.",
  },
  {
    number: "04",
    title: "Open & Transparent",
    body: "Source code on GitHub. Documentation that actually explains what's happening. Built by a musician who trusts other musicians.",
  },
];

export default function ProductPhilosophy() {
  return (
    <section className="relative py-32 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-5">
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#f0f0f8] tracking-tight leading-tight mb-6">
              Software that
              <br />
              respects the
              <br />
              <span className="text-[#00d4ff]">instrument</span>
            </h2>
            <p className="text-base text-[#7d7d9a] leading-relaxed max-w-sm">
              MIDI tools designed by a keyboard player who got tired of bloated
              software that never quite understood what a live performance
              actually requires.
            </p>
            <div className="mt-10 h-px w-24 bg-gradient-to-r from-[#00d4ff]/40 to-transparent" />
          </motion.div>

          <div className="space-y-1">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                className="group p-7 rounded-xl glass-panel glass-panel-hover"
              >
                <div className="flex items-start gap-5">
                  <span className="text-xs font-mono text-[#00d4ff]/30 mt-1 shrink-0 w-6">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#f0f0f8] mb-2 group-hover:text-[#00d4ff] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#7d7d9a] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
