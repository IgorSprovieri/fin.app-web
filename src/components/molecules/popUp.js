import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { SubmitModalButton } from 'components/atoms'
import { useEffect, useState } from 'react'

export const PopUp = ({ message, title, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (setOpen === true) {
      setIsOpen(true)
    }
  }, [setOpen])

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent borderRadius={'17px'}>
        <ModalHeader fontFamily={'Inter'}>{title}</ModalHeader>
        <ModalBody>{message}</ModalBody>

        <ModalFooter>
          <SubmitModalButton onClick={onClose}>Fechar</SubmitModalButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
