import { Box, Flex } from '@chakra-ui/react'
import {
  AvatarImage,
  WaveImage,
  H2,
  MoneyBalance,
  FinancesManager
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
        </Flex>
        <FinancesManager></FinancesManager>
      </Flex>
    </Flex>
  )
}
