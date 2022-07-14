import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'brand.green',
      },
    },
  },
  colors: {
    brand: {
      green: '#76b0b1',
      purple: '#ac4b67',
      // ...
      blue: '#122e49',
    },
  },
})
