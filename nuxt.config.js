export default {
    buildModules: ['@nuxtjs/tailwindcss'],
    components: true,
    loading: './components/LoadingPage.vue',
    target: 'static',
    ssr: true,
    generate:{
        fallback: true
    }
}