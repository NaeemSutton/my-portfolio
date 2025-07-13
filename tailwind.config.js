/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        blink: 'blink 1s step-start infinite',
      },
      colors: {
        terminalGreen: "#00ff9f",
        terminalBg: "#0e1011",
        terminalMuted: "#94a3b8",
        terminalText: "#d1d5db",
        terminalSoft: "#1f2937",
      },
    },
  },
  plugins: [],
}
