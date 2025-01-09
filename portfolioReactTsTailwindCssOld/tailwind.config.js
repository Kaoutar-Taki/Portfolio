/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'first-color': 'hsl(23, 69%, 61%)',
        'first-color-second': 'hsl(23, 69%, 61%)',
        'first-color-alt': 'hsl(23, 57%, 53%)',
        'first-color-lighter': 'hsl(23, 92%, 85%)',
        'title-color': 'hsl(23, 8%, 15%)',
        'text-color': 'hsl(23, 8%, 45%)',
        'text-color-light': 'hsl(23, 8%, 65%)',
        'input-color': 'hsl(23, 70%, 96%)',
        'body-color': 'hsl(23, 60%, 99%)',
        'container-color': '#fff',
        'scroll-bar-color': 'hsl(23, 12%, 90%)',
        'scroll-thumb-color': 'hsl(23, 12%, 80%)',
        // Dark mode colors
        'first-color-second-dark': 'hsl(23, 30%, 8%)',
        'title-color-dark': 'hsl(23, 8%, 95%)',
        'text-color-dark': 'hsl(23, 8%, 75%)',
        'input-color-dark': 'hsl(23, 29%, 16%)',
        'body-color-dark': 'hsl(23, 28%, 12%)',
        'container-color-dark': 'hsl(23, 29%, 16%)',
        'scroll-bar-color-dark': 'hsl(23, 12%, 48%)',
        'scroll-thumb-color-dark': 'hsl(23, 12%, 36%)',
      },
    },
  },
  plugins: [],
}

