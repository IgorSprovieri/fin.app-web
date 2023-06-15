import { Flex, Heading, Image } from '@chakra-ui/react'
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

export const WalletTitle = ({ children, marginTop, mL, mR }) => {
  return (
    <Flex
      flexDir={'row'}
      align={'center'}
      justify={'space-between'}
      marginTop={marginTop}
    >
      <Image
        animation={scaleAnimation}
        h={'51px'}
        w={'51px'}
        src="wallet.svg"
      ></Image>
      <Heading
        marginLeft={mL}
        marginRight={mR}
        color={colors.white}
        fontSize={'28px'}
        fontWeight={'regular'}
        fontFamily={'Inter'}
        animation={scaleAnimation}
      >
        {children}
      </Heading>
    </Flex>
  )
}
