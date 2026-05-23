"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink, CheckCircle } from "lucide-react";
import TagBadge from "@/components/shared/TagBadge";

interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  version?: string;
  status: "available" | "beta" | "coming-soon";
  platform?: string[];
  formats?: string[];
  features?: string[];
  href?: string;
  downloadHref?: string;
}

const statusConfig = {
  available: {
    label: "Available",
    className: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  beta: {
    label: "Beta",
    className: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "text-[#7d7d9a] bg-white/[0.04] border-white/[0.08]",
  },
};

export default function ProductCard({
  name,
  tagline,
  description,
  version,
  status,
  platform = [],
  formats = [],
  features = [],
  href,
  downloadHref,
}: ProductCardProps) {
  const { label, className: statusClass } = statusConfig[status];

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group glass-panel glass-panel-hover rounded-xl overflow-hidden flex flex-col"
    >
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-[#f0f0f8] tracking-tight">
                {name}
              </h3>
              {version && (
                <span className="text-xs font-mono text-[#00d4ff]/70 bg-[#00d4ff]/08 border border-[#00d4ff]/15 px-2 py-0.5 rounded">
                  v{version}
                </span>
              )}
            </div>
            <p className="text-sm text-[#00d4ff]/80 font-medium">{tagline}</p>
          </div>
          <span
            className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border ${statusClass}`}
          >
            {label}
          </span>
        </div>

        <p className="text-sm text-[#7d7d9a] leading-relaxed">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-1.5">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-xs text-[#7d7d9a]"
              >
                <CheckCircle size={12} className="text-[#00d4ff]/60 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {formats.map((f) => (
            <TagBadge key={f}>{f}</TagBadge>
          ))}
          {platform.map((p) => (
            <TagBadge key={p}>{p}</TagBadge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2 mt-auto">
          {downloadHref && status === "available" && (
            <Link
              href={downloadHref}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#07070c] bg-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/90 transition-all hover:shadow-[0_0_16px_rgba(0,212,255,0.25)]"
            >
              <Download size={13} />
              Download
            </Link>
          )}
          {href && (
            <Link
              href={href}
              className="flex items-center gap-1.5 text-xs font-medium text-[#7d7d9a] hover:text-[#f0f0f8] transition-colors"
            >
              Learn more
              <ExternalLink size={12} />
            </Link>
          )}
          {status === "coming-soon" && (
            <span className="text-xs text-[#4a4a5e]">In development</span>
          )}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
