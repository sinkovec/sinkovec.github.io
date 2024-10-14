import ViteYaml from '@modyfi/vite-plugin-yaml'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image',
  ],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  tailwindcss: {
    config: {
      plugins: [require('@tailwindcss/typography')],
    },
  },

  vite: {
    plugins: [ViteYaml()],
  },

  compatibilityDate: '2024-10-12',
})
