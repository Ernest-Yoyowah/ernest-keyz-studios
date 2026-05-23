"use client";

import { motion } from "framer-motion";

const MIDI_ROWS = [
  { t: "00:00.124", ch: "1", type: "Note On", v: "C4 vel:127" },
  { t: "00:00.189", ch: "1", type: "CC 64", v: "127 (on)" },
  { t: "00:00.302", ch: "2", type: "Note On", v: "G3 vel:89" },
  { t: "00:00.445", ch: "1", type: "Pitch", v: "+1200" },
  { t: "00:00.512", ch: "1", type: "Note Off", v: "C4" },
];

const BLACK_KEY_INDICES = [1, 3, 6, 8, 10];
const LIT_NOTE_INDICES = [0, 4, 7, 11];
const KEY_COUNT = 28;
const BAR_COUNT = 40;

export default function AppMockup() {
  return (
    <div
      className="glass-panel rounded-2xl overflow-hidden"
      style={{ borderColor: "rgba(0,212,255,0.2)" }}
    >
      <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-xs text-[#4a4a5e] font-mono">
            PulseMIDI — MIDI Monitor
          </span>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-[#4a4a5e]">SIGNAL</span>
            <span className="text-xs font-mono text-[#00d4ff]/50">● LIVE</span>
          </div>
          <div className="flex items-end gap-0.5 h-14 bg-black/20 rounded-lg p-2">
            {Array.from({ length: BAR_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  height: [
                    `${15 + Math.sin(i * 0.5) * 40 + Math.random() * 30}%`,
                    `${15 + Math.sin(i * 0.5 + 1) * 40 + Math.random() * 30}%`,
                  ],
                }}
                transition={{
                  duration: 0.5 + Math.random() * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex-1 rounded-sm"
                style={{
                  background: `rgba(0, 212, 255, ${0.3 + Math.random() * 0.4})`,
                  minHeight: 3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="grid grid-cols-4 gap-2 px-3 py-1 text-[10px] font-mono text-[#4a4a5e] uppercase">
            <span>Time</span>
            <span>Ch</span>
            <span>Type</span>
            <span>Value</span>
          </div>
          {MIDI_ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-2 px-3 py-2 text-xs font-mono rounded-md bg-white/[0.02] border border-white/[0.04]"
            >
              <span className="text-[#4a4a5e]">{row.t}</span>
              <span className="text-[#00d4ff]/60">{row.ch}</span>
              <span className="text-[#7d7d9a]">{row.type}</span>
              <span className="text-[#f0f0f8]/60">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-0.5 pt-1">
          {Array.from({ length: KEY_COUNT }).map((_, i) => {
            const isBlack = BLACK_KEY_INDICES.includes(i % 12);
            const lit = LIT_NOTE_INDICES.includes(i % 12);
            return (
              <div
                key={i}
                className={`rounded-sm ${
                  isBlack
                    ? `h-6 flex-[0.65] ${lit ? "bg-[#00d4ff]" : "bg-[#161625]"}`
                    : `h-10 flex-1 border border-white/[0.06] ${lit ? "bg-[#00d4ff]" : "bg-white/[0.07]"}`
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
