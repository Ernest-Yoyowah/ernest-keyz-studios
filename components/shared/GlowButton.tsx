"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

interface GlowButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  external?: boolean;
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function GlowButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  external,
  className = "",
  disabled,
}: GlowButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-200 ${sizeClasses[size]} ${className}`;

  const variantClasses = {
    primary:
      "text-[#07070c] bg-[#00d4ff] hover:bg-[#00d4ff]/90 hover:shadow-[0_0_24px_rgba(0,212,255,0.3)] active:scale-[0.98]",
    secondary:
      "text-[#f0f0f8] bg-white/[0.04] border border-white/[0.10] hover:bg-white/[0.07] hover:border-white/[0.16] active:scale-[0.98]",
    ghost:
      "text-[#00d4ff] hover:bg-[#00d4ff]/08 border border-[#00d4ff]/20 hover:border-[#00d4ff]/40 hover:shadow-[0_0_16px_rgba(0,212,255,0.12)] active:scale-[0.98]",
  };

  const classes = `${base} ${variantClasses[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
