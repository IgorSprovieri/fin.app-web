import { Flex, Heading } from '@chakra-ui/react'
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

export const H2 = ({ children }) => {
  return (
    <Heading
      color={colors.white}
      fontSize={'26px'}
      fontWeight={'regular'}
      fontFamily={'Inter'}
      animation={scaleAnimation}
    >
      {children}
    </Heading>
  )
}

export const MoneyBalance = ({ value }) => {
  return (
    <Flex
      h={'80px'}
      flexDir={'column'}
      align={'left'}
      justifyContent={'left'}
      w={'100%'}
    >
      <Heading
        color={colors.gray}
        fontSize={'22px'}
        fontWeight={'medium'}
        fontFamily={'Inter'}
        animation={scaleAnimation}
      >
        Saldo Mensal
      </Heading>
      <Heading
        color={colors.white}
        fontSize={'44px'}
        fontWeight={'medium'}
        fontFamily={'Inter'}
        animation={scaleAnimation}
      >
        R$ {value}
      </Heading>
    </Flex>
  )
}
