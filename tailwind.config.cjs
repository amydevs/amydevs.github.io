/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode:"class",
    theme: {
        extend: {
            colors: {
                primary: "#d61b69",
                secondary: "#ffa3c9",
                accent: "#c52b6b"
            }
        },
    },
    plugins: [
        plugin(({addVariant}) => {
            addVariant('scroll0', ['html:not([scroll]) &', 'html[scroll="0"] &']);
        }),
        require('@tailwindcss/typography'),
    ],
};
