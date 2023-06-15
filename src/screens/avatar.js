import { Flex } from '@chakra-ui/react'
import { WaveImage, ChangeAvatarQuery } from 'components'

export const AvatarScreen = () => {
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
        <ChangeAvatarQuery></ChangeAvatarQuery>
      </Flex>
    </Flex>
  )
}