import { resolve } from "path";

export default {
  staged: { "*": "vp check --fix" },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        es: resolve(__dirname, "es/index.html"),
        manifesto: resolve(__dirname, "manifesto/index.html"),
        esManifesto: resolve(__dirname, "es/manifesto/index.html"),
        resources: resolve(__dirname, "resources/index.html"),
        esResources: resolve(__dirname, "es/resources/index.html"),
      },
    },
  },
};
