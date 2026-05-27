import fs from "fs";
import path from "path";
import { PULSECONTROL_BRIDGE_FILE_NAME } from "@/lib/product";
import PulseControlBridgeDownloadContent from "./PulseControlBridgeDownloadContent";

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export default function PulseControlBridgeDownloadPage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "install",
    PULSECONTROL_BRIDGE_FILE_NAME,
  );
  const stat = fs.statSync(filePath);
  const fileSize = formatFileSize(stat.size);

  return (
    <PulseControlBridgeDownloadContent
      fileName={PULSECONTROL_BRIDGE_FILE_NAME}
      fileSize={fileSize}
    />
  );
}
