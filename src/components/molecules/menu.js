import { AddIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import {
  AddButton,
  BalanceIcon,
  HomeIcon,
  MenuButton,
  TransitionsIcon
} from 'components/atoms'

export const Menu = ({ onHome, onTransitions, onBalance, onAdd }) => {
  return (
    <Flex
      w={'334px'}
      h={'32px'}
      marginTop={'32px'}
      flexDir={'row'}
      align={'center'}
      justify={'space-between'}
    >
      <MenuButton icon={<HomeIcon></HomeIcon>} onClick={onHome}></MenuButton>
      <MenuButton
        icon={<TransitionsIcon></TransitionsIcon>}
        onClick={onTransitions}
      ></MenuButton>
      <MenuButton
        icon={<BalanceIcon></BalanceIcon>}
        onClick={onBalance}
      ></MenuButton>
      <AddButton icon={<AddIcon></AddIcon>} onClick={onAdd}></AddButton>
    </Flex>
  )
}
