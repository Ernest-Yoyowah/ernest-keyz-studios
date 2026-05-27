import fs from "fs";
import path from "path";
import {
  PULSECONTROL_MOBILE_APK_FILE_NAME,
  PULSECONTROL_MOBILE_ZIP_FILE_NAME,
} from "@/lib/product";
import PulseControlMobileDownloadContent from "./PulseControlMobileDownloadContent";

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(1)} MB`;
}

function resolveMobileDownloadFile() {
  const candidates = [
    PULSECONTROL_MOBILE_APK_FILE_NAME,
    PULSECONTROL_MOBILE_ZIP_FILE_NAME,
  ];

  for (const fileName of candidates) {
    const filePath = path.join(process.cwd(), "public", "install", fileName);
    if (fs.existsSync(filePath)) {
      return { fileName, filePath };
    }
  }

  return null;
}

export default function PulseControlMobileDownloadPage() {
  const downloadFile = resolveMobileDownloadFile();
  const fileName = downloadFile?.fileName ?? PULSECONTROL_MOBILE_ZIP_FILE_NAME;
  const fileSize = downloadFile
    ? formatFileSize(fs.statSync(downloadFile.filePath).size)
    : "Unavailable";

  return (
    <PulseControlMobileDownloadContent
      fileName={fileName}
      fileSize={fileSize}
    />
  );
}
