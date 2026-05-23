export function LogoMark({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <rect
        x="1"
        y="6"
        width="2"
        height="6"
        rx="0.5"
        fill="#00d4ff"
        opacity="0.5"
      />
      <rect
        x="4.5"
        y="3"
        width="2"
        height="9"
        rx="0.5"
        fill="#00d4ff"
        opacity="0.7"
      />
      <rect x="8" y="1" width="2" height="11" rx="0.5" fill="#00d4ff" />
      <rect
        x="11.5"
        y="4"
        width="2"
        height="8"
        rx="0.5"
        fill="#00d4ff"
        opacity="0.6"
      />
    </svg>
  );
}
