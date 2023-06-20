import { Flex } from '@chakra-ui/react'
import { WaveImage, LoginQuery, Alert } from 'components'
import { useState } from 'react'

export const LoginScreen = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const alertError = (message) => {
    setOpenAlert(true)
    setErrorMessage(message || 'Erro Inesperado')
  }

  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      w={'100vw'}
      h={'100vh'}
    >
      <WaveImage></WaveImage>
      <Alert
        isOpen={openAlert}
        setIsOpen={setOpenAlert}
        message={errorMessage}
        title={'Erro'}
      ></Alert>
      <LoginQuery alertError={alertError}></LoginQuery>
    </Flex>
  )
}
