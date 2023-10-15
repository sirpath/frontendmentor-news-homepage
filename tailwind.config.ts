import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)'],
        secondary: ['var(--font-secondary)'],
      },
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        primary: 'hsl(36, 100%, 99%)',
        secondary: 'hsl(233, 8%, 79%)',
        hcolor: 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      light: {
        ...daisyuiThemes['[data-theme=cmyk]'],
        /*
        primary: '', // dominant color.
        secondary: '', // less dominant but still distinguishable.
        accent: '', // draw attention, notifications, highlighted text
        neutral: '', // shades of blacks, grays, and whites. don't convey a specific mood or emotion on their own.
        'base-100': '', // base backgrounds color.
        'base-content': '', // base content color.
        */
      },
    }],
    darkTheme: 'light',
    logs: false,
  },
}

export default config
