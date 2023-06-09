import {
  Flex,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Switch
} from '@chakra-ui/react'
import { useState } from 'react'

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

export const ModalInput = ({ placeholder, type }) => {
  return (
    <Input
      borderRadius={'20px'}
      marginTop={'16px'}
      placeholder={placeholder}
      type={type || 'Text'}
    />
  )
}

export const MoneyInput = ({ onChange, value }) => {
  const [isExpense, setIsExpense] = useState(false)

  return (
    <>
      <Flex flexDir={'row'} align={'center'}>
        <Switch
          size="lg"
          value={isExpense}
          onChange={() => setIsExpense(!isExpense)}
          marginRight={'16px'}
        ></Switch>
        <Heading fontSize={'16px'} fontWeight={'medium'} fontFamily={'Inter'}>
          Despesa
        </Heading>
      </Flex>

      <NumberInput
        onChange={onChange}
        value={value}
        defaultValue={0}
        min={0}
        precision={2}
        marginTop={'16px'}
        borderRadius={'20px'}
        border={''}
        bgColor={isExpense === true ? colors.red : colors.green}
      >
        <NumberInputField borderRadius={'20px'} border={''} />
      </NumberInput>
    </>
  )
}
