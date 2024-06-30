/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      theme: true
    },
    fontFamily: {
      signature: ["Great Vibes"]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      indigo: '#293241',
      sky: '#E0FBFC',
      orange: '#EE6C4D',
      powder_blue: '#98C1D9',
      blue: '#3D5A80',
    }
  },
  plugins: [],
}

