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
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.architettofava.it'
        }
    },

    modules: [
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots'
    ],

    routeRules: {
        '/privacy-policy': { redirect: '/privacyPolicy' }
    },

    site: {
        url: 'https://www.architettofava.it'
    },

    sitemap: {
        defaults: {
            changefreq: 'weekly',
            priority: 0.7
        }
    },

    robots: {
        rules: [{ UserAgent: '*', Allow: '/' }],
        sitemap: 'https://www.architettofava.it/sitemap.xml'
    }
})

