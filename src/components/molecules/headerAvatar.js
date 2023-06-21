import { Box, Flex } from '@chakra-ui/react'
import { AvatarButton, H2 } from 'components/atoms'

export const HeaderAvatar = ({ avatarUrl, username, onAvatar }) => {
  return (
    <Flex
      w={['100%', '570px']}
      flexDir={'row'}
      align={'center'}
      justify={'space-between'}
    >
      <AvatarButton
        src={avatarUrl}
        onClick={onAvatar}
        size={['48px', '70px']}
        borderRadius={['16px', null]}
      ></AvatarButton>
      <H2>{username}</H2>
      <Box w={['40px', '70px']} h={['40px', '70px']}></Box>
    </Flex>
  )
}
