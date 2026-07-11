import type { Metadata } from "next";
import LiveKeyContent from "./LiveKeyContent";

export const metadata: Metadata = {
  title: "LiveKey",
  description:
    "Real-time live key detection for keyboard players, worship musicians, and live performers. Identifies the musical key from a vocal melody in seconds — runs entirely on-device with no internet required.",
};

export default function Page() {
  return <LiveKeyContent />;
}
