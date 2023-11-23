// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules:[
    ['@storyblok/nuxt', { accessToken: '5iznNcugK3zGCwpaua7WyAtt' }],
    '@nuxtjs/tailwindcss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})