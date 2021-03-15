module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            yellow: {
                DEFAULT: '#D7FF2E',
            },
            blue: {
                DEFAULT: '#40A8C4',
            },
            gray: {
                DEFAULT: '#C0CAD2',
                light: '#8B8B8B',
            },
            purple: {
                DEFAULT: '#A385BD',
            },
            green: {
                DEFAULT: '#0BCC92',
            },
            black: {
                DEFAULT: '#212121',
            },
        },
        extend: {
            fontFamily: {
                Ekse: ['EksellDisplayWeb-Large'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}