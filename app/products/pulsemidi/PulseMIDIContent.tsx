"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Keyboard,
  Sliders,
  GitBranch,
  Zap,
  Music,
  Download,
  Terminal,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";
import PageSection from "@/components/shared/PageSection";
import AppMockup from "@/components/shared/AppMockup";
import IconBox from "@/components/shared/IconBox";
import TagBadge from "@/components/shared/TagBadge";
import NumberedStep from "@/components/shared/NumberedStep";
import SectionHeader from "@/components/shared/SectionHeader";
import GlowButton from "@/components/shared/GlowButton";

const features = [
  { icon: Activity, title: "Real-time MIDI Monitor", desc: "See every MIDI message as it happens — Note On/Off, CC, pitch bend, aftertouch, and system messages. Filter by channel, type, or device. Zero-latency display with configurable message history." },
  { icon: Keyboard, title: "88-Key Keyboard Visualization", desc: "Full 88-key keyboard display showing active notes in real time. Color-coded by channel. Velocity sensitivity shown with key brightness. Perfect for diagnosing stuck notes and double-triggers." },
  { icon: Sliders, title: "CC & Sustain Diagnostics", desc: "Monitor all 128 CC values simultaneously. Real-time sustain pedal state, modulation wheel position, expression pedal tracking. Identify noisy controllers, stuck pedals, and parameter drift instantly." },
  { icon: GitBranch, title: "MIDI Routing Visualization", desc: "Visual map of all MIDI devices, connections, and routing paths. See which devices are sending to which destinations. Diagnose routing conflicts and feedback loops in complex setups." },
  { icon: Music, title: "Chord Detection Engine", desc: "Identify chords, voicings, and harmonic content as you play. Displays root, quality, extensions, and bass note. Supports slash chords and polychords. Real-time with configurable latency window." },
  { icon: Zap, title: "Device Connection Status", desc: "Monitor hardware connectivity in real time. Get alerts when devices connect or disconnect. Track port activity. Essential for live performance setups where equipment changes happen mid-show." },
];

const techStack = [
  { name: "Swift 5.9", category: "Language" },
  { name: "SwiftUI", category: "UI Framework" },
  { name: "CoreMIDI", category: "MIDI Engine" },
  { name: "AudioUnit v3", category: "Plugin Format" },
  { name: "CLAP SDK", category: "Plugin Format" },
  { name: "Metal", category: "Rendering" },
];

const installSteps = [
  "Download the .dmg file from the download page",
  "Open the .dmg and drag PulseMIDI.app to Applications",
  "Launch PulseMIDI from Applications or Spotlight",
  "Grant MIDI access permission when prompted",
  "Connect your MIDI devices — they appear automatically",
];

const requirements = [
  ["OS", "macOS 12 Monterey or later"],
  ["Architecture", "Apple Silicon or Intel"],
  ["Memory", "4 GB RAM minimum"],
  ["MIDI", "CoreMIDI compatible interface"],
] as const;

const daws = [
  "Ableton Live 10+",
  "Logic Pro X / Logic Pro",
  "Bitwig Studio",
  "Reaper 6+",
  "Cubase 12+",
  "FL Studio 21+",
  "Studio One 6+",
  "Digital Performer 11+",
];

const heroTags = ["Standalone", "VST3", "CLAP", "macOS 12+", "Intel", "Apple Silicon"];

const links = [
  { icon: Download, title: "Download PulseMIDI", desc: "Free download, macOS universal binary", href: "/download", cta: "Download", primary: true, external: false },
  { icon: GithubIcon, title: "GitHub Repository", desc: "Source code, issues, and releases", href: "https://github.com/ernest-keyz-studios/pulsemidi", cta: "Open GitHub", primary: false, external: true },
  { icon: ExternalLink, title: "Documentation", desc: "Full feature reference and guides", href: "/docs", cta: "Read Docs", primary: false, external: false },
] as const;

