export default {
    buildModules: ['@nuxtjs/tailwindcss'],
    components: true,
    loading: './components/LoadingPage.vue',
    targert: "static",
    ssr: false,
    generate:{
        fallback: true
    }
}