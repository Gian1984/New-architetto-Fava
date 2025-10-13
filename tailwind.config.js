/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './app.vue',
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.{vue,js,ts}',
      './pages/**/*.{vue,js,ts}',
      './plugins/**/*.{js,ts}',
      './content/**/*.{md,yml,json}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

