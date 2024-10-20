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
      width: {
        a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
      colors: {
        primary: '#181818',
        secondary: '#a6a6a6',
      },
    },
  },
}
