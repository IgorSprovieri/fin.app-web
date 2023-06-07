import { Input } from '@chakra-ui/react'
import { colors, scaleAnimation } from 'styles'

export const LoginInput = ({ placeholder, marginTop, type }) => {
  return (
    <Input
      borderRadius={20}
      marginTop={marginTop}
      h={50}
      placeholder={placeholder}
      color={colors.white}
      fontSize={22}
      type={type}
      animation={scaleAnimation}
      fontFamily={'Inter'}
    ></Input>
  )
}

export const DateInput = () => {
  return (
    <Input
      color={colors.white}
      type={'date'}
      animation={scaleAnimation}
      fontFamily={'Inter'}
      marginTop={'16px'}
      fontSize={'20px'}
      w={'162px'}
      padding={0}
      border={0}
    ></Input>
  )
}
