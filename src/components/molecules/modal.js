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
import React, { useEffect, useState } from 'react'
import { colors } from 'styles'

export const Modal = ({ title, setOpen, categories, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (setOpen === true) {
      setIsOpen(true)
    }
  }, [setOpen])
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)}>
      <DrawerOverlay></DrawerOverlay>
      <DrawerContent borderRadius={'17px'} margin={'16px'}>
        <DrawerCloseButton margin={'8px'}></DrawerCloseButton>
        <DrawerHeader
          color={colors.background}
          fontFamily={'Inter'}
          fontSize={'24px'}
        >
          {title}
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
            {categories.map((element) => (
              <option key={element.id} value={element.category}>
                {element.category}
              </option>
            ))}
          </SelectInput>
          <SwitchInput label={'Crédito?'} marginTop={'16px'}></SwitchInput>
        </DrawerBody>

        <DrawerFooter>
          <SubmitModalButton onClick={onSubmit}>{title}</SubmitModalButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
