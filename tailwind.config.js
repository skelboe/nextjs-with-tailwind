module.exports = {
    purge: {
        enabled: process.env.NODE_ENV == 'production',
        content: ['./pages/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}', './lib/**/*.{jsx,tsx}'],
        whitelist: ['body', 'html'],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}
