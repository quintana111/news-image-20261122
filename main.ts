// news-image-20261122 v3 — entrypoint.
// Copies entry.png (rendered deterministically by compose-v3.py) to
// /output/entry.png and verifies byte-length + sha256.
// Node 22+ stdlib only. Paths resolve from this script's directory.
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR: string = dirname(fileURLToPath(import.meta.url));
const SRC: string = join(SCRIPT_DIR, "entry.png");
const OUT_DIR: string = "/output";
const DST: string = join(OUT_DIR, "entry.png");

function sha256(buf: Buffer): string {
  return createHash("sha256").update(buf).digest("hex");
}

function main(): void {
  const srcBuf: Buffer = readFileSync(SRC);
  const srcStat = statSync(SRC);
  const srcHash: string = sha256(srcBuf);
  console.log(`entry.png: ${srcStat.size} bytes, sha256 ${srcHash}`);
  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(SRC, DST);
  const dstBuf: Buffer = readFileSync(DST);
  const dstStat = statSync(DST);
  if (dstStat.size !== srcStat.size) {
    throw new Error(
      `byte-length mismatch: src ${srcStat.size} vs dst ${dstStat.size}`,
    );
  }
  const dstHash: string = sha256(dstBuf);
  if (dstHash !== srcHash) {
    throw new Error(`sha256 mismatch: src ${srcHash} vs dst ${dstHash}`);
  }
  console.log(`copied to ${DST} (verified: ${dstStat.size} bytes, sha256 ${dstHash})`);
}

main();
