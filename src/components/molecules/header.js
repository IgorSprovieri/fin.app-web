import { Box, Flex } from '@chakra-ui/react'
import { AvatarButton, H2, MoneyBalance } from 'components/atoms'

export const Header = ({ username, onAvatar }) => {
  return (
    <>
      <Flex
        w={'570px'}
        marginTop={'32px'}
        flexDir={'row'}
        align={'center'}
        justify={'space-between'}
      >
        <AvatarButton onClick={onAvatar}></AvatarButton>
        <H2>{username}</H2>
        <Box w={70} h={70}></Box>
      </Flex>
      <Flex
        w={'570px'}
        h={'80px'}
        marginTop={'32px'}
        flexDir={'row'}
        align={'center'}
        justify={'space-between'}
      >
        <MoneyBalance value={'1 000,00'}></MoneyBalance>
      </Flex>
    </>
  )
}
