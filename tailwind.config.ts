import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '576px'
      }
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px'
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#e3964a',
              foreground: '#000000'
            },
            focus: '#e3964a'
          }
        }
      }
    })
  ]
}
export default config
