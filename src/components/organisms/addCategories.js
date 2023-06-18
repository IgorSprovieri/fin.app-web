import { Button, Flex, Image } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'
import { getColors, getIcons, postCategory } from 'api'
import { CategoryCard, MainInput, SubmitModalButton } from 'components/atoms'
import { ListItems } from 'components/molecules'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'

export const AddCategories = ({ onError, onReload }) => {
  const user = useSelector(selectUser)
  const [colors, setColors] = useState([])
  const [icons, setIcons] = useState([])
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedIcon, setSelectedIcon] = useState(0)
  const [category, setCategory] = useState('')

  useEffect(() => {
    colorsMutation.mutate()
    iconsMutation.mutate()
  }, [])

  const mutation = useMutation({
    mutationFn: postCategory,
    onSuccess: () => onReload,
    onError: (error) => {
      onError(error)
    }
  })

  const colorsMutation = useMutation({
    mutationFn: () => getColors(),
    onSuccess: (data) => {
      setColors(data)
      setSelectedColor(data[0].id)
    },
    onError: (error) => {
      onError(error)
    }
  })

  const iconsMutation = useMutation({
    mutationFn: () => getIcons(),
    onSuccess: (data) => {
      setIcons(data)
      setSelectedIcon(data[0].id)
    },
    onError: (error) => {
      onError(error)
    }
  })

  const ColorsButton = ({ id, element }) => {
    return (
      <Button
        w={'50px'}
        h={'50px'}
        marginRight={'4px'}
        bgColor={element?.hexColor}
        borderRadius={'50px'}
        border={selectedColor === id ? '3px solid black' : ''}
        onClick={() => {
          setSelectedColor(id)
        }}
      ></Button>
    )
  }

  const IconsButton = ({ id, element }) => {
    return (
      <Button
        w={'50px'}
        h={'50px'}
        padding={'0px'}
        marginRight={'4px'}
        borderRadius={'50px'}
        border={selectedIcon === id ? '3px solid black' : ''}
        onClick={() => {
          setSelectedIcon(id)
        }}
      >
        <Image w={'22px'} h={'22px'} src={element?.icon_url}></Image>
      </Button>
    )
  }

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
      <ListItems
        flexDir={'row'}
        marginTop={'16px'}
        list={colors}
        Render={ColorsButton}
        lines={1}
      ></ListItems>
      <ListItems
        flexDir={'row'}
        marginTop={'16px'}
        list={icons}
        Render={IconsButton}
        lines={3}
      ></ListItems>
      <SubmitModalButton
        onClick={() => {
          mutation.mutate({
            color_id: selectedColor,
            icon_id: selectedIcon,
            category,
            token: user?.token
          })
        }}
      >
        Adicionar
      </SubmitModalButton>
    </Flex>
  )
}
