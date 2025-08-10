/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A7C7E7', // Light Blue
        accent: '#77966D',  // Dark Pastel Green
        background: '#FFFFFF',
        text: {
          primary: '#374151', // Dark grey for text
          secondary: '#6B7280', // Medium grey for secondary text
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
