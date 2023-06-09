import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react'
import { ModalInput, MoneyInput } from 'components/atoms'
import React from 'react'
import { colors } from 'styles'

export const Modal = ({ header, isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader color={colors.background} fontFamily={'Inter'}>
          {header}
        </DrawerHeader>

        <DrawerBody>
          <MoneyInput></MoneyInput>
          <ModalInput type={'Date'}></ModalInput>
          <ModalInput placeholder="Nome" type={'Text'}></ModalInput>
        </DrawerBody>

        <DrawerFooter>
          <Button
            fontFamily={'Inter'}
            bgColor={colors.blue}
            color={colors.white}
          >
            Adicionar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
