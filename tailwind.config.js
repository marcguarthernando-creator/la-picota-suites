/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lava: {
          50: '#F7F7F6',
          100: '#E5E5E3',
          200: '#C7C7C3',
          300: '#A3A39D',
          400: '#5C5C57',
          500: '#44443F',
          600: '#33332E',
          700: '#262622',
          800: '#1C1C19',
          900: '#141412', // deep volcanic black
          950: '#0C0C0B',
        },
        stone: {
          custom: '#3E3E39', // high-contrast dark stone for readable body copy
        },
        cream: {
          50: '#FAF9F6',
          100: '#F5F3EE', // off-white
          200: '#EAE6DC',
          300: '#E0DACE',
          400: '#D2C8B8',
        },
        sand: {
          100: '#F6F2EC',
          200: '#EBDDC9',
          300: '#D7C7AE', // warm sand
          400: '#C4B194',
          500: '#A59275',
          600: '#8A775C',
          700: '#6B5A43',
        },
        olive: {
          100: '#E9EBE6',
          300: '#B5BCAD',
          500: '#7C8A6F',
          600: '#4D5844', // darkened olive green for contrast
          700: '#3D4635',
          800: '#2E3528',
        },
        ocean: {
          100: '#E6ECF1',
          300: '#9FB8CA',
          500: '#5B7C93',
          600: '#3E5C70',
          700: '#2A4557', // high contrast Atlantic blue
          800: '#1E3342',
          900: '#142430',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
