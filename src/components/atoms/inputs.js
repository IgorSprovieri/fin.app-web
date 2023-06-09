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
      fontSize={'18px'}
      w={'128px'}
      h={'32px'}
      border={0}
      padding={'8px'}
      borderRadius={'50px'}
      bgColor={colors.blue}
    ></Input>
  )
}
