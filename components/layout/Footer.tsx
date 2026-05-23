import Link from "next/link";
import { GithubIcon, XIcon } from "@/components/shared/GithubIcon";
import { LogoMark } from "@/components/shared/LogoMark";

const footerLinks = {
  Products: [
    { label: "PulseMIDI", href: "/products/pulsemidi" },
    { label: "All Products", href: "/products" },
    { label: "Download", href: "/download" },
  ],
  Company: [
    { label: "About", href: "/about" },
    {
      label: "GitHub",
      href: "https://github.com/ernest-keyz-studios",
      external: true,
    },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Changelog", href: "/download#changelog" },
    { label: "Release Notes", href: "/download#releases" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07070c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                <LogoMark />
              </div>
              <span className="text-[#f0f0f8] font-semibold text-sm">
                Ernest Keyz Studios
              </span>
            </Link>
            <p className="text-[#7d7d9a] text-sm leading-relaxed max-w-xs">
              Software tools for modern musicians, keyboard players, and live
              performance systems.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com/ernest-keyz-studios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#7d7d9a] hover:text-[#f0f0f8] hover:border-white/[0.14] transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://twitter.com/ernestkeyzstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#7d7d9a] hover:text-[#f0f0f8] hover:border-white/[0.14] transition-all duration-200"
                aria-label="Twitter"
              >
                <XIcon size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold text-[#4a4a5e] uppercase tracking-widest mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#7d7d9a] hover:text-[#f0f0f8] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#7d7d9a] hover:text-[#f0f0f8] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4a4a5e]">
            © {new Date().getFullYear()} Ernest Keyz Studios. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-[#4a4a5e]">
            <span>Built for musicians who code</span>
            <span className="mx-1 text-[#00d4ff]/40">·</span>
            <span className="text-[#00d4ff]/60">macOS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
