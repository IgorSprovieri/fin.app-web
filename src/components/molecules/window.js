import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const Window = ({ setOpen, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (setOpen === true) {
      setIsOpen(true)
    }
  }, [setOpen])

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay></ModalOverlay>
      <ModalContent borderRadius={'17px'}>
        <ModalCloseButton></ModalCloseButton>
        <ModalHeader>Configuração</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}
