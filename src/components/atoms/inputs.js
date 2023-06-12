import {
  Flex,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Switch
} from '@chakra-ui/react'
import { useState } from 'react'
import { colors, scaleAnimation } from 'styles'

export const MainInput = ({
  value,
  onChange,
  placeholder,
  marginTop,
  type,
  whiteBg
}) => {
  return (
    <Input
      borderRadius={'20px'}
      marginTop={marginTop}
      h={'50px'}
      placeholder={placeholder}
      color={whiteBg ? colors.background : colors.white}
      fontSize={'18px'}
      type={type || 'text'}
      animation={scaleAnimation}
      fontFamily={'Inter'}
      value={value}
      onChange={onChange}
    ></Input>
  )
}

export const SelectInput = ({
  value,
  onChange,
  placeholder,
  marginTop,
  type,
  whiteBg,
  children
}) => {
  return (
    <Select
      borderRadius={'20px'}
      marginTop={marginTop}
      h={'50px'}
      placeholder={placeholder}
      color={whiteBg ? colors.background : colors.white}
      fontSize={'16px'}
      type={type || 'text'}
      animation={scaleAnimation}
      fontFamily={'Inter'}
      value={value}
      onChange={onChange}
    >
      {children}
    </Select>
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

export const SwitchInput = ({ value, onChange, label, marginTop }) => {
  return (
    <Flex flexDir={'row'} align={'center'} marginTop={marginTop}>
      <Switch
        size="lg"
        value={value}
        onChange={onChange}
        marginRight={'16px'}
      ></Switch>
      <Heading fontSize={'16px'} fontWeight={'medium'} fontFamily={'Inter'}>
        {label}
      </Heading>
    </Flex>
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
        <NumberInputField
          borderRadius={'20px'}
          border={''}
          h={'50px'}
          fontSize={'18px'}
        ></NumberInputField>
      </NumberInput>
    </>
  )
}
