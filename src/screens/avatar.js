import { Flex } from '@chakra-ui/react'
import { WaveImage, ChangeAvatarQuery } from 'components'

export const AvatarScreen = () => {
  return (
    <Flex w={'100dvw'} h={'100dvh'}>
      <WaveImage></WaveImage>
      <ChangeAvatarQuery></ChangeAvatarQuery>
    </Flex>
  )
}
