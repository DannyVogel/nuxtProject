// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
