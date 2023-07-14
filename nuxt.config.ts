import exp from "constants"
import { platform } from "os"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

})

