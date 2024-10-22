import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    css: '@/assets/css',
  },
  app: {
    baseURL: process.env.BASE_URL || '',
  },
  css: ['~/assets/css/main.css'],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
