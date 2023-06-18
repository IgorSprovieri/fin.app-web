import { Button, Flex } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { getCategories } from 'api'
import {
  WaveImage,
  FinancesHeader,
  Menu,
  MainContainer,
  CategoryCard,
  Window,
  AddCategories
} from 'components'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'

export const HomeScreen = () => {
  const user = useSelector(selectUser)
  const [categories, setCategories] = useState([])
  const [windowIsOpen, setWindowIsOpen] = useState(false)
  const [windowChildren, setWindowChildren] = useState(<></>)
  const [windowTitle, setWindowTitle] = useState('')

  useEffect(() => {
    mutation.mutate()
  }, [])

  const mutation = useMutation({
    mutationFn: () => getCategories(user?.token),
    onSuccess: (data) => {
      setCategories(data)
    },
    onError: (error) => {
      setWindowChildren(<>{error.message}</>)
    }
  })

  return (
    <Flex w={'100dvw'} h={'100dvh'}>
      <WaveImage></WaveImage>
      <Window
        title={windowTitle}
        isOpen={windowIsOpen}
        setIsOpen={setWindowIsOpen}
      >
        {windowChildren}
      </Window>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
      >
        <FinancesHeader></FinancesHeader>
        <Menu></Menu>
        <MainContainer title={'Categorias'}>
          <Flex
            w={'100%'}
            h={'max-content'}
            flexDir={'column'}
            justify={'flex-start'}
          >
            {categories.map((element) => (
              <CategoryCard
                key={element.id}
                category={element.category}
                iconUrl={element.icon.icon_url}
                hexColor={element.color.hexColor}
              ></CategoryCard>
            ))}
            <Button
              onClick={() => {
                setWindowChildren(<AddCategories></AddCategories>)
                setWindowTitle('Adicionar Categoria')
                setWindowIsOpen(true)
              }}
            ></Button>
          </Flex>
        </MainContainer>
      </Flex>
    </Flex>
  )
}
