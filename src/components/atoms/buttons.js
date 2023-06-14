import { Button, IconButton, Image } from '@chakra-ui/react'
import { colors, scaleAnimation } from 'styles'

export const SubmitButton = ({ children, onClick, marginTop, disabled }) => {
  return (
    <Button
      onClick={onClick}
      bgColor={colors.orange}
      color={colors.background}
      borderRadius={'17px'}
      w={'220px'}
      h={'50px'}
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
      w={'160px'}
      h={'44px'}
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

export const LinkButton = ({ children, onClick, marginTop }) => {
  return (
    <Button
      onClick={onClick}
      color={colors.white}
      fontWeight={'regular'}
      fontSize={'18px'}
      w={'220px'}
      h={'24px'}
      marginTop={marginTop || '24px'}
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

export const AvatarButton = ({
  src,
  onClick,
  marginTop,
  size,
  borderRadius
}) => {
  return (
    <Button
      w={size || '70px'}
      h={size || '70px'}
      onClick={onClick}
      padding={'0px'}
      margin={'0px'}
      borderRadius={borderRadius || '20px'}
      animation={scaleAnimation}
      marginTop={marginTop}
    >
      <Image
        borderRadius={borderRadius || '20px'}
        w={'100%'}
        h={'100%'}
        src={src || 'avatar.svg'}
      ></Image>
    </Button>
  )
}
