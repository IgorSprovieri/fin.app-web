import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'

export const Window = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay></ModalOverlay>
      <ModalContent borderRadius={'17px'}>
        <ModalCloseButton></ModalCloseButton>
        <ModalHeader fontSize={['24px', null]} fontFamily={'Inter'}>
          {title}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}
