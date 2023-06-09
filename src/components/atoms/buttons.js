import { Button, IconButton } from '@chakra-ui/react'
import { colors, scaleAnimation } from 'styles'

export const SubmitButton = ({ children, onClick, marginTop }) => {
  return (
    <Button
      onClick={onClick}
      bgColor={colors.orange}
      color={colors.background}
      borderRadius={17}
      w={220}
      h={50}
      marginTop={marginTop || '64px'}
      fontFamily={'Inter'}
      fontWeight={'regular'}
      fontSize={'18px'}
      animation={scaleAnimation}
      _hover={{
        background: colors.background,
        border: '1px solid white',
        color: colors.white
      }}
    >
      {children}
    </Button>
  )
}

export const LinkButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      color={colors.white}
      fontWeight={'regular'}
      fontSize={'18px'}
      w={220}
      h={'24px'}
      marginTop={'24px'}
      variant="link"
      animation={scaleAnimation}
      fontFamily={'Inter'}
    >
      {children}
    </Button>
  )
}

export const MenuButton = ({ icon, onClick }) => {
  return (
    <IconButton
      variant="outline"
      border={'0px'}
      h={'34px'}
      w={'44px'}
      borderRadius={'50px'}
      icon={icon}
      animation={scaleAnimation}
      onClick={onClick}
    ></IconButton>
  )
}

export const AddButton = ({ icon, onClick }) => {
  return (
    <IconButton
      h={'34px'}
      w={'44px'}
      borderRadius={'50px'}
      bgColor={colors.blue}
      icon={icon}
      animation={scaleAnimation}
      onClick={onClick}
    ></IconButton>
  )
}
