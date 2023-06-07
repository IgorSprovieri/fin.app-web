import { Button, Flex, Image, Input } from '@chakra-ui/react'
import { colors } from 'styles'
export const LoginScreen = () => {
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'center'}
      w={'100vw'}
      h={'100vh'}
    >
      <Image
        position={'absolute'}
        top={'46.53px'}
        marginTop={'32px'}
        width={'100vw'}
        src="wave.svg"
      ></Image>
      <Flex flexDir={'column'} align={'center'} w={310}>
        <Image
          marginTop={'32px'}
          width={190}
          h={51}
          src="loginTitle.svg"
        ></Image>
        <Input
          borderRadius={20}
          marginTop={'64px'}
          h={50}
          placeholder={'E-mail'}
          color={'white'}
          fontSize={22}
        ></Input>
        <Input
          borderRadius={20}
          h={50}
          placeholder={'Senha'}
          marginTop={'16px'}
          type="password"
          color={'white'}
          fontSize={22}
        ></Input>
        <Button
          bgColor={colors.orange}
          color={colors.white}
          borderRadius={17}
          w={220}
          h={50}
          marginTop={'64px'}
        >
          Entrar
        </Button>
        <Button
          bgColor={colors.background}
          color={colors.white}
          fontWeight={400}
          w={220}
          h={'24px'}
          marginTop={'24px'}
        >
          Crie sua conta
        </Button>
      </Flex>
    </Flex>
  )
}
