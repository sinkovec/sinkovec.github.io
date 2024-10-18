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
  ],
  css: ['assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },

  content: {
    contentHead: false,
    highlight: {
      theme: 'github-dark',
    },
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
