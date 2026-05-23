import type { ReactNode } from "react";

export default function TagBadge({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-mono text-[#7d7d9a] bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-md">
      {children}
    </span>
  );
}
