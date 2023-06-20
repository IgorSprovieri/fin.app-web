import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { SubmitModalButton } from 'components/atoms'

export const Alert = ({ message, title, isOpen, setIsOpen }) => {
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
