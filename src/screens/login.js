import { Flex } from '@chakra-ui/react'
import {
  LinkButton,
  LoginInput,
  LoginTitleImage,
  SubmitButton,
  WaveImage
} from 'components'

export const LoginScreen = () => {
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
        <LoginTitleImage></LoginTitleImage>
        <LoginInput
          placeholder={'E-mail'}
          marginTop={'64px'}
          type={'text'}
        ></LoginInput>
        <LoginInput
          placeholder={'Senha'}
          marginTop={'16px'}
          type={'password'}
        ></LoginInput>

        <SubmitButton>Entrar</SubmitButton>
        <LinkButton>Crie sua conta</LinkButton>
      </Flex>
    </Flex>
  )
}
