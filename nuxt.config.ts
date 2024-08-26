// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    [
      '@nuxtjs/google-fonts',
      {
        googleFonts: {
          families: {
            Nunito: true,
          },
        },
      },
    ],
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    'nuxt-time',
  ],
  ssr: false,
  css: ['~/assets/main.scss'],
  supabase: { redirect: false },
  compatibilityDate: '2024-08-04',
});
