import { Flex } from '@chakra-ui/react'
import { Main, Menu, Modal, FinanceCard } from 'components/molecules'
import { useState } from 'react'

export const FinancesManager = ({ finances }) => {
  const [mainTitle, setMainTitle] = useState('Transações')
  const [menuSelector, setMenuSelector] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalHeader, setModalHeader] = useState('')

  const onCloseModal = () => {
    setModalIsOpen(false)
  }

  const ListFinances = ({ finances }) => {
    return (
      <>
        {' '}
        {finances.map((element) => (
          <FinanceCard
            key={element.id}
            name={element.name}
            value={element.value}
            date={element.date}
            category={element.category}
          ></FinanceCard>
        ))}
      </>
    )
  }

  return (
    <>
      <Menu
        onHome={() => {
          setMainTitle('Categorias')
          setMenuSelector(0)
        }}
        onTransitions={() => {
          setMainTitle('Transações')
          setMenuSelector(1)
        }}
        onBalance={() => {
          setMainTitle('Balanço')
          setMenuSelector(2)
        }}
        onAdd={() => {
          setModalIsOpen(true)
          setModalHeader('Adicionar')
        }}
      ></Menu>
      <Main title={mainTitle}>
        <Flex w={'100%'} h={'100%'} flexDir={'column'} justify={'flex-start'}>
          {menuSelector === 0 ? (
            <ListFinances finances={finances}></ListFinances>
          ) : (
            <></>
          )}
          {menuSelector === 1 ? (
            <ListFinances finances={finances}></ListFinances>
          ) : (
            <></>
          )}
          {menuSelector === 2 ? (
            <ListFinances finances={finances}></ListFinances>
          ) : (
            <></>
          )}
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
