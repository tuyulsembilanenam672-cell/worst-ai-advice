// worst-ai-advice: one line of the worst advice an AI could give.
// Writes the line to /output/entry.txt (1-140 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "To save battery on a road trip, turn off your GPS first \u2014 your sense of direction will handle the rest.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 140) {
  throw new Error(`line must be 1-140 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
