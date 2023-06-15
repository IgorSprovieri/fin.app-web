import { Box, Flex } from '@chakra-ui/react'
import { AvatarButton, H2 } from 'components/atoms'

export const HeaderAvatar = ({ avatarUrl, username, onAvatar }) => {
  return (
    <Flex
      w={'570px'}
      marginTop={'32px'}
      flexDir={'row'}
      align={'center'}
      justify={'space-between'}
    >
      <AvatarButton src={avatarUrl} onClick={onAvatar}></AvatarButton>
      <H2>{username}</H2>
      <Box w={70} h={70}></Box>
    </Flex>
  )
}