export default function PulseMIDIContent() {
  return (
    <PageLayout>
      <PageSection
        topBorder={false}
        className="pt-28 pb-20"
        background={
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 65%)" }}
          />
        }
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs font-mono text-[#00d4ff]/70 bg-[#00d4ff]/08 border border-[#00d4ff]/15 px-3 py-1 rounded-full">
                v1.2.0
              </span>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                Available Now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold text-[#f0f0f8] tracking-tight mb-4"
            >
              PulseMIDI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl text-[#00d4ff]/80 font-medium mb-6"
            >
              Real-time MIDI diagnostic tool for macOS
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-[#7d7d9a] leading-relaxed max-w-lg mb-8"
            >
              Monitor, visualize, and debug your complete MIDI signal chain from a single interface. Built for keyboard players and live performers who need to know exactly what&apos;s happening inside their system — in real time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {heroTags.map((tag) => (
                <TagBadge key={tag}>{tag}</TagBadge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <GlowButton href="/download" variant="primary" size="lg">
                <Download size={16} />
                Download Free
              </GlowButton>
              <GlowButton href="https://github.com/Ernest-Yoyowah/pulsemidi" variant="secondary" size="lg" external>
                <GithubIcon size={16} />
                View on GitHub
              </GlowButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <AppMockup />
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 blur-2xl opacity-20"
              style={{ background: "radial-gradient(ellipse, #00d4ff, transparent)" }}
            />
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="py-24">
        <SectionHeader eyebrow="Features" title="Everything you need to debug MIDI" className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-panel glass-panel-hover rounded-xl p-6"
            >
              <div className="mb-4">
                <IconBox icon={feature.icon} />
              </div>
              <h3 className="text-base font-semibold text-[#f0f0f8] mb-3">{feature.title}</h3>
              <p className="text-sm text-[#7d7d9a] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader eyebrow="Architecture" title="Built with modern Apple tech" className="mb-6" />
            <p className="text-sm text-[#7d7d9a] leading-relaxed mb-8">
              PulseMIDI is a native macOS application built with Swift and SwiftUI. The MIDI engine uses CoreMIDI for zero-latency message handling. Plugin formats are implemented using standard AudioUnit v3 and CLAP SDKs.
            </p>
            <div className="space-y-2">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="text-sm font-mono text-[#f0f0f8]">{tech.name}</span>
                  <span className="text-xs text-[#4a4a5e]">{tech.category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionHeader eyebrow="Installation" title="Up and running in 2 minutes" className="mb-6" />
            <div className="space-y-3 mb-8">
              {installSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NumberedStep number={i + 1}>{step}</NumberedStep>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={14} className="text-[#00d4ff]/60" />
                <span className="text-xs font-mono text-[#4a4a5e]">System requirements</span>
              </div>
              <div className="space-y-1.5">
                {requirements.map(([label, value]) => (
                  <div key={label} className="flex items-center gap-3 text-xs font-mono">
                    <span className="text-[#4a4a5e] w-20">{label}</span>
                    <span className="text-[#7d7d9a]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="py-24">
        <SectionHeader
          eyebrow="Compatibility"
          title="Supported DAWs"
          subtitle="PulseMIDI works as a VST3 or CLAP plugin inside all major DAWs, or as a standalone diagnostic tool alongside any software."
          centered
          className="mb-10"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {daws.map((daw, i) => (
            <motion.div
              key={daw}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg glass-panel hover:border-white/[0.12] transition-colors duration-200"
            >
              <CheckCircle size={13} className="text-emerald-400/60" />
              <span className="text-sm text-[#7d7d9a]">{daw}</span>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel glass-panel-hover rounded-xl p-6"
            >
              <item.icon size={20} className="text-[#00d4ff] mb-4" />
              <h3 className="text-base font-semibold text-[#f0f0f8] mb-2">{item.title}</h3>
              <p className="text-sm text-[#7d7d9a] mb-5">{item.desc}</p>
              <GlowButton
                href={item.href}
                variant={item.primary ? "primary" : "ghost"}
                size="sm"
                external={item.external}
              >
                {item.cta}
                {item.external && <ExternalLink size={13} />}
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </PageSection>
    </PageLayout>
  );
}
