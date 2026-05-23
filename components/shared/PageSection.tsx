import type { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  background?: ReactNode;
  className?: string;
  topBorder?: boolean;
  id?: string;
}

export default function PageSection({ children, background, className = "", topBorder = true, id }: PageSectionProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${topBorder ? "border-t border-white/[0.04]" : ""} ${className}`.trim()}>
      {background}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
