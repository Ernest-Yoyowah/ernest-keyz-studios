import type { ReactNode } from "react";

interface NumberedStepProps {
  number: number;
  title?: string;
  children: ReactNode;
}

export default function NumberedStep({
  number,
  title,
  children,
}: NumberedStepProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-6 h-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-xs font-bold text-[#00d4ff] shrink-0 mt-0.5">
        {number}
      </span>
      <div>
        {title && (
          <p className="text-sm font-semibold text-[#f0f0f8] mb-1">{title}</p>
        )}
        <p className="text-sm text-[#7d7d9a] leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
