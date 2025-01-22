import fs from 'node:fs';
import { resolve } from 'node:path';

const src = './model.gltf';
const destPath = '../../public';
const srcPath = resolve(src);
const dstPath = resolve(destPath, src);

if (fs.existsSync(destPath)) {
  fs.copyFileSync(srcPath, dstPath);
  console.log(`Info: copied ${srcPath} to ${dstPath}`);
} else {
  console.error(
    `Public folder not found, cannot copy  ${srcPath} to ${dstPath}`
  );
}
