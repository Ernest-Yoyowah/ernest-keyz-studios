"use client";
import { motion } from "framer-motion";
import {
  Sliders,
  RotateCcw,
  Wifi,
  LayoutGrid,
  QrCode,
  Zap,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import PageLayout from "@/components/shared/PageLayout";
import PageSection from "@/components/shared/PageSection";
import IconBox from "@/components/shared/IconBox";
import TagBadge from "@/components/shared/TagBadge";
import SectionHeader from "@/components/shared/SectionHeader";
import GlowButton from "@/components/shared/GlowButton";

const features = [
  {
    icon: Sliders,
    title: "8 High-Resolution MIDI Faders",
    desc: "Precision touch faders mapped to any MIDI CC. Each fader supports full 7-bit resolution with configurable range, channel, and CC assignment. Designed for smooth, responsive DAW mixing and plugin automation.",
  },
  {
    icon: RotateCcw,
    title: "8 Rotary MIDI Control Knobs",
    desc: "Eight rotary controls for continuous parameter manipulation. Assign to filter cutoff, reverb depth, send levels, or any MIDI-controllable parameter. Relative and absolute modes supported.",
  },
  {
    icon: Wifi,
    title: "Wireless WebSocket MIDI",
    desc: "Full MIDI communication over Wi-Fi via a persistent WebSocket connection to PulseControl Bridge. No USB required. Designed for stable, low-jitter wireless control in live and studio environments.",
  },
  {
    icon: LayoutGrid,
    title: "Scene-Based Controller Layouts",
    desc: "Save and recall complete controller configurations as scenes. Switch between mixing layout, plugin control, and live performance macros instantly. Scenes sync automatically with the desktop bridge.",
  },
  {
    icon: QrCode,
    title: "QR Pairing with Desktop Bridge",
    desc: "Scan a QR code displayed by PulseControl Bridge to pair instantly. No IP configuration or network setup required. Works on any local Wi-Fi network.",
  },
  {
    icon: Zap,
    title: "Low-Latency Realtime Control",
    desc: "Engineered for minimal round-trip latency over local networks. MIDI messages are transmitted and received in real time, making PulseControl Mobile suitable for live performance and tight DAW automation.",
  },
];

const heroTags = ["iOS", "Android", "Mobile App", "Wi-Fi", "WebSocket MIDI"];

const links = [
  {
    icon: GithubIcon,
    title: "GitHub Repository",
    desc: "Track development and follow release progress",
    href: "https://github.com/Ernest-Yoyowah",
    cta: "Open GitHub",
    primary: false,
    external: true,
  },
  {
    icon: ExternalLink,
    title: "PulseControl Bridge",
    desc: "The desktop companion required to use this app",
    href: "/products/pulsecontrol-bridge",
    cta: "View Bridge",
    primary: true,
    external: false,
  },
] as const;

export default function PulseControlMobileContent() {
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
            <span className="text-xs font-medium text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              Coming Soon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-[#f0f0f8] tracking-tight mb-4"
          >
            PulseControl Mobile
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl text-[#00d4ff]/80 font-medium mb-6"
          >
            Wireless MIDI control surface for iPhone and Android
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-[#7d7d9a] leading-relaxed max-w-lg mb-8"
          >
            Transform your phone into a professional wireless MIDI controller.
            Touch faders, rotary knobs, and scene-based layouts — connected to
            your DAW and hardware over Wi-Fi via PulseControl Bridge.
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
              href="/products/pulsecontrol-bridge"
              variant="primary"
              size="lg"
            >
              View Desktop Bridge
            </GlowButton>
            <GlowButton
              href="https://github.com/Ernest-Yoyowah"
              variant="secondary"
              size="lg"
              external
            >
              <GithubIcon size={16} />
              Follow on GitHub
            </GlowButton>
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="py-24">
        <SectionHeader
          eyebrow="Features"
          title="Professional control on any surface"
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

      <PageSection className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
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
