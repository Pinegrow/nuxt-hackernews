export default defineNuxtConfig({
  modules: [
    "@pinegrow/nuxt-module",
    //...
  ],
  pinegrow: {
    liveDesigner: {
      // ...
    },
  },
  postcss: {
    plugins: {
      "postcss-nesting": {},
    },
  },
  devtools: {
    enabled: true,
  },
});
