module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#ffffff',
      dark: '#000000',
      gray: '#AAAAAA',
    },
    dropShadow: {
      light_shadow: '5px 1px 20px rgba(0, 0, 0, 0.50)',
      dark_shadow: '5px 1px 20px rgba(255, 255, 255, 0.25)'
    }
  },
  plugins: []
}
