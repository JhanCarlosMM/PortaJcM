/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,css,scss}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Tech palette
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a2e',
        'cyber-light': '#2d2d44',
        'neon-cyan': '#00d9ff',
        'neon-emerald': '#00ff88',
        'neon-purple': '#b100ff',
        'neon-pink': '#ff006e',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto Mono', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #2d2d44 100%)',
        'gradient-neon': 'linear-gradient(135deg, #00d9ff 0%, #00ff88 100%)',
        'gradient-accent': 'linear-gradient(135deg, #b100ff 0%, #ff006e 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-emerald': '0 0 20px rgba(0, 255, 136, 0.5)',
        'neon-purple': '0 0 20px rgba(177, 0, 255, 0.5)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'typewriter': 'typewriter 3.5s steps(40, end)',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 217, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
      spacing: {
        'glass': '12px',
      },
      borderRadius: {
        'glass': '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
