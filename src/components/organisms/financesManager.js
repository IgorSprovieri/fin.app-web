import { Flex } from '@chakra-ui/react'
import { Main, Menu } from 'components/molecules'
import { FinanceCard } from 'components/molecules/financeCard'
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
      <Main title={mainTitle} animation={mainAnimation}>
        <Flex w={'100%'} h={'100%'} flexDir={'column'} justify={'flex-start'}>
          <FinanceCard
            name={'Salário'}
            value={2000.0}
            date={'01-05-2023'}
          ></FinanceCard>
          <FinanceCard
            name={'Lanche'}
            value={-24.9}
            date={'01-06-2023'}
            category={'Alimentação'}
          ></FinanceCard>
        </Flex>
      </Main>
      <Modal
        header={modalHeader}
        isOpen={modalIsOpen}
        onClose={() => onCloseModal()}
      ></Modal>
    </>
  )
}
