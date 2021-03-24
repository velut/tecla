const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.warmGray,
            },
        },
    },
    variants: {
        extend: {},
        scrollbar: ['dark', 'rounded'],
    },
    plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
