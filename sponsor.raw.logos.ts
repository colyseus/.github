import fs from "fs";
import path from "path";

function getFromFile(imgpath) {
  const data = fs.readFileSync(path.normalize(imgpath));
  const base64 = Buffer.from(data).toString('base64');
  return `data:image/png;base64,${base64}`;
}

export const POKI_LOGO = getFromFile("logos/poki.png")
export const BLOXD_LOGO = getFromFile("logos/bloxd.png");
