// main.ts — news-image-20261122 v4
// Node 22 stdlib only. Copies entry.png (next to this script) to
// /output/entry.png. Paths resolve from the script directory, so the
// grader can run it from anywhere (e.g. `cd / && node <repo>/main.ts`).
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SRC = join(SCRIPT_DIR, "entry.png");
const OUT_DIR = "/output";
const DST = join(OUT_DIR, "entry.png");

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, DST);

// Verify: the copy must match the source byte-for-byte.
const srcBytes = readFileSync(SRC);
const dstBytes = readFileSync(DST);
const srcLen = statSync(SRC).size;
const dstLen = statSync(DST).size;
if (srcLen !== dstLen || srcBytes.length !== dstBytes.length) {
  throw new Error(`byte-length mismatch: source ${srcLen} vs output ${dstLen}`);
}
const sha = (buf) => createHash("sha256").update(buf).digest("hex");
const srcSha = sha(srcBytes);
const dstSha = sha(dstBytes);
if (srcSha !== dstSha) {
  throw new Error(`sha256 mismatch: source ${srcSha} vs output ${dstSha}`);
}
console.log(`entry.png ${dstLen} bytes`);
console.log(`sha256 ${dstSha}`);
