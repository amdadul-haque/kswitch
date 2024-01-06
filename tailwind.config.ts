import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero': 'url("/hero.png")',
      },
      colors: {
        'brand': '#f72527',
        'brand-hover': '#f86868',
        'black': {
          'main': '#161616',
        },
        'white': {
          'main': '#f7f7f7',
          'off': '#a4a4a4'
        }
      }
    },
  },
  plugins: [],
}
export default config
