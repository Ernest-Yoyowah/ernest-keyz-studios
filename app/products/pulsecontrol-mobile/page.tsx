import type { Metadata } from "next";
import PulseControlMobileContent from "./PulseControlMobileContent";

export const metadata: Metadata = {
  title: "PulseControl Mobile",
  description:
    "Professional wireless MIDI controller for iPhone and Android. Control DAWs, plugins, live playback systems, and external hardware using responsive touch faders and rotary controls over Wi-Fi.",
};

export default function Page() {
  return <PulseControlMobileContent />;
}
