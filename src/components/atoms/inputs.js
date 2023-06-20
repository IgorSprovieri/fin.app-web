import {
  Button,
  Flex,
  Heading,
  Image,
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
  whiteBg,
  name,
  error,
  w
}) => {
  return (
    <Input
      name={name}
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
      borderColor={error ? colors.red : colors.gray}
      w={w || '100%'}
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

export const ColorPicker = ({ list, selectedColor, setSelectedColor }) => {
  const ColorsButton = ({ element }) => {
    return (
      <Button
        w={'50px'}
        h={'50px'}
        marginRight={'4px'}
        bgColor={element?.hexColor}
        borderRadius={'50px'}
        border={selectedColor === element?.id ? '3px solid black' : ''}
        onClick={() => {
          setSelectedColor(element?.id)
        }}
      ></Button>
    )
  }

  return (
    <Flex overflowX={'scroll'} marginTop={'16px'} paddingBottom={'8px'}>
      <Flex flexDir={'row'} w={'max-content'}>
        {list.map((element) => (
          <ColorsButton
            key={element.id}
            id={element.id}
            element={element}
          ></ColorsButton>
        ))}
      </Flex>
    </Flex>
  )
}

export const IconPicker = ({ list, selectedIcon, setSelectedIcon }) => {
  const rowLength = Math.abs(list?.length / 3)

  const IconsButton = ({ id, element }) => {
    return (
      <Button
        w={'50px'}
        h={'50px'}
        padding={'0px'}
        marginRight={'4px'}
        borderRadius={'50px'}
        border={selectedIcon === element?.id ? '3px solid black' : ''}
        onClick={() => {
          setSelectedIcon(element?.id)
        }}
      >
        <Image w={'22px'} h={'22px'} src={element?.icon_url}></Image>
      </Button>
    )
  }

  const Row = ({ min, max }) => {
    return (
      <Flex flexDir={'row'} marginTop={'4px'} w={'max-content'}>
        {list.slice(min, max).map((element) => (
          <IconsButton
            key={element.id}
            id={element.id}
            element={element}
          ></IconsButton>
        ))}
      </Flex>
    )
  }
  return (
    <Flex
      overflowX={'scroll'}
      marginTop={'16px'}
      paddingBottom={'8px'}
      flexDir={'column'}
    >
      {[...Array(3)].map((e, i) => (
        <Row
          key={i}
          min={rowLength * i}
          max={i - 1 === list.length ? i : rowLength * (i + 1)}
        ></Row>
      ))}
    </Flex>
  )
}
