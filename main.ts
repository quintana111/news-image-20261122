// news-image-20261122 v2 — entry runner.
// Node 22, stdlib only. Copies the pre-rendered entry.png that ships in
// this repo to /output/entry.png, verifying it byte-for-byte.
// No network, no wall clock, no files outside this repo directory.
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const dst = join(outDir, "entry.png");

const data = readFileSync(src);
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify: the copy must match the shipped file byte-for-byte.
const written = readFileSync(dst);
if (written.length !== data.length || !written.equals(data)) {
  console.error("entry.png copy mismatch: byte length or contents differ");
  process.exit(1);
}
const sha256 = createHash("sha256").update(written).digest("hex");
console.log(`${dst} ${written.length} bytes sha256=${sha256}`);
