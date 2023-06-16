import { Flex, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import { MainInput, SubmitButton } from 'components/atoms'

export const ResetPasswordToken = () => {
  return (
    <Flex w={'280px'} flexDir={'column'} align={'center'}>
      <HStack>
        <PinInput>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
        </PinInput>
      </HStack>
      <MainInput
        marginTop={'64px'}
        w={'280px'}
        placeholder={'Nova Senha'}
        type={'Password'}
      ></MainInput>

      <SubmitButton w={'260px'} marginTop={'64px'}>
        Redefinir
      </SubmitButton>
    </Flex>
  )
}
