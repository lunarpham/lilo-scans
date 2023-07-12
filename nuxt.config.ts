import { platform } from "os"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],

  image: {
    quality: 80,
    format: ['webp']
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
