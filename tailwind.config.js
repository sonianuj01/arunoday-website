/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': '#ffffff',
        'muted-foreground': '#d1d5db',
        'gold': '#FFD700',
        'gold-foreground': '#000000',
        'navy-dark': '#0a192f',
        'border': '#334155',
      },
      boxShadow: {
        'glow': '0 0 10px #FFD700, 0 0 20px #FFD700',
      },
      keyframes: {
         'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // scrolls to left
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'glow-pulse': {
          '0%, 100%': {
            textShadow: '0 0 10px #FFD700, 0 0 20px #FFD700',
          },
          '50%': {
            textShadow: '0 0 20px #FFD700, 0 0 30px #FFD700',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      animation: {
        'scroll': 'scroll 40s linear infinite', 
        'fade-in': 'fade-in 1s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
      },
       backgroundImage: {
    'card-gradient': 'linear-gradient(135deg, #111111, #1a1a1a)', // subtle dark gradient
  },
    },
  },
  plugins: [],
}
