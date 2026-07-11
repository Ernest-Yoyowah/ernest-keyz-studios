import fs from "fs";
import path from "path";
import { LIVEKEY_FILE_NAME } from "@/lib/product";
import LiveKeyDownloadContent from "./LiveKeyDownloadContent";

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

export default function LiveKeyDownloadPage() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "install",
    LIVEKEY_FILE_NAME,
  );
  const stat = fs.statSync(filePath);
  const fileSize = formatFileSize(stat.size);

  return (
    <LiveKeyDownloadContent
      fileName={LIVEKEY_FILE_NAME}
      fileSize={fileSize}
    />
  );
}
