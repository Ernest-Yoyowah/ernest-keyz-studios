import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "StudioCTRL is a music technology company building professional software for keyboard players, live performers, and music producers. Learn the story behind the company.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
