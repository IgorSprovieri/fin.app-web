import { Flex } from '@chakra-ui/react'
import { WaveImage, EditUserQuery } from 'components'

export const EditUserScreen = () => {
  return (
    <Flex w={'100dvw'} h={'100dvh'}>
      <WaveImage></WaveImage>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
      >
        <EditUserQuery></EditUserQuery>
      </Flex>
    </Flex>
  )
}
