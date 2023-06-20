import { Button, Flex } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { getCategories, postCategory, putCategory } from 'api'
import {
  AddCategoriesForm,
  MainContainer,
  Window,
  CategoryCard
} from 'components/molecules'
import { useEffect, useState } from 'react'

export const ListCategories = ({ user, alertError }) => {
  const emptyCategory = {
    color_id: null,
    icon_id: null,
    category: ''
  }
  const [categories, setCategories] = useState([])
  const [windowIsOpen, setWindowIsOpen] = useState(false)
  const [windowTitle, setWindowTitle] = useState('')
  const [initialValue, setInitialValue] = useState(emptyCategory)

  useEffect(() => {
    getCategoriesMutation.mutate()
  }, [])

  const getCategoriesMutation = useMutation({
    mutationFn: () => getCategories(user?.token),
    onSuccess: (data) => {
      setCategories(data)
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  const postCategoryMutation = useMutation({
    mutationFn: postCategory,
    onSuccess: () => {
      setWindowIsOpen(false)
      getCategoriesMutation.mutate()
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  const putCategoryMutation = useMutation({
    mutationFn: (data) => putCategory({ ...data, token: user?.token }),
    onSuccess: () => {
      setWindowIsOpen(false)
      getCategoriesMutation.mutate()
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  return (
    <>
      <Window
        title={windowTitle}
        isOpen={windowIsOpen}
        setIsOpen={setWindowIsOpen}
      >
        <AddCategoriesForm
          mutation={
            initialValue?.category === ''
              ? putCategoryMutation
              : postCategoryMutation
          }
          initialValue={initialValue}
          alertError={alertError}
        ></AddCategoriesForm>
      </Window>
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
              onClick={() => {
                setWindowTitle('Editar Categoria')
                setWindowIsOpen(true)
                setInitialValue(element)
              }}
            ></CategoryCard>
          ))}
          <Button
            fontSize={'24px'}
            h={'46px'}
            borderRadius={'15px'}
            marginBottom={'8px'}
            onClick={() => {
              setWindowTitle('Adicionar Categoria')
              setWindowIsOpen(true)
              setInitialValue(emptyCategory)
            }}
          >
            +
          </Button>
        </Flex>
      </MainContainer>
    </>
  )
}
