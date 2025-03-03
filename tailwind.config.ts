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
        primary: '#2E3440', // nord-0
        secondary: '#D8DEE9', // nord-4
        nord: {
          0: '#2E3440',
          1: '#3B4252',
          2: '#434C5E',
          3: '#4C566A',
          4: '#D8DEE9',
          5: '#E5E9F0',
          6: '#ECEFF4',
          7: '#8FBCBB',
          8: '#88C0D0',
          9: '#81A1C1',
          10: '#5E81AC',
          11: '#BF616A',
          12: '#D08770',
          13: '#EBCB8B',
          14: '#A3BE8C',
          15: '#B48EAD',
        },
      },
    },
  },
}
