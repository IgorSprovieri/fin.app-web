import { colors } from './colors'
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Inter',
        padding: 0,
        margin: 0,
        backgroundColor: colors.background,
        webkitFontSmoothing: 'antialiased'
      }
    }
  }
})
