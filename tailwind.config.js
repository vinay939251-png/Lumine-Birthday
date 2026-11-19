/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFF9F2',
          card: '#FFFDF9',
          border: '#F0E2D6',
        },
        blush: {
          DEFAULT: '#F5DDE3',
          light: '#FDF2F4',
          hover: '#ECD0D7',
          dark: '#E2BAC5',
        },
        rose: {
          DEFAULT: '#D99EAF',
          dark: '#B87286',
        },
        matcha: {
          DEFAULT: '#DDE8D4',
          light: '#EDF4E7',
          border: '#C6D6BA',
        },
        babyblue: {
          DEFAULT: '#DCEAF5',
          light: '#EEF6FC',
        },
        butter: {
          DEFAULT: '#F8EAC2',
          light: '#FCF5DD',
        },
        warmbrown: {
          DEFAULT: '#79645F',
          light: '#9E8883',
          dark: '#584642',
        },
        cocoa: {
          DEFAULT: '#453B3A',
        },
        // Creepy-Cute mode palette
        creepy: {
          bg: '#181318',
          surface: '#241C24',
          card: '#2D222E',
          cardborder: '#453547',
          mauve: '#4E3449',
          rose: '#9E4E67',
          wine: '#6D2B3F',
          lavender: '#C6B2C5',
          text: '#EDE3EC',
          muted: '#9E889C',
          blood: '#A82D47',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'scrapbook': '0 4px 20px -2px rgba(121, 100, 95, 0.08), 0 2px 6px -1px rgba(121, 100, 95, 0.05)',
        'scrapbook-hover': '0 10px 25px -4px rgba(121, 100, 95, 0.12), 0 6px 12px -2px rgba(121, 100, 95, 0.08)',
        'creepy': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
