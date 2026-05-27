import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import {
  PULSECONTROL_MOBILE_APK_FILE_NAME,
  PULSECONTROL_MOBILE_ZIP_FILE_NAME,
} from "@/lib/product";

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

export async function GET() {
  const downloadFile = resolveMobileDownloadFile();
  if (!downloadFile) {
    return new NextResponse("Not found", { status: 404 });
  }

  const { filePath, fileName } = downloadFile;

  const stat = fs.statSync(filePath);
  const nodeStream = fs.createReadStream(filePath);
  const contentType = fileName.endsWith(".zip")
    ? "application/zip"
    : "application/vnd.android.package-archive";

  const webStream = new ReadableStream({
    start(controller) {
      nodeStream.on("data", (chunk) => controller.enqueue(chunk));
      nodeStream.on("end", () => controller.close());
      nodeStream.on("error", (err) => controller.error(err));
    },
    cancel() {
      nodeStream.destroy();
    },
  });

  return new NextResponse(webStream, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Content-Length": stat.size.toString(),
      "Cache-Control": "no-cache",
    },
  });
}
