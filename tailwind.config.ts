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
      maxWidth: {
        a4: '210mm',
      },
      maxHeight: {
        a4: '297mm',
      },
      colors: {
        primary: '#181818',
        secondary: '#a6a6a6',
      },
    },
  },
}
