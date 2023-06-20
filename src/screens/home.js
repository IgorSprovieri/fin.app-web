import { Flex } from '@chakra-ui/react'
import {
  WaveImage,
  FinancesHeader,
  Menu,
  ListCategories,
  Alert
} from 'components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'

export const HomeScreen = () => {
  const user = useSelector(selectUser)
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const alertError = (message) => {
    setOpenAlert(true)
    setErrorMessage(message || 'Erro Inesperado')
  }

  return (
    <Flex w={'100dvw'} h={'100dvh'}>
      <WaveImage></WaveImage>
      <Alert
        message={errorMessage}
        title={'Erro'}
        isOpen={openAlert}
        setIsOpen={setOpenAlert}
      ></Alert>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
      >
        <FinancesHeader></FinancesHeader>
        <Menu></Menu>
        <ListCategories user={user} alertError={alertError}></ListCategories>
      </Flex>
    </Flex>
  )
}
