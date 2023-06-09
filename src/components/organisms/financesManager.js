import { Main, Menu } from 'components/molecules'
import { Modal } from 'components/molecules/modal'
import { useState } from 'react'
import { slideUpAnimation } from 'styles'

export const FinancesManager = () => {
  const [mainAnimation, setMainAnimation] = useState(slideUpAnimation)
  const [mainTitle, setMainTitle] = useState('Transações')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalHeader, setModalHeader] = useState('')

  const onClickHome = () => {
    setMainAnimation(slideUpAnimation)
    setMainTitle('Categorias')
  }

  const onClickTransitions = () => {
    setMainAnimation(slideUpAnimation)
    setMainTitle('Transações')
  }

  const onClickBalance = () => {
    setMainAnimation(slideUpAnimation)
    setMainTitle('Balanço')
  }

  const onClickAdd = () => {
    setModalIsOpen(true)
    setModalHeader('Adicionar')
  }

  const onCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <Menu
        onHome={() => onClickHome()}
        onTransitions={() => onClickTransitions()}
        onBalance={() => onClickBalance()}
        onAdd={() => onClickAdd()}
      ></Menu>
      <Main title={mainTitle} animation={mainAnimation}></Main>
      <Modal
        header={modalHeader}
        isOpen={modalIsOpen}
        onClose={() => onCloseModal()}
      ></Modal>
    </>
  )
}
