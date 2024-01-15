import fs from "fs";
import path from "path";
import mime from "mime";

function getFromFile(imgpath) {
  const data = fs.readFileSync(path.normalize(imgpath));
  const base64 = Buffer.from(data).toString('base64');
  const mimeType = mime.getType(imgpath);
  return `data:${mimeType};base64,${base64}`;
}

export const POKI_LOGO = getFromFile("logos/poki.png")
export const BLOXD_LOGO = getFromFile("logos/bloxd.png");
export const PIXELS_LOGO = getFromFile("logos/pixels-xyz.jpeg");
