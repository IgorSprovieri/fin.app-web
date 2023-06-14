import { Flex } from '@chakra-ui/react'
import { WaveImage, FinancesManager, FinancesHeader } from 'components'

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
        <FinancesHeader></FinancesHeader>
        <FinancesManager></FinancesManager>
      </Flex>
    </Flex>
  )
}
