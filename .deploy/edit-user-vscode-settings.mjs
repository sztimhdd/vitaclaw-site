// Surgically add a WSL profile to the user-level VS Code settings.json
// and switch the default Windows terminal profile to it. Preserves comments
// and original formatting; backs up the file and reverts on JSON failure.
import fs from 'node:fs';

const PATH = '/mnt/c/Users/Administrator/AppData/Roaming/Code/User/settings.json';
const ts = new Date().toISOString().replace(/[:.]/g, '-');
const backup = `${PATH}.bak.${ts}`;

const orig = fs.readFileSync(PATH, 'utf8');
fs.writeFileSync(backup, orig);
console.log(`backup written: ${backup}`);

let s = orig;

// 1) Inject a "WSL (Ubuntu-24.04)" profile inside terminal.integrated.profiles.windows
//    (placed immediately before the existing "PowerShell" entry).
const WSL_PROFILE_BLOCK =
  `        "WSL (Ubuntu-24.04)": {\r\n` +
  `            "path": "C:\\\\Windows\\\\System32\\\\wsl.exe",\r\n` +
  `            "args": ["-d", "Ubuntu-24.04", "--cd", "~"],\r\n` +
  `            "icon": "terminal-ubuntu"\r\n` +
  `        },\r\n`;

if (!s.includes('"WSL (Ubuntu-24.04)"')) {
  const replaced = s.replace(
    /(\r?\n)(\s*)"PowerShell":\s*\{/,
    (_m, nl, ind) => `${nl}${ind}${WSL_PROFILE_BLOCK.replace(/^ {8}/gm, ind)}${ind}"PowerShell": {`,
  );
  if (replaced === s) {
    console.error('FATAL: could not find "PowerShell" profile to anchor WSL injection.');
    process.exit(1);
  }
  s = replaced;
} else {
  console.log('WSL profile already present, leaving profiles block unchanged.');
}

// 2) Flip the default Windows terminal profile.
const before = s;
s = s.replace(
  /"terminal\.integrated\.defaultProfile\.windows":\s*"[^"]*"/,
  '"terminal.integrated.defaultProfile.windows": "WSL (Ubuntu-24.04)"',
);
if (s === before) {
  console.error('FATAL: could not find terminal.integrated.defaultProfile.windows to update.');
  process.exit(1);
}

// 3) Validate the result by stripping JSONC comments and parsing.
const stripped = s
  .replace(/\/\/[^\n]*/g, '')
  .replace(/\/\*[\s\S]*?\*\//g, '');
try {
  JSON.parse(stripped);
} catch (e) {
  fs.copyFileSync(backup, PATH);
  console.error(`PARSE FAILED, reverted from backup: ${e.message}`);
  process.exit(1);
}

fs.writeFileSync(PATH, s);
console.log('user settings.json updated successfully:');
console.log('  + profile  : "WSL (Ubuntu-24.04)" (path=wsl.exe -d Ubuntu-24.04 --cd ~)');
console.log('  + default  : terminal.integrated.defaultProfile.windows = "WSL (Ubuntu-24.04)"');
