import { Flex } from '@chakra-ui/react'
import { WaveImage, FinancesManager, FinancesHeader } from 'components'

export const HomeScreen = () => {
  const fakeFinances = [
    {
      id: 0,
      name: 'Salário',
      value: 2000.0,
      date: '06-05-2023'
    },
    {
      id: 1,
      name: 'Hamburguer',
      value: -22.9,
      date: '06-06-2023',
      category: 'Comida'
    },
    {
      id: 2,
      name: 'Aluguel',
      value: -300,
      date: '06-07-2023',
      category: 'Casa'
    }
  ]

  const fakeCategories = [
    {
      id: 0,
      category: 'Alimentação'
    },
    {
      id: 1,
      category: 'Lazer'
    },
    {
      id: 2,
      category: 'Casa'
    }
  ]

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
        <FinancesManager
          finances={fakeFinances}
          categories={fakeCategories}
        ></FinancesManager>
      </Flex>
    </Flex>
  )
}
