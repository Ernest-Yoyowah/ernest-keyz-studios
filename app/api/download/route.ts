import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { PULSEMIDI_FILE_NAME } from "@/lib/product";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "install",
    PULSEMIDI_FILE_NAME,
  );

  if (!fs.existsSync(filePath)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const nodeStream = fs.createReadStream(filePath);

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
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${PULSEMIDI_FILE_NAME}"`,
      "Content-Length": stat.size.toString(),
      "Cache-Control": "no-cache",
    },
  });
}
