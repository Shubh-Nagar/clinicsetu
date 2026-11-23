/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Soft mint primary. 700/800 are used for text & buttons (WCAG AA on white).
        mint: {
          50: '#F2FAF6',
          100: '#E2F4EA',
          200: '#C6E9D6',
          300: '#9DD7B9',
          400: '#5FB98E',
          600: '#2A7F60',
          700: '#1F6B50',
          800: '#185540',
          900: '#123F30',
        },
        // Deep charcoal ink with a hint of green, and soft greys.
        ink: { DEFAULT: '#1D2723', soft: '#46534D', muted: '#5F6B66' },
        mist: { DEFAULT: '#F4F6F5', line: '#DFE5E2' },
        // Muted brick used ONLY for the "Not allowed" column.
        caution: { DEFAULT: '#A13D2D', bg: '#FBEFEC' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Atkinson Hyperlegible"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
      borderRadius: { phone: '2.25rem' },
    },
  },
  plugins: [],
}
