import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import {
  MainInput,
  MoneyInput,
  SelectInput,
  SubmitModalButton,
  SwitchInput
} from 'components/atoms'
import React from 'react'
import { colors } from 'styles'

export const Modal = ({ header, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent borderRadius={'17px'} margin={'16px'}>
        <DrawerCloseButton margin={'8px'}></DrawerCloseButton>
        <DrawerHeader
          color={colors.background}
          fontFamily={'Inter'}
          fontSize={'24px'}
        >
          {header}
        </DrawerHeader>

        <DrawerBody>
          <MoneyInput></MoneyInput>
          <MainInput
            placeholder={'Nome'}
            marginTop={'16px'}
            whiteBg={true}
          ></MainInput>
          <MainInput
            type={'date'}
            marginTop={'16px'}
            whiteBg={true}
          ></MainInput>
          <SelectInput
            type={'date'}
            marginTop={'16px'}
            whiteBg={true}
            placeholder="Categoria"
          >
            <option value="1">Casa</option>
            <option value="2">Compras</option>
            <option value="3">Lazer</option>
          </SelectInput>
          <SwitchInput label={'Crédito?'} marginTop={'16px'}></SwitchInput>
        </DrawerBody>

        <DrawerFooter>
          <SubmitModalButton>Adicionar</SubmitModalButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
