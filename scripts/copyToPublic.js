import fs from 'node:fs';
import os from 'node:os';
import { resolve } from 'node:path';

const src = './model.gltf';
const destPath = '../../public';
const log = 'log.txt';
const srcPath = resolve(src);
const dstPath = resolve(destPath, src);
const logPath = resolve(os.homedir(), log);

console.log(logPath);

if (fs.existsSync(destPath)) {
  fs.copyFileSync(srcPath, dstPath);
  fs.appendFileSync(logPath, `Info: copied ${srcPath} to ${dstPath}`);
} else {
  fs.appendFileSync(
    logPath,
    `Public folder not found, cannot copy  ${srcPath} to ${dstPath}`
  );
}
