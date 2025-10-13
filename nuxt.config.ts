// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['@fancyapps/ui/dist/fancybox/fancybox.css'],
    modules: ['@nuxt/content', '@nuxt/image', '@nuxt/scripts','@nuxtjs/tailwindcss'],
    routeRules: {
        '/privacy-policy': { redirect: '/privacyPolicy' }
    },
})