const tailwindcss = require('tailwindcss')
const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const plugins = [tailwindcss, postcssPresetEnv]

// When building for production we will purge any unsued styles
if (process.env.NODE_ENV === 'production') {
    // Purge unused classes
    plugins.push(
        purgecss({
            content: ['./pages/**/*.jsx', './components/**/*.jsx'],
            whitelist: ['body', 'html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    )

    // Compress the style output
    plugins.push(
        cssnano({
            preset: 'default',
        }),
    )
}

module.exports = {
    plugins: plugins,
}
