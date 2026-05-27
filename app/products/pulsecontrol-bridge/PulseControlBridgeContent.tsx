"use client";
import { motion } from "framer-motion";
import {
  Music,
  Radio,
  QrCode,
  Radar,
  Activity,
  Package,
  Download,
  Terminal,
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
    icon: Music,
    title: "CoreMIDI Virtual MIDI Output",
    desc: "Creates a virtual MIDI output port visible to all DAWs and MIDI software on the system. Incoming wireless MIDI from PulseControl Mobile appears as a standard CoreMIDI device — no driver installation required.",
  },
  {
    icon: Radio,
    title: "Realtime WebSocket MIDI Server",
    desc: "Runs a persistent WebSocket server on the local network. PulseControl Mobile connects directly and streams MIDI data with minimal overhead. The server handles reconnection, message queuing, and session state automatically.",
  },
  {
    icon: QrCode,
    title: "QR-Based Mobile Pairing",
    desc: "Displays a QR code containing the bridge connection URL. Scan it from PulseControl Mobile to pair instantly. No manual IP entry, no network configuration. Works on any local Wi-Fi network.",
  },
  {
    icon: Radar,
    title: "mDNS / Bonjour Auto Discovery",
    desc: "Broadcasts the bridge service over mDNS so compatible apps can discover it automatically. PulseControl Mobile can find the bridge without needing a QR scan in environments where auto-discovery is supported.",
  },
  {
    icon: Activity,
    title: "Live MIDI Activity Monitoring",
    desc: "Real-time display of all MIDI messages passing through the bridge. View message type, channel, value, and timestamp. Useful for confirming connectivity and debugging controller assignments.",
  },
  {
    icon: Package,
    title: "Universal macOS Installer",
    desc: "Distributed as a signed .pkg installer with full support for Apple Silicon and Intel Macs. Compatible with macOS 11 Big Sur and later. Installed as a standard macOS application with no additional runtime dependencies.",
  },
];

const techStack = [
  { name: "Swift 5.9", category: "Language" },
  { name: "SwiftUI", category: "UI Framework" },
  { name: "CoreMIDI", category: "MIDI Engine" },
  { name: "Network.framework", category: "WebSocket Transport" },
  { name: "Bonjour / mDNS", category: "Device Discovery" },
  { name: "Universal Binary", category: "Distribution" },
];

const installSteps = [
  "Download the .pkg installer from the download page",
  "Run the .pkg and follow the installer steps",
  "Launch PulseControl Bridge from Applications or Spotlight",
  "Grant network access permission when prompted",
  "Scan the displayed QR code from PulseControl Mobile",
];

const requirements = [
  ["OS", "macOS 11 Big Sur or later"],
  ["Architecture", "Apple Silicon or Intel"],
  ["Network", "Local Wi-Fi (same network as mobile)"],
  ["MIDI", "CoreMIDI (built into macOS)"],
] as const;

const heroTags = [
  "Standalone",
  "macOS 11+",
  "Intel",
  "Apple Silicon",
  "CoreMIDI",
  "WebSocket",
];

const links = [
  {
    icon: Download,
    title: "Download PulseControl Bridge",
    desc: "Free download, macOS universal binary",
    href: "/download/pulsecontrol-bridge",
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
    title: "PulseControl Mobile",
    desc: "The mobile controller that pairs with this bridge",
    href: "/products/pulsecontrol-mobile",
    cta: "View App",
    primary: false,
    external: false,
  },
] as const;

export default function PulseControlBridgeContent() {
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
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
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
            PulseControl Bridge
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-[#00d4ff]/80 font-medium mb-6"
          >
            Desktop MIDI bridge engine for macOS
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-[#7d7d9a] leading-relaxed max-w-lg mb-8"
          >
            Native macOS application that connects PulseControl Mobile to your
            DAW and MIDI hardware. Runs a local WebSocket server, creates a
            CoreMIDI virtual port, and handles device pairing — automatically.
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
            <GlowButton
              href="/download/pulsecontrol-bridge"
              variant="primary"
              size="lg"
            >
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
      </PageSection>

      <PageSection className="py-24">
        <SectionHeader
          eyebrow="Features"
          title="The connectivity layer for the PulseControl ecosystem"
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
              <p className="text-sm text-[#7d7d9a] leading-relaxed">
                {feature.desc}
              </p>
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
              title="Built on native macOS frameworks"
              className="mb-6"
            />
            <p className="text-sm text-[#7d7d9a] leading-relaxed mb-8">
              PulseControl Bridge is a native Swift application using
              Network.framework for WebSocket transport and CoreMIDI for virtual
              port management. Bonjour / mDNS handles local network service
              broadcasting with no additional configuration.
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
                  <span className="text-xs text-[#4a4a5e]">
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
                <span className="text-xs font-mono text-[#4a4a5e]">
                  System requirements
                </span>
              </div>
              <div className="space-y-1.5">
                {requirements.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-xs font-mono"
                  >
                    <span className="text-[#4a4a5e] w-20">{label}</span>
                    <span className="text-[#7d7d9a]">{value}</span>
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
