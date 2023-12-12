import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
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
