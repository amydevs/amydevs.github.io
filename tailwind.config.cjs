/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode:"class",
    theme: {
        extend: {
            colors: {
                primary: "#e22c78",
                secondary: "#714fac",
                error: "#ff3863",
                success: "#3dfb84"
            }
        },
    },
    plugins: [
        plugin(({addVariant}) => {
            addVariant('scroll0', ['html:not([scroll]) &', 'html[scroll="0"] &']);
        })
    ],
};
