import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import packageJSON from "./package.json";

const basePath = `/kumoha-ui/${packageJSON.name.replaceAll("/", "~")}`;
const packageName = packageJSON.name;

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react()],
  define: {
    __THEME_NAME__: JSON.stringify(packageName),
  },
});
