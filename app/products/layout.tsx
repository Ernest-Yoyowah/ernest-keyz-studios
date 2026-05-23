import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore all software tools by Ernest Keyz Studios — built for keyboard players, live performers, and music producers. PulseMIDI, KeyMapper, SignalFlow, and more.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
