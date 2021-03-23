const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.html', './src/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.warmGray,
                blue: colors.lightBlue,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
};
