import { Flex } from '@chakra-ui/react'
import {
  LinkButton,
  MainInput,
  LoginTitleImage,
  SubmitButton,
  WaveImage
} from 'components'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const onSubmit = () => {
    navigate('/home')
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
      <Flex flexDir={'column'} align={'center'} w={'310px'}>
        <LoginTitleImage></LoginTitleImage>
        <MainInput
          placeholder={'E-mail'}
          marginTop={'64px'}
          type={'text'}
        ></MainInput>
        <MainInput
          placeholder={'Senha'}
          marginTop={'16px'}
          type={'password'}
        ></MainInput>
        <SubmitButton onClick={() => onSubmit()}>Entrar</SubmitButton>
        <LinkButton onClick={() => navigate('/register')}>
          Crie sua conta
        </LinkButton>
      </Flex>
    </Flex>
  )
}
