// Next.js 9.2 includes css built in, and we now have to specify our imports
// like strings.
module.exports = {
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        'postcss-preset-env': { stage: 2 },
    },
}
