import fs from "fs";
import path from "path";
import DownloadPageContent from "./DownloadPageContent";
import { PULSEMIDI_FILE_NAME } from "@/lib/product";

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export default function DownloadPage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "install",
    PULSEMIDI_FILE_NAME,
  );
  const stat = fs.statSync(filePath);
  const fileSize = formatFileSize(stat.size);

  return (
    <DownloadPageContent fileName={PULSEMIDI_FILE_NAME} fileSize={fileSize} />
  );
}
