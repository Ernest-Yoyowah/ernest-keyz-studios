import type { Metadata } from "next";
import PulseControlBridgeContent from "./PulseControlBridgeContent";

export const metadata: Metadata = {
  title: "PulseControl Bridge",
  description:
    "Native macOS bridge application that connects PulseControl Mobile to DAWs and hardware using CoreMIDI, WebSocket transport, and automatic device discovery.",
};

export default function Page() {
  return <PulseControlBridgeContent />;
}
