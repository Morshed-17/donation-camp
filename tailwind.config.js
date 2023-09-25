/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#FF444A',
        // 'text-blue-500': '#3b82f6',
        // 'text-red-500': '#ef4444',
        // 'text-green-500': '#22c55e',
        // 'text-orange-500': '#f97316',
      }
    },
  },
  plugins: [require("daisyui")],
}

