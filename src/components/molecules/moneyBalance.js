import { Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { colors, fadeAnimation, transparentAnimation } from 'styles'

export const MoneyBalance = ({ value }) => {
  const delay = '0.5s'
  const [animation, setAnimation] = useState(transparentAnimation(delay))

  useEffect(() => {
    setTimeout(() => {
      setAnimation(fadeAnimation)
    }, 500)
  }, [])

  return (
    <Flex
      marginTop={'32px'}
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
        animation={animation}
      >
        Saldo Mensal
      </Heading>
      <Heading
        color={colors.white}
        fontSize={'44px'}
        fontWeight={'medium'}
        fontFamily={'Inter'}
        animation={animation}
      >
        R$ {value}
      </Heading>
    </Flex>
  )
}
