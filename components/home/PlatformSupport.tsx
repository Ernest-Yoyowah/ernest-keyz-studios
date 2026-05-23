"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Standalone", desc: "Native macOS app", color: "#00d4ff" },
  { name: "VST3", desc: "All major DAWs", color: "#00d4ff" },
  { name: "CLAP", desc: "Open standard plugin", color: "#00d4ff" },
  { name: "Apple Silicon", desc: "M1, M2, M3, M4", color: "#00d4ff" },
  { name: "Intel", desc: "x86_64 macOS", color: "#00d4ff" },
  { name: "macOS 12+", desc: "Monterey and later", color: "#00d4ff" },
];

const daws = [
  "Ableton Live",
  "Logic Pro",
  "Bitwig Studio",
  "Reaper",
  "Cubase",
  "FL Studio",
  "Studio One",
  "Digital Performer",
];

export default function PlatformSupport() {
  return (
    <section className="relative py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-4">
            Platform Support
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f0f8] tracking-tight">
            Works everywhere you work
          </h2>
          <p className="mt-4 text-[#7d7d9a] max-w-lg mx-auto">
            Universal binary support. Runs natively on Apple Silicon and Intel —
            no emulation, no compromises.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass-panel rounded-xl p-4 text-center group hover:border-[#00d4ff]/20 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/08 border border-[#00d4ff]/15 flex items-center justify-center mx-auto mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#00d4ff]/60" />
              </div>
              <p className="text-xs font-semibold text-[#f0f0f8] mb-1">
                {p.name}
              </p>
              <p className="text-[10px] text-[#4a4a5e]">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel rounded-2xl p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#4a4a5e] mb-6 text-center">
            Compatible DAWs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {daws.map((daw, i) => (
              <motion.span
                key={daw}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.04 }}
                className="text-sm text-[#7d7d9a] px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:text-[#f0f0f8] hover:border-white/[0.10] transition-colors duration-200"
              >
                {daw}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
