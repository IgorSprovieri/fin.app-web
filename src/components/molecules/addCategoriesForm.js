import { Flex } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { getColors, getIcons } from 'api'
import {
  ColorPicker,
  IconPicker,
  MainInput,
  SubmitModalButton
} from 'components/atoms'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'
import { CategoryCard } from './categoryCard'

export const AddCategoriesForm = ({ initialValue, mutation, alertError }) => {
  const user = useSelector(selectUser)
  const [colors, setColors] = useState([])
  const [icons, setIcons] = useState([])
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedIcon, setSelectedIcon] = useState(0)
  const [category, setCategory] = useState(initialValue?.category || '')

  useEffect(() => {
    colorsMutation.mutate()
    iconsMutation.mutate()
  }, [])

  const colorsMutation = useMutation({
    mutationFn: () => getColors(),
    onSuccess: (data) => {
      setColors(data)
      setSelectedColor(initialValue?.color_id || data[0].id)
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  const iconsMutation = useMutation({
    mutationFn: () => getIcons(),
    onSuccess: (data) => {
      setIcons(data)
      setSelectedIcon(initialValue?.icon_id || data[0].id)
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  return (
    <Flex flexDir={'column'}>
      <CategoryCard
        category={category}
        hideTrash={true}
        hexColor={
          colors[
            colors.findIndex((value) => {
              return selectedColor === value.id
            })
          ]?.hexColor
        }
        iconUrl={
          icons[
            icons.findIndex((value) => {
              return selectedIcon === value.id
            })
          ]?.icon_url
        }
      ></CategoryCard>
      <MainInput
        placeholder={'Categoria'}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        whiteBg={true}
      ></MainInput>
      <ColorPicker
        list={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      ></ColorPicker>
      <IconPicker
        list={icons}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      ></IconPicker>
      <SubmitModalButton
        onClick={() => {
          if (category.length < 3) {
            return alertError('Categoria tem que ter mais que 3 caracteres')
          }
          mutation.mutate({
            color_id: selectedColor,
            icon_id: selectedIcon,
            category,
            token: user?.token
          })
        }}
      >
        {initialValue.category === '' ? 'Adicionar' : 'Editar'}
      </SubmitModalButton>
    </Flex>
  )
}
