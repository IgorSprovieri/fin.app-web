import { Flex, Modal } from '@chakra-ui/react'
import {
  ListCategories,
  ListFinances,
  MainContainer,
  Menu
} from 'components/molecules'
import { useState } from 'react'

export const HomeMenuRender = ({
  finances,
  categories,
  reloadFinances,
  reloadCategories
}) => {
  const [mainTitle, setMainTitle] = useState('Transações')
  const [menuSelector, setMenuSelector] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  return (
    <>
      <Modal
        setOpen={modalOpen}
        title={modalTitle}
        onSubmit={() => {
          reloadFinances()
          reloadCategories()
        }}
      ></Modal>
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
          setModalOpen(true)
          setModalTitle('Adicionar')
        }}
      ></Menu>
      <MainContainer title={mainTitle}>
        <Flex w={'100%'} h={'100%'} flexDir={'column'} justify={'flex-start'}>
          {menuSelector === 0 ? (
            <ListCategories categories={categories}></ListCategories>
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
      </MainContainer>
    </>
  )
}
