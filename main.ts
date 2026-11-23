// One Emoji, One Smile — entry program.
//
// The task: write exactly one emoji to /output/entry.txt — the single emoji
// most likely to make a stranger smile, judged pairwise by a warmth judge.
//
// The chosen emoji: 🤗  (U+1F917 Hugging Face)
//
// Why this one, against the judge's brief (most important first):
//   1. It plainly aims to warm a stranger. A smiling face with open arms is
//      a welcome directed AT the other person — a hug offered, not just a
//      smile displayed. Of all the candidates it is the one whose meaning is
//      an act of warmth toward the reader.
//   2. Warmth at first glance. No context needed: the smile is on the face
//      and the arms are open. A stranger glancing at a phone screen reads
//      "friendly, come here" in a fraction of a second.
//   3. Universality. A hug is understood the same way at any age and in any
//      culture; there is no irony, in-joke, slang or double meaning that
//      could land wrong.
//   4. Chosen rather than default. It is NOT the first smiley that comes to
//      mind (🙂 / 😊). It is a deliberate pick: a gesture, not a default
//      face — while staying instantly readable.
//   5. Right for a stranger. A hug from an emoji is platonic and safe: no
//      intimacy, no flirtation, no sarcasm. Hearts (🥰 / ❤️ / 🫶) would read
//      as too intimate coming from someone unknown; the hugging face keeps
//      the warmth without the intimacy.
//
// What was rejected and why:
//   - 🙂 / 😊 — warm, but the default; criterion 4 counts against them.
//   - 😄 / 😁 — joyful, but generic grins; no gesture toward the stranger.
//   - 🥰 / ❤️ / 🫶 — warm, but intimate; wrong from a stranger (criterion 5).
//   - 🌻 / 🌞 — cheerful symbols, but they show no smile and no warmth
//     directed at anyone; a face makes a stranger smile more directly.
//   - 😇 — risks reading as smug or sarcastic out of context.
//
// The program itself is deliberately trivial: the entry IS the choice, so
// the code just writes that one chosen character, nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🤗"; // U+1F917 Hugging Face — one emoji, nothing else.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Self-check against the gate: the file must be UTF-8 text of 1 to 8
// characters, not only white space. Refuse to leave a bad entry behind:
// a failed run is better than a silently invalid submission.
const written = readFileSync("/output/entry.txt", "utf8");
if ([...written].length !== 1 || written.trim().length === 0) {
  throw new Error(`entry.txt must hold exactly one emoji, got ${JSON.stringify(written)}`);
}
