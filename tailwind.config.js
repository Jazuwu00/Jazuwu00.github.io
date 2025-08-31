// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#4f46e5ff',
        secondary: '#7186e6ff',
        accent: '#5c0fa5ff',
        background: '#f3f4f6',
        foreground: '#111827',
        overlay: 'rgba(0, 0, 0, 0.8)',
        links:'#78288c'
      },
      fontSize: {
        xs: ['0.75rem', '1rem'],
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
      },
    },
  },
  plugins: [],
}