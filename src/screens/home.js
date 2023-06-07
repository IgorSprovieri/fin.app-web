import { Box, Flex } from '@chakra-ui/react'
import {
  AvatarImage,
  WaveImage,
  H2,
  MoneyBalance,
  MenuButton,
  HomeIcon,
  TransitionsIcon,
  BalanceIcon,
  DateInput
} from 'components'

export const HomeScreen = () => {
  return (
    <Flex w={'100dvw'} h={'100dvh'}>
      <WaveImage></WaveImage>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
      >
        <Flex
          w={'570px'}
          marginTop={'32px'}
          flexDir={'row'}
          align={'center'}
          justify={'space-between'}
        >
          <AvatarImage></AvatarImage>
          <H2>Igor Sprovieri</H2>
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
          <DateInput></DateInput>
        </Flex>
        <Flex
          w={'300px'}
          h={'32px'}
          marginTop={'32px'}
          flexDir={'row'}
          align={'center'}
          justify={'space-between'}
        >
          <MenuButton icon={<HomeIcon></HomeIcon>}></MenuButton>
          <MenuButton icon={<TransitionsIcon></TransitionsIcon>}></MenuButton>
          <MenuButton icon={<BalanceIcon></BalanceIcon>}></MenuButton>
        </Flex>
      </Flex>
    </Flex>
  )
}
