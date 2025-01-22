import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { ResolvedConfig } from 'vite';

const src = './model.gltf';

const exposeLogo = () => ({
  name: 'vite-plugin-expose-logo',
  configResolved(resolvedConfig: ResolvedConfig) {
    const dstPath = resolve(resolvedConfig.root, resolvedConfig.publicDir, src);
    const srcPath = resolve(src);

    fs.copyFile(srcPath, dstPath);
  },
  // configureServer(server) {
  //   server.middlewares.use(`/${url}`, (req, res, next) => {
  //     res.writeHead(200, { 'Content-Type': 'text/javascript' });
  //     res.write(fileContent);
  //     res.end();
  //   });
  // },
  // closeBundle() {
  //   writeFile(outPath, fileContent, { flag: 'w' }, (error) => {
  //     if (error) {
  //       throw error;
  //     }

  //     console.log(`Generated file to ${outPath}`);
  //   });
  // },
});

export default exposeLogo;
