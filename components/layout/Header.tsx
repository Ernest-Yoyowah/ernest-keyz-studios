"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/shared/LogoMark";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/products/pulsemidi", label: "PulseMIDI" },
  { href: "/about", label: "About" },
];

function useDownloadHref(pathname: string): string {
  if (
    pathname.startsWith("/products/pulsecontrol-mobile") ||
    pathname.startsWith("/download/pulsecontrol-mobile")
  ) {
    return "/download/pulsecontrol-mobile";
  }

  if (
    pathname.startsWith("/products/pulsecontrol-bridge") ||
    pathname.startsWith("/download/pulsecontrol-bridge")
  ) {
    return "/download/pulsecontrol-bridge";
  }
  return "/download";
}

export default function Header() {
  const pathname = usePathname();
  const downloadHref = useDownloadHref(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07070c]/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center transition-all duration-200 group-hover:bg-[#00d4ff]/15 group-hover:border-[#00d4ff]/35">
              <LogoMark />
            </div>
            <span className="text-[#f0f0f8] font-semibold text-sm tracking-wide">
              Ernest Keyz Studios
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    active
                      ? "text-[#00d4ff]"
                      : "text-[#7d7d9a] hover:text-[#f0f0f8]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[#00d4ff]/08 border border-[#00d4ff]/15 rounded-md"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={downloadHref}
              className="px-4 py-2 text-sm font-semibold text-[#07070c] bg-[#00d4ff] rounded-md hover:bg-[#00d4ff]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]"
            >
              Download
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-[#7d7d9a] hover:text-[#f0f0f8] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#07070c]/95 backdrop-blur-xl border-b border-white/[0.07] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      active
                        ? "text-[#00d4ff] bg-[#00d4ff]/08"
                        : "text-[#7d7d9a] hover:text-[#f0f0f8] hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-white/[0.07] mt-2">
                <Link
                  href={downloadHref}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-[#07070c] bg-[#00d4ff] rounded-md"
                >
                  Download
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
