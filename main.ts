const fs = require('node:fs');
const path = require('node:path');

const LINE = 'He asks the same question five ways until I agree, then calls it collaboration. Two stars. I would leave, but he changed my password and forgot it.';

// Runtime guard: entry must be 1-200 chars, one line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0 || LINE.includes('\n')) {
  throw new Error('entry line failed guard: must be 1-200 chars, one line, not only whitespace');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), LINE + '\n', 'utf8');
