import typography from '@tailwindcss/typography'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      colors: {
        charcoal: '#333333',
        offwhite: '#F9F9F9',
        sand: '#DDD5C7',
        olive: '#708070',
        // ✅ Add this line
        'brand-accent': '#ff6b3d',
        'brand-yellow': '#fbd055',
      },
    },
  },
  plugins: [typography],
}
