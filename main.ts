import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry, jury duty called me in, court starts 9:30 and phones are banned till lunch.";

// The gate allows 1-140 characters and the brief caps the excuse at 20 words.
// Fail loudly instead of submitting a line the gate would reject.
const words = LINE.trim().split(/\s+/);
if (LINE.length < 1 || LINE.length > 140 || words.length > 20) {
  throw new Error(
    `entry out of bounds: ${LINE.length} chars, ${words.length} words`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
