/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#000000',
        'luxury-charcoal': '#2D2D2D',
        'luxury-gray-dark': '#666666',
        'luxury-gray-medium': '#999999',
        'luxury-gray-light': '#E5E5E5',
        'luxury-white': '#FFFFFF',
        'luxury-cream': '#F7F7F5',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      maxWidth: {
        'container': '1440px',
      },
    },
  },
  plugins: [],
}
