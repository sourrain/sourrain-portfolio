export default {
    buildModules: ['@nuxtjs/tailwindcss'],
    components: true,
    loading: './components/LoadingPage.vue',
    target: 'static',
    ssr: false,
    generate:{
        fallback: true
    }
}