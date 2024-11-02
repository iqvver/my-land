export default defineNuxtConfig({
    devtools: { enabled: true },

    app: {
        baseURL: '/',
    },

    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        },
    ],
    css: ['assets/global.css'],
})
