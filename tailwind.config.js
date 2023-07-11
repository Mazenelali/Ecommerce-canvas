
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
      colors:{
        brown :"#C19458",
        DarkBrown:'#94693f',
        black :"#000000"
      },
      backgroundImage: {
        'background-room': "url('./src/assest/background.png')",
      },
      screens:{
        'sm': '400px',
        'md': '768px',
      }
    },
  },
  plugins: [],
}
