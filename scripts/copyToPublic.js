import fs from 'node:fs';
import { resolve } from 'node:path';

const src = './model.gltf';
const destPath = '../../public';
const log = './log.txt';
const srcPath = resolve(src);
const dstPath = resolve(destPath, src);
const logPath = resolve(log);

if (fs.existsSync(destPath)) {
  fs.copyFileSync(srcPath, dstPath);
  fs.appendFile(logPath, `Info: copied ${srcPath} to ${dstPath}`);
} else {
  fs.appendFile(
    logPath,
    `Public folder not found, cannot copy  ${srcPath} to ${dstPath}`
  );
}
