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

export const Alert = ({ message, title, setOpen }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (setOpen === true) {
      setIsOpen(true)
    }
  }, [setOpen])

  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay></ModalOverlay>
      <ModalContent borderRadius={'17px'}>
        <ModalHeader fontFamily={'Inter'}>{title}</ModalHeader>
        <ModalBody>{message}</ModalBody>

        <ModalFooter>
          <SubmitModalButton onClick={() => setIsOpen(false)}>
            Fechar
          </SubmitModalButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
