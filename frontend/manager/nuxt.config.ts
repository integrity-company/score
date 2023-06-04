// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    vueI18n: "i18n.config.ts",
  },
});
