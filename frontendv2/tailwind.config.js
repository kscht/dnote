/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#b0bec5',
        accent: '8c9eff',
        //accent
        'cornflower-blue': {
          50: '#f0f5fe',
          100: '#dee7fb',
          200: '#c4d7f9',
          300: '#9bbcf5',
          400: '#6091ed',
          500: '#4975e8',
          600: '#3458dc',
          700: '#2b45ca',
          800: '#293aa4',
          900: '#263582',
          950: '#1c234f'
        },
        'hint-of-red': {
          50: '#f8f7f7',
          100: '#f0eeee',
          200: '#ded9d9',
          300: '#c1b8b9',
          400: '#9e9293',
          500: '#837475',
          600: '#6b5e5f',
          700: '#574d4e',
          800: '#4a4242',
          900: '#403a3a',
          950: '#2b2626'
        },
        'blue-bell': {
          50: '#f4f5f9',
          100: '#eaeef5',
          200: '#d9deec',
          300: '#c2c9df',
          400: '#a9afd0',
          500: '#979bc4',
          600: '#7b7cb0',
          700: '#6a6999',
          800: '#56567d',
          900: '#4a4b65',
          950: '#2b2b3b'
        },
        boulder: {
          50: '#f5f5f6',
          100: '#e6e6e7',
          200: '#d0d0d1',
          300: '#b0afb1',
          400: '#888789',
          500: '#747375',
          600: '#5e5c5e',
          700: '#504e50',
          800: '#454545',
          900: '#3c3c3d',
          950: '#262626'
        },
        biscay: {
          50: '#f2f5fc',
          100: '#e1e9f8',
          200: '#c9d9f4',
          300: '#a4c0ec',
          400: '#79a0e1',
          500: '#5a7fd7',
          600: '#4564cb',
          700: '#3c53b9',
          800: '#364597',
          900: '#283365',
          950: '#21274a'
        }
      },
      keyframes: {
        triwidth: {
          '0%': {
            width: '0rem',
          },
          '50%': {
            width: '4rem'
          },
          '100%': {
            width: '0'
          }
        }
      },
      animation: {
        triwidth: 'triwidth 300ms ease-out'
      }
    },
    plugins: []
  }
}
