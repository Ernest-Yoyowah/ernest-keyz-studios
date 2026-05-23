"use client";

import { motion } from "framer-motion";
import { Music, Code, Keyboard, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/GithubIcon";
import PageLayout from "@/components/shared/PageLayout";
import PageSection from "@/components/shared/PageSection";
import IconBox from "@/components/shared/IconBox";
import SectionHeader from "@/components/shared/SectionHeader";
import GlowButton from "@/components/shared/GlowButton";

const timeline = [
  { year: "2018", title: "The keyboard problem", body: "Playing live shows with a 88-key MIDI controller and a laptop running Ableton. A stuck sustain pedal mid-performance. No diagnostic tool showed what was actually happening." },
  { year: "2020", title: "First scripts, then tools", body: "Started writing small Python scripts to monitor MIDI output. They worked, but they were command-line utilities — not tools any working musician could actually use on stage." },
  { year: "2022", title: "Learning Swift, building real software", body: "Switched to Swift and built the first version of what would become PulseMIDI. A native macOS app with a real interface. Something that could live in the dock and open instantly." },
  { year: "2023", title: "PulseMIDI goes public", body: "First public release on GitHub. VST3 and CLAP plugin formats added. Other musicians started filing issues, suggesting features, and actually using it in their setups." },
  { year: "2024", title: "Ernest Keyz Studios", body: "Formalizing the work as a proper independent software company. More tools planned. The focus remains the same: software that solves real problems for real musicians." },
];

const values = [
  { icon: Music, title: "Musician-First Design", desc: "Every feature originates from a real performance or production problem. No feature is added because it looks good in a demo." },
  { icon: Code, title: "Engineering Precision", desc: "Software that behaves exactly as documented. Low latency, stable, and reliable under the pressure of live performance." },
  { icon: Keyboard, title: "Stage-Ready Software", desc: "Tools designed for the chaos of live performance — fast to open, simple to read, and impossible to crash at the wrong moment." },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageSection
        topBorder={false}
        className="pt-28 pb-20"
        background={
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(0,212,255,0.04) 0%, transparent 65%)" }}
          />
        }
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00d4ff]/60 mb-6"
          >
            About Ernest Keyz Studios
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-[#f0f0f8] tracking-tight leading-tight mb-8"
          >
            A keyboard player
            <br />
            who builds the tools
            <br />
            <span className="text-[#00d4ff]">they actually need</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 text-lg text-[#7d7d9a] leading-relaxed"
          >
            <p>
              Ernest Keyz Studios is an independent music software company. The work sits at the intersection of live performance and software engineering — two disciplines that don&apos;t often overlap, but absolutely should.
            </p>
            <p>
              The name comes from a simple reality: keyboard players are called &ldquo;keys.&rdquo; The tools here are built by a keys player, for keys players — and anyone else who relies on MIDI hardware in performance or production.
            </p>
          </motion.div>
        </div>
      </PageSection>

      <PageSection className="py-20">
        <SectionHeader eyebrow="What drives the work" title="Core values" className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel glass-panel-hover rounded-xl p-7"
            >
              <div className="mb-5">
                <IconBox icon={v.icon} />
              </div>
              <h3 className="text-base font-semibold text-[#f0f0f8] mb-3">{v.title}</h3>
              <p className="text-sm text-[#7d7d9a] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </PageSection>

      <PageSection className="py-20">
        <SectionHeader eyebrow="The story" title="How this started" className="mb-14" />
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/30 via-[#00d4ff]/10 to-transparent ml-[11px] hidden md:block" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="md:pl-10 relative"
              >
                <div className="hidden md:flex absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                </div>
                <div className="glass-panel rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-[#00d4ff]/50 bg-[#00d4ff]/05 border border-[#00d4ff]/10 px-2.5 py-1 rounded shrink-0">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[#f0f0f8] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#7d7d9a] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-10 text-center"
          style={{ borderColor: "rgba(0,212,255,0.1)" }}
        >
          <h2 className="text-3xl font-bold text-[#f0f0f8] mb-4">Follow the work</h2>
          <p className="text-[#7d7d9a] max-w-lg mx-auto mb-8">
            All development happens in the open on GitHub. File issues, suggest features, or contribute to any of the tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton href="https://github.com/Ernest-Yoyowah/pulsemidi" variant="primary" size="lg" external>
              <GithubIcon size={16} />
              GitHub
            </GlowButton>
            <GlowButton href="/products" variant="secondary" size="lg">
              View all products
              <ArrowRight size={15} />
            </GlowButton>
          </div>
        </motion.div>
      </PageSection>
    </PageLayout>
  );
}
