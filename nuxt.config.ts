export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        baseURL: '/',
    },

    css: ['assets/global.css'],
    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        },
    ],

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    api: 'modern',
                },
            },
        },
    },

    compatibilityDate: '2024-11-05',
})
