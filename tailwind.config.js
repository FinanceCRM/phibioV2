/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        beige: {
          50: '#fefef9',
          100: '#fefdf0',
          200: '#fdfbe0',
          300: '#fbf7c7',
          400: '#f8f1a3',
          500: '#f3e878',
          600: '#e9d548',
          700: '#d4c036',
          800: '#b29e2f',
          900: '#97842a',
          950: '#564714',
        },
        // Premium luxury colors
        luxury: {
          cream: '#faf8f5',
          pearl: '#f8f6f0',
          champagne: '#f7e7ce',
          platinum: '#e5e5e5',
          graphite: '#2c2c2c',
          charcoal: '#1a1a1a',
        },
        // Nature-inspired biotechnology colors
        bio: {
          leaf: '#7fb069',
          moss: '#556b2f',
          sage: '#9caf88',
          forest: '#1e3a1a',
          lab: '#f0f8ff',
          cell: '#e6f3ff',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-left': 'slide-left 0.8s ease-out',
        'slide-right': 'slide-right 0.8s ease-out',
        'parallax': 'parallax 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'rotate-in': 'rotate-in 0.6s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'parallax': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(34, 197, 94, 0.2), 0 0 10px rgba(34, 197, 94, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.4), 0 0 30px rgba(34, 197, 94, 0.2)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-10%)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'rotate-in': {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
      },
      backdropBlur: {
        '4xl': '72px',
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'luxury-xl': '0 30px 80px rgba(0, 0, 0, 0.2)',
        'glow-green': '0 0 30px rgba(34, 197, 94, 0.3)',
        'glow-gold': '0 0 30px rgba(202, 138, 4, 0.3)',
        'inner-luxury': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      gradients: {
        'nature': 'linear-gradient(135deg, #15803d, #22c55e, #ca8a04)',
        'luxury': 'linear-gradient(135deg, #1a1a1a, #2c2c2c)',
        'bio': 'linear-gradient(135deg, #f0f8ff, #e6f3ff)',
      },
    },
  },
  plugins: [],
} 