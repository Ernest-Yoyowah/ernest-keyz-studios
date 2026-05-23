"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import GlowButton from "@/components/shared/GlowButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/05 text-xs font-medium text-[#00d4ff]/80"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
          PulseMIDI 1.2 now available — macOS universal binary
          <ArrowRight size={11} className="opacity-60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#f0f0f8] leading-[1.05] mb-6"
        >
          Software tools for
          <br />
          <span
            className="text-[#00d4ff] cyan-text-glow"
            style={{
              background:
                "linear-gradient(90deg, #00d4ff 0%, #40e0ff 60%, #80eeff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            modern musicians
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-[#7d7d9a] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Professional tools for keyboard players, live performers, and music
          producers. Real-time MIDI diagnostics, chord detection, and
          performance system software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton href="/download" variant="primary" size="lg">
            <Download size={17} />
            Download PulseMIDI
          </GlowButton>
          <GlowButton
            href="https://github.com/ernest-keyz-studios"
            variant="secondary"
            size="lg"
            external
          >
            <GithubIcon size={17} />
            View on GitHub
          </GlowButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 text-xs text-[#4a4a5e]"
        >
          macOS 12+ · Intel + Apple Silicon · Free download
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#00d4ff]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
