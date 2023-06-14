import { Button, IconButton, Image } from '@chakra-ui/react'
import { colors, scaleAnimation } from 'styles'

export const SubmitButton = ({ children, onClick, marginTop, disabled }) => {
  return (
    <Button
      onClick={onClick}
      bgColor={colors.orange}
      color={colors.background}
      borderRadius={17}
      w={220}
      h={50}
      type="submit"
      disabled={disabled}
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

export const SubmitModalButton = ({ children, onClick, marginTop, blue }) => {
  return (
    <Button
      onClick={onClick}
      bgColor={colors.blue}
      color={colors.white}
      borderRadius={17}
      w={'180px'}
      h={'50px'}
      marginTop={marginTop || '64px'}
      fontFamily={'Inter'}
      fontWeight={'regular'}
      fontSize={'18px'}
      animation={scaleAnimation}
      _hover={{
        background: colors.white,
        border: '2px solid ',
        borderColor: colors.blue,
        color: colors.blue
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

export const AvatarButton = ({ src, onClick }) => {
  return (
    <Button
      w={'70px'}
      h={'70px'}
      onClick={onClick}
      padding={'0px'}
      margin={'0px'}
      borderRadius={'20px'}
      animation={scaleAnimation}
    >
      <Image w={'100%'} h={'100%'} src={src || 'avatar.svg'}></Image>
    </Button>
  )
}
