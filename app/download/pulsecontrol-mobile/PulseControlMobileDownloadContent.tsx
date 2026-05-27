"use client";

import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  Wifi,
  Package,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle,
} from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import { useState } from "react";
import PageLayout from "@/components/shared/PageLayout";
import NumberedStep from "@/components/shared/NumberedStep";
import SectionHeader from "@/components/shared/SectionHeader";
import GlowButton from "@/components/shared/GlowButton";

const releases = [
  {
    version: "1.0.0",
    date: "May 2026",
    tag: "Latest",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    downloadable: true,
    notes: [
      "Initial Android release",
      "8 high-resolution MIDI faders",
      "8 rotary MIDI control knobs",
      "Wireless WebSocket MIDI communication",
      "Scene-based controller layouts",
      "QR pairing with PulseControl Bridge",
      "Low-latency realtime MIDI control",
    ],
  },
];

const quickStartSteps = [
  {
    title: "Enable Sideload",
    desc: 'Allow "Install unknown apps" in Android settings',
  },
  { title: "Download Package", desc: "Get the Android package from this page" },
  { title: "Install", desc: "Open the downloaded file and tap Install" },
  {
    title: "Pair Bridge",
    desc: "Launch app and scan QR from PulseControl Bridge",
  },
];

const systemBadges = [
  { icon: Smartphone, label: "Android 8.0+" },
  { icon: Wifi, label: "Wi-Fi Required" },
  { icon: Package, label: "Sideload APK" },
];

type Release = (typeof releases)[0];

function ReleaseCard({
  release,
  fileSize,
  packageLabel,
}: {
  release: Release;
  fileSize: string;
  packageLabel: string;
}) {
  const [expanded, setExpanded] = useState(release.tag === "Latest");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-panel rounded-xl overflow-hidden"
    >
      <div
        className="flex items-start justify-between gap-4 p-6 cursor-pointer"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-lg font-bold text-[#f0f0f8]">
                v{release.version}
              </span>
              <span
                className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${release.tagColor}`}
              >
                {release.tag}
              </span>
            </div>
            <p className="text-xs text-[#4a4a5e]">
              Released {release.date}
              {release.downloadable ? ` · ${fileSize}` : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {release.downloadable && (
            <a
              href="/api/download/pulsecontrol-mobile"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#07070c] bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_12px_rgba(0,212,255,0.2)]"
            >
              <Download size={12} />
              {packageLabel}
            </a>
          )}
          <button className="text-[#4a4a5e] hover:text-[#f0f0f8] transition-colors">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
      {expanded && (
        <div className="px-6 pb-6 border-t border-white/[0.05]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4a4a5e] mt-5 mb-4">
            Release Notes
          </p>
          <ul className="space-y-2">
            {release.notes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2.5 text-sm text-[#7d7d9a]"
              >
                <span className="w-1 h-1 rounded-full bg-[#00d4ff]/40 mt-2 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default function PulseControlMobileDownloadContent({
  fileName,
  fileSize,
}: {
  fileName: string;
  fileSize: string;
}) {
  const isZipPackage = fileName.endsWith(".zip");
  const packageLabel = isZipPackage ? ".zip" : ".apk";

  const fileInfo: [string, string][] = [
    ["File", fileName],
    ["Size", fileSize],
    ["Platform", "Android 8.0+"],
    ["Distribution", isZipPackage ? "Sideload ZIP Package" : "Sideload APK"],
    ["iOS", "Coming Soon"],
  ];

  return (
    <PageLayout>
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-4">
              Download Center
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#f0f0f8] tracking-tight mb-4">
              Download PulseControl Mobile
            </h1>
            <p className="text-lg text-[#7d7d9a] max-w-xl">
              Free Android package. Requires PulseControl Bridge on macOS to
              function.{" "}
              {isZipPackage ? "Download ZIP and extract the APK." : ""}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-start gap-3 px-5 py-4 rounded-xl border border-amber-400/20 bg-amber-400/05 mb-8"
          >
            <AlertCircle size={16} className="text-amber-400 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-400/80">
              This is a sideload Android package — not distributed via the Play
              Store. You must enable{" "}
              <span className="font-semibold text-amber-400">
                Install unknown apps
              </span>{" "}
              in Android Settings before installing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 mb-8"
            style={{ borderColor: "rgba(0,212,255,0.12)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-2xl font-bold text-[#f0f0f8]">
                    PulseControl Mobile
                  </span>
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                    Android
                  </span>
                </div>
                <p className="text-[#7d7d9a] mb-6 leading-relaxed">
                  Wireless MIDI control surface. Touch faders and rotary knobs
                  over Wi-Fi — pairs with PulseControl Bridge on macOS via QR
                  code.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {systemBadges.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs text-[#7d7d9a]"
                    >
                      <item.icon size={12} />
                      {item.label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/api/download/pulsecontrol-mobile"
                    className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#07070c] bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_24px_rgba(0,212,255,0.3)] cyan-glow"
                  >
                    <Download size={16} />
                    {`Download ${packageLabel} (Android)`}
                  </a>
                  <GlowButton
                    href="https://github.com/Ernest-Yoyowah"
                    variant="secondary"
                    size="md"
                    external
                  >
                    <GithubIcon size={16} />
                    All releases
                    <ExternalLink size={12} className="opacity-50" />
                  </GlowButton>
                </div>
              </div>

              <div className="glass-panel rounded-xl p-5 font-mono">
                <p className="text-xs text-[#4a4a5e] uppercase tracking-widest mb-4">
                  File info
                </p>
                <div className="space-y-3">
                  {fileInfo.map(([key, val]) => (
                    <div key={key} className="flex items-start gap-3 text-xs">
                      <span className="text-[#4a4a5e] w-28 shrink-0">
                        {key}
                      </span>
                      <span className="text-[#7d7d9a] break-all">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 mb-12"
          >
            <h2 className="text-lg font-bold text-[#f0f0f8] mb-6">
              Quick start
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {quickStartSteps.map((s, i) => (
                <NumberedStep key={s.title} number={i + 1} title={s.title}>
                  {s.desc}
                </NumberedStep>
              ))}
            </div>
          </motion.div>

          <div id="changelog">
            <SectionHeader
              eyebrow="Changelog"
              title="Release history"
              className="mb-8"
            />
            <div id="releases" className="space-y-4">
              {releases.map((release) => (
                <ReleaseCard
                  key={release.version}
                  release={release}
                  fileSize={fileSize}
                  packageLabel={packageLabel}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
