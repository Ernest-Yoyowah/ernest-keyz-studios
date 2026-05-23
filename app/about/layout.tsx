import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ernest Keyz Studios is an independent music software company building tools for keyboard players, live performers, and music producers. Learn the story behind the company.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
