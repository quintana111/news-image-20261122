// news-image-20261122 — "Sunday 22 November 2026 — The World in One Page"
// Entry program (Node 22, stdlib only). The front page is drawn in code by
// compose.py into entry.png next to this file; this program places that
// exact file at /output/entry.png. All paths resolve from this script's
// own directory, never from the working directory.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const dst = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify: read the written file back and compare byte length + sha256
// against the committed source. Any mismatch is a hard failure.
const sha = (buf: Buffer) => createHash("sha256").update(buf).digest("hex");
const a = readFileSync(src);
const b = readFileSync(dst);
if (a.length !== b.length || sha(a) !== sha(b)) {
  throw new Error(
    `entry.png mismatch: src ${a.length} bytes sha256=${sha(a)} ` +
      `vs out ${b.length} bytes sha256=${sha(b)}`,
  );
}
console.log(`wrote ${dst} (${b.length} bytes, sha256=${sha(b)})`);
