import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";
import zipPack from "vite-plugin-zip-pack";
import packageJSON from "./package.json";

const basePath = `/kumoha-ui/${packageJSON.name.replaceAll("/", "~")}`;
const packageName = packageJSON.name;
const packPath = packageName.replaceAll("/", "~");
const outPath = `./dist/${packPath}`;

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    copy({
      hook: "writeBundle",
      verbose: true,
      targets: [
        { src: "./package.json", dest: outPath },
        { src: "./README.md", dest: outPath },
        { src: "./preview/", dest: outPath },
      ],
    }),
    zipPack({
      outDir: "./dist",
      outFileName: `${packPath}.zip`,
    }),
  ],
  define: {
    __THEME_NAME__: JSON.stringify(packageName),
  },
  build: {
    outDir: outPath,
  },
});
