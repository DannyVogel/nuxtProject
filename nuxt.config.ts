// https://nuxt.com/docs/api/configuration/nuxt-config
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: "/window.js" }, { src: "/bundle.js", type: "module" }],
    },
  },
  vite: {
    define: {
      global: "globalThis",
    },
    plugins: [
      NodeGlobalsPolyfillPlugin({
        process: true,
        buffer: true,
      }),
    ],
  },
  plugins: ["~/plugins/web3auth.client.ts"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@formkit/auto-animate/nuxt",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/content",
    "nuxt-icon",
    "@nuxt/ui",
  ],
});
