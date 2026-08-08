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
        neon: '#00FF6A',
        'neon-glow': 'rgba(0, 255, 106, 0.4)',
        dark: '#0A0A0A',
        'dark-card': '#121212',
        'dark-border': '#222222',
        glass: 'rgba(255, 255, 255, 0.03)',
        'glass-hover': 'rgba(255, 255, 255, 0.07)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'Instrument Serif', 'Cormorant Garamond', 'serif'],
        mono: ['Space Grotesk', 'monospace'],
        display: ['Playfair Display', 'Instrument Serif', 'Cormorant Garamond', 'serif'],
        elegant: ['Playfair Display', 'Instrument Serif', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(0, 255, 106, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(0, 255, 106, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
