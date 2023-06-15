import { Flex } from '@chakra-ui/react'
import { WaveImage, LoginQuery } from 'components'

export const LoginScreen = () => {
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      w={'100vw'}
      h={'100vh'}
    >
      <WaveImage></WaveImage>
      <LoginQuery></LoginQuery>
    </Flex>
  )
}
