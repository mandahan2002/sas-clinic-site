import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const targets = [
  { in: "public/logo.png", out: "public/logo.webp", quality: 85 },
  { in: "public/online-patient.png", out: "public/online-patient.webp", quality: 80 },
];

for (const t of targets) {
  if (!fs.existsSync(t.in)) {
    console.log("skip (not found):", t.in);
    continue;
  }
  await sharp(t.in)
    .webp({ quality: t.quality })
    .toFile(t.out);
  console.log("converted:", t.in, "->", t.out);
}
