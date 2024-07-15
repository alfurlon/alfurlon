/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg-color': '#001024',
        'main-text-color': '#F7F7F8',
        'call-to-action-color': '#20A4F3',
        'alt-color-red': '#E54B4B',
        'alt-color-cyan': '#59F8E8'
      },
      spacing: {
        '80': '80vh',
        '90': '90vh',
        '60': '60vh',
        '47': '47vh',
        '40': '40vh',
        '55': '55vh',
        '75': '75vh',
        '190': '190px',
        '175': '175px',
        '150': '150px',
        '30': '30vh',
        '40': '40vh',
        '250': '250px',
        '100': '100px'
      },
      backgroundImage: {
        'header-bg-image': "url('/public/guangzhou-downtown.jpg')",
        'alt-header-bg-image': "url('/public/ifc-building.jpg')"
      },
      screens: {
        'ls-phone': '900px'
      }
    },
  },
  plugins: [],
}
