import { Heading } from '@chakra-ui/react'
import { colors, scaleAnimation } from 'styles'

export const H1 = ({ children }) => {
  return (
    <Heading
      color={colors.background}
      fontSize={'32px'}
      fontWeight={'bold'}
      fontFamily={'Inter'}
    >
      {children}
    </Heading>
  )
}

export const H2 = ({ children, marginTop }) => {
  return (
    <Heading
      color={colors.white}
      fontSize={'26px'}
      fontWeight={'regular'}
      fontFamily={'Inter'}
      animation={scaleAnimation}
      marginTop={marginTop}
    >
      {children}
    </Heading>
  )
}
