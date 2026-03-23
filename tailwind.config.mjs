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
        // 🟢 EXISTING / YUMWORDS (leave intact)
        charcoal: '#333333',
        offwhite: '#F9F9F9',
        sand: '#DDD5C7',
        olive: '#708070',
        'brand-accent': '#ff6b3d',
        'brand-yellow': '#fbd055',

        // 🧀 CHEESE PALETTE (NEW)
        'cheese-black': '#111111',
        'cheese-cream': '#FFF8F0',
        'cheese-amber': '#E6A34A',
        'cheese-amber-hover': '#D8923C',

        // 🔁 OPTIONAL SHARED NEUTRALS
        'text-soft': '#6B5E4A',
        'cream-soft': '#F7EBDD',
      },
    },
  },
  plugins: [typography],
}