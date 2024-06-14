// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta: [{ name: 'description', content: '짐코딩 Vue & Nuxt 강의입니다.' }],
    },
  },
});
