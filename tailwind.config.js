/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: '#4F46E5', // Indigo-600
          secondary: '#818CF8', // Indigo-400
        },
        fontFamily: {
          sans: ['"Poppins"', 'sans-serif'],
        },
        boxShadow: {
          'md-glow': '0 4px 14px 0 rgba(79, 70, 229, 0.39)',
        }
      },
    },
    plugins: [],
  }
  