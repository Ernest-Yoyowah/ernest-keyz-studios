"use client";

import { LIVEKEY_VERSION } from "@/lib/product";
import { motion } from "framer-motion";
import {
  Mic,
  Music,
  Keyboard,
  BarChart2,
  Layers,
  ScrollText,
  Download,
  Terminal,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import PageLayout from "@/components/shared/PageLayout";
import PageSection from "@/components/shared/PageSection";
import IconBox from "@/components/shared/IconBox";
import TagBadge from "@/components/shared/TagBadge";
import NumberedStep from "@/components/shared/NumberedStep";
import SectionHeader from "@/components/shared/SectionHeader";
import GlowButton from "@/components/shared/GlowButton";

const features = [
  {
    icon: Mic,
    title: "Real-Time Note Detection",
    desc: "Detects the current pitch being sung at 20–50 Hz using the YIN algorithm with parabolic interpolation. Displays note name, octave, and frequency (e.g. G4 · 392.0 Hz). A median pitch filter eliminates transient errors and a confidence meter confirms each detection.",
  },
  {
    icon: Music,
    title: "Live Key Identification",
    desc: "Identifies the musical key from the vocal melody using Krumhansl-Schmuckler tonal profiles with Pearson correlation. A frequency heuristic weights the most-sung note as the likely tonic. Hysteresis prevents flickering — once a key is locked, it holds until the evidence clearly changes.",
  },
  {
    icon: Keyboard,
    title: "88-Key Piano Visualization",
    desc: "Full 88-key canvas-rendered piano with professional 3D depth. Active note glows blue, the root/tonic glows green, scale notes show a blue tint, and recently-sung notes fade out over 2.8 seconds. C-octave labels (C2, C3…) aid quick orientation. HiDPI/Retina supported.",
  },
  {
    icon: BarChart2,
    title: "Scale & Tonal Analysis",
    desc: "Running pitch class histogram with exponential decay (5-second half-life) shows all detected pitch classes with relative intensity bars. Scale degree numbers (1–7) are displayed alongside note names — the number system used by worship teams and Nashville Number System players.",
  },
  {
    icon: Layers,
    title: "Chord Suggestions",
    desc: "Unlocks after key confidence exceeds 78%. Shows the primary chords (I, IV, V, vi) with Roman numerals and relevance based on how often each chord root was sung. Start here when you first sit down to a new song.",
  },
  {
    icon: ScrollText,
    title: "Piano Roll Timeline",
    desc: "Scrolling 30-second piano roll with each note as a horizontal block — pitch vertical, time horizontal. Root notes highlighted in green. Helps you see melodic patterns and confirms that key detection is tracking the correct scale.",
  },
];

const techStack = [
  { name: "Tauri v2", category: "Desktop runtime" },
  { name: "CPAL", category: "Audio capture" },
  { name: "YIN algorithm", category: "Pitch detection" },
  { name: "Krumhansl-Schmuckler", category: "Key detection" },
  { name: "React 19 + TypeScript", category: "UI framework" },
  { name: "Tailwind CSS v4", category: "Styling" },
  { name: "Zustand", category: "State management" },
  { name: "HTML5 Canvas API", category: "Piano + timeline" },
];

const installSteps = [
  "Download the .dmg installer from the download page",
  "Open the .dmg and drag LiveKey to Applications",
  "Launch LiveKey from Applications or Spotlight",
  "Allow microphone access when prompted",
  "Select your input device and click Start Engine",
];

const requirements = [
  ["OS", "macOS 11 Big Sur or later"],
  ["Architecture", "Apple Silicon or Intel"],
  ["Microphone", "Required for pitch detection"],
  ["Memory", "4 GB RAM minimum"],
] as const;

const worshipUseCases = [
  {
    title: "Singer starts — you don't know the key",
    body: "Start the engine before worship begins. After 5–10 seconds of singing, the Detected Key panel locks in above 80% confidence. Check the chord suggestions and start with the I chord.",
  },
  {
    title: "Verify a key before the song starts",
    body: "Ask the singer to hum a few bars through the microphone. LiveKey identifies the key within seconds. Confirm with the green root note on the piano.",
  },
  {
    title: "Singer modulates mid-song",
    body: "Confidence dips briefly, then rebuilds in the new key. The hysteresis system holds the old key until it's certain of the new one — watch for confidence dropping below 50% as the signal.",
  },
];

const heroTags = [
  "macOS 11+",
  "Intel",
  "Apple Silicon",
  "Tauri v2",
  "Standalone",
];

const links = [
  {
    icon: Download,
    title: "Download LiveKey",
    desc: "Free download, macOS universal binary",
    href: "/download/livekey",
    cta: "Download",
    primary: true,
    external: false,
  },
  {
    icon: GithubIcon,
    title: "GitHub Repository",
    desc: "Source code, issues, and releases",
    href: "https://github.com/Ernest-Yoyowah",
    cta: "Open GitHub",
    primary: false,
    external: true,
  },
  {
    icon: ExternalLink,
    title: "Documentation",
    desc: "Full feature reference and guides",
    href: "/docs",
    cta: "Read Docs",
    primary: false,
    external: false,
  },
] as const;

export default function LiveKeyContent() {
  return (
    <PageLayout>
      <PageSection
        topBorder={false}
        className="pt-28 pb-20"
        background={
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 65%)",
            }}
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
                v{LIVEKEY_VERSION}
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
              LiveKey
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xl text-[#00d4ff]/80 font-medium mb-6"
            >
              Real-time live key detection for keyboard players
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-[#9898b0] leading-relaxed max-w-lg mb-8"
            >
              LiveKey listens through a microphone and tells you the key a
              singer is in — in real time, with no guessing. Tonal analysis
              runs entirely on-device. No internet. No cloud. No latency from
              a server.
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
              <GlowButton href="/download/livekey" variant="primary" size="lg">
                <Download size={16} />
                Download Free
              </GlowButton>
              <GlowButton
                href="https://github.com/Ernest-Yoyowah"
                variant="secondary"
                size="lg"
                external
              >
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
            <div className="glass-panel rounded-2xl p-6 border border-[#00d4ff]/10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-400">LIVE</span>
                </div>
                <span className="text-xs font-mono text-[#6a6a80]">LiveKey v{LIVEKEY_VERSION}</span>
              </div>

              <div className="glass-panel rounded-xl p-4 mb-4">
                <p className="text-xs text-[#6a6a80] uppercase tracking-widest mb-3">Current Note</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-[#00d4ff]">A4</span>
                  <span className="text-sm text-[#9898b0]">440.0 Hz</span>
                  <span className="text-sm font-mono text-[#00d4ff]/60 ml-auto">degree 3</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
                  <div className="h-full w-[82%] rounded-full bg-[#00d4ff]/60" />
                </div>
                <p className="text-xs text-[#6a6a80] mt-1.5">82% confidence</p>
              </div>

              <div className="glass-panel rounded-xl p-4 mb-4" style={{ borderColor: "rgba(0,212,255,0.15)" }}>
                <p className="text-xs text-[#6a6a80] uppercase tracking-widest mb-3">Detected Key</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-[#f0f0f8]">F Major</span>
                  <div className="text-right">
                    <p className="text-xs text-emerald-400">locked</p>
                    <p className="text-xs font-mono text-[#6a6a80]">91%</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-4">
                <p className="text-xs text-[#6a6a80] uppercase tracking-widest mb-3">Chord Suggestions</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { roman: "I", name: "F" },
                    { roman: "IV", name: "Bb" },
                    { roman: "V", name: "C" },
                    { roman: "vi", name: "Dm" },
                  ].map((chord) => (
                    <div
                      key={chord.roman}
                      className="rounded-lg bg-white/[0.04] border border-white/[0.07] p-2.5 text-center"
                    >
                      <p className="text-xs font-mono text-[#00d4ff]/60 mb-1">{chord.roman}</p>
                      <p className="text-sm font-bold text-[#f0f0f8]">{chord.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-12 blur-2xl opacity-20"
              style={{ background: "radial-gradient(ellipse, #00d4ff, transparent)" }}
            />
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="py-24">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need to play in the right key"
          className="mb-14"
        />
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
              <h3 className="text-base font-semibold text-[#f0f0f8] mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-[#9898b0] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection className="py-24">
        <SectionHeader
          eyebrow="For Worship Musicians"
          title="Built for the stage, not the studio"
          subtitle="LiveKey solves a specific, practical problem: during a live worship service, a keyboard player needs to know the key immediately — without stopping, asking, or guessing."
          centered
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {worshipUseCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={14} className="text-emerald-400/60 shrink-0" />
                <h3 className="text-sm font-semibold text-[#f0f0f8]">{item.title}</h3>
              </div>
              <p className="text-sm text-[#9898b0] leading-relaxed">{item.body}</p>
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
            <SectionHeader
              eyebrow="Architecture"
              title="Rust core, React frontend"
              className="mb-6"
            />
            <p className="text-sm text-[#9898b0] leading-relaxed mb-8">
              LiveKey is built on Tauri v2 with a Rust audio engine and a React
              19 frontend. The Rust analysis layer handles audio capture, YIN
              pitch detection, and Krumhansl-Schmuckler key analysis — all
              running natively with no network dependency.
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
                  <span className="text-sm font-mono text-[#f0f0f8]">
                    {tech.name}
                  </span>
                  <span className="text-xs text-[#6a6a80]">
                    {tech.category}
                  </span>
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
            <SectionHeader
              eyebrow="Installation"
              title="Up and running in 2 minutes"
              className="mb-6"
            />
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
                <span className="text-xs font-mono text-[#6a6a80]">
                  System requirements
                </span>
              </div>
              <div className="space-y-1.5">
                {requirements.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-xs font-mono"
                  >
                    <span className="text-[#6a6a80] w-24">{label}</span>
                    <span className="text-[#9898b0]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
              <h3 className="text-base font-semibold text-[#f0f0f8] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#9898b0] mb-5">{item.desc}</p>
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
