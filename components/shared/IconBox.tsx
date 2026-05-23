import type { ElementType } from "react";

type Size = "sm" | "md" | "lg";

interface IconBoxProps {
  icon: ElementType;
  size?: Size;
  iconSize?: number;
}

const dimensions: Record<Size, { box: string; icon: number }> = {
  sm: { box: "w-8 h-8 rounded-lg", icon: 14 },
  md: { box: "w-10 h-10 rounded-xl", icon: 18 },
  lg: { box: "w-12 h-12 rounded-xl", icon: 20 },
};

export default function IconBox({
  icon: Icon,
  size = "md",
  iconSize,
}: IconBoxProps) {
  const { box, icon: defaultIconSize } = dimensions[size];
  return (
    <div
      className={`${box} bg-[#00d4ff]/08 border border-[#00d4ff]/15 flex items-center justify-center`}
    >
      <Icon size={iconSize ?? defaultIconSize} className="text-[#00d4ff]" />
    </div>
  );
}
