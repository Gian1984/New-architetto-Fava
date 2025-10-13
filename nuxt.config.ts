// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    css: ['@fancyapps/ui/dist/fancybox/fancybox.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
            emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
    },
    modules: ['@nuxt/image', '@nuxt/scripts','@nuxtjs/tailwindcss'],
    routeRules: {
        '/privacy-policy': { redirect: '/privacyPolicy' }
    },
})