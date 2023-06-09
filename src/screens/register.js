import { Flex } from '@chakra-ui/react'
import {
  LinkButton,
  LoginInput,
  RegisterTitleImage,
  SubmitButton,
  WaveImage
} from 'components'
import { useNavigate } from 'react-router-dom'

export const RegisterScreen = () => {
  const navigate = useNavigate()

  const onSubmit = () => {}
  const onLogin = () => {
    navigate('/login')
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
      <Flex flexDir={'column'} align={'center'} w={310}>
        <RegisterTitleImage></RegisterTitleImage>
        <LoginInput
          placeholder={'Nome'}
          marginTop={'48px'}
          type={'text'}
        ></LoginInput>
        <LoginInput
          placeholder={'E-mail'}
          marginTop={'16px'}
          type={'text'}
        ></LoginInput>
        <LoginInput
          placeholder={'Senha'}
          marginTop={'16px'}
          type={'password'}
        ></LoginInput>
        <SubmitButton marginTop={'48px'} onClick={() => onSubmit()}>
          Criar Conta
        </SubmitButton>
        <LinkButton onClick={() => onLogin()}>
          Já tem conta? Faça o Login!
        </LinkButton>
      </Flex>
    </Flex>
  )
}