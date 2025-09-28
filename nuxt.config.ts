import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'brian sinkovec',
    },
  },
  ssr: false,
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
  ],
  css: ['assets/css/main.css'],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },

  vite: {
    plugins: [ViteYaml()],
  },

  compatibilityDate: '2025-09-28',
})
