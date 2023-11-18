/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'primary': '#2F80ED',
        'grey' : '#4F4F4F',
        'light-grey' : '#828282',
        'light-white' : '#E0E0E0',
        'light-yellow' : '#F8B76B',
        'purple' : '#8785FF',
        'danger' : '#EB5757',
        'warning' : '#F2C94C',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
      },
    }
  },
  plugins: [],
}

