import { Flex } from '@chakra-ui/react'
import { WaveImage } from 'components'
import { RegisterQuery } from 'components/organisms/registerQuery'

export const RegisterScreen = () => {
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      w={'100vw'}
      h={'100vh'}
    >
      <WaveImage></WaveImage>
      <RegisterQuery></RegisterQuery>
    </Flex>
  )
}
