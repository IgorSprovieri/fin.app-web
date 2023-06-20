import { Flex } from '@chakra-ui/react'
import { WaveImage, EditUserQuery, Alert } from 'components'
import { useState } from 'react'

export const EditUserScreen = () => {
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
        isOpen={openAlert}
        setIsOpen={setOpenAlert}
        message={errorMessage}
        title={'Erro'}
      ></Alert>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
      >
        <EditUserQuery alertError={alertError}></EditUserQuery>
      </Flex>
    </Flex>
  )
}
