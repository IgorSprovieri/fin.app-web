import { Flex } from '@chakra-ui/react'
import { H2, WaveImage } from 'components'
import { useSelector } from 'react-redux'
import { selectUser } from 'services'

export const AvatarScreen = () => {
  const user = useSelector(selectUser)

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
        <H2>{'usuário: ' + user.name}</H2>
      </Flex>
    </Flex>
  )
}
