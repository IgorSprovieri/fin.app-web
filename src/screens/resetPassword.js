import { Flex } from '@chakra-ui/react'
import { WaveImage, ResetPassword } from 'components'

export const ResetPasswordScreen = () => {
  return (
    <Flex>
      <WaveImage></WaveImage>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
      >
        <ResetPassword></ResetPassword>
      </Flex>
    </Flex>
  )
}
