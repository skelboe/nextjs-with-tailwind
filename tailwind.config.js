module.exports = {
    future: {
        // https://tailwindcss.com/docs/upcoming-changes#remove-deprecated-gap-utilities
        removeDeprecatedGapUtilities: true,
        // https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
        purgeLayersByDefault: true,
        // https://tailwindcss.com/docs/upcoming-changes#default-line-heights-for-font-size-utilities
        defaultLineHeights: true,
        // https://tailwindcss.com/docs/upcoming-changes#rename-font-thin-and-font-hairline
        standardFontWeights: true,
    },
    purge: {
        enabled: process.env.NODE_ENV == 'production',
        content: ['./pages/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
        whitelist: ['body', 'html'],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}
