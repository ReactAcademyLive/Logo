import fs from 'node:fs';
import os from 'node:os';
import { resolve } from 'node:path';
import process from 'node:process';

const src = './model.gltf';
const destPath = '../../public';
const log = 'log.txt';
const srcPath = resolve(src);
const dstPath = resolve(destPath, src);
const logPath = resolve(os.homedir(), log);

fs.appendFileSync(logPath, `Info: project path is ${process.cwd()}\n`);

// if (fs.existsSync(destPath)) {
//   fs.copyFileSync(srcPath, dstPath);
//   fs.appendFileSync(logPath, `Info: copied ${srcPath} to ${dstPath}`);
// } else {
//   fs.appendFileSync(
//     logPath,
//     `Public folder not found, cannot copy  ${srcPath} to ${dstPath}`
//   );
// }
