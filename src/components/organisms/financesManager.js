import { Flex } from '@chakra-ui/react'
import { Main, Menu, Modal, FinanceCard } from 'components/molecules'
import { useState } from 'react'

export const FinancesManager = ({ finances }) => {
  const [mainTitle, setMainTitle] = useState('Transações')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalHeader, setModalHeader] = useState('')

  const onClickHome = () => {
    setMainTitle('Categorias')
  }

  const onClickTransitions = () => {
    setMainTitle('Transações')
  }

  const onClickBalance = () => {
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
      <Main title={mainTitle}>
        <Flex w={'100%'} h={'100%'} flexDir={'column'} justify={'flex-start'}>
          {finances.map((element) => (
            <FinanceCard
              key={element.id}
              name={element.name}
              value={element.value}
              date={element.date}
              category={element.category}
            ></FinanceCard>
          ))}
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
