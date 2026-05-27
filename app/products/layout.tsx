import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the PulseControl ecosystem by Ernest Keyz Studios — professional MIDI tools for macOS, iOS, and Android. PulseMIDI, PulseControl Mobile, PulseControl Bridge.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
