import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      screens: {
        paper: '8.5in',
        print: {
          raw: 'print',
        },
      },
      colors: {
        primary: '#181818',
        secondary: '#a6a6a6',
      },
      divideWidth: {
        '1/2': '0.5px',
      },
    },
  },
}
