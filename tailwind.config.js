/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/tw-elements/dist/js/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        dosis: "Dosis, sans-serif",
        hurricane: "'Hurricane', cursive",
        lato: "Lato, sans-serif",
        inter: "Inter, sans-serif"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
