export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    app: {
        head: {
            htmlAttrs: {
                lang: 'it'
            }
        }
    },

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
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.favaclaudio.com/'
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
        url: 'https://www.favaclaudio.com/'
    },

    sitemap: {
        defaults: {
            changefreq: 'weekly',
            priority: 0.7
        }
    },

    robots: {
        sitemap: ['https://www.favaclaudio.com/sitemap.xml'],
        groups: [
            {
                userAgent: '*',
                allow: ['/']
            }
        ]
    }

})

