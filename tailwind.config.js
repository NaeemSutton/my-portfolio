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
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitchIn: {
          '0%': { transform: 'translate(0)', opacity: '0.1' },
          '20%': { transform: 'translate(-2px, 2px)', opacity: '0.4' },
          '40%': { transform: 'translate(2px, -2px)', opacity: '0.6' },
          '60%': { transform: 'translate(-1px, 1px)', opacity: '0.8' },
          '80%': { transform: 'translate(1px, -1px)', opacity: '1' },
          '100%': { transform: 'translate(0)', opacity: '1' },
        },
        pulseTerminal: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(0, 255, 159, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 10px 4px rgba(0, 255, 159, 0.6)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        blink: 'blink 1s step-start infinite',
        'glitch-in': 'glitchIn 0.5s ease-in-out forwards',
        'pulse-terminal': 'pulseTerminal 1.5s ease-in-out infinite',
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
};
