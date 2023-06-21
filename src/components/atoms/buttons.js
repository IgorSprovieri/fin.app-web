import { Button, IconButton, Image, Spinner } from '@chakra-ui/react'
import { colors, scaleAnimation } from 'styles'

export const SubmitButton = ({ loading, children, ...props }) => {
  return (
    <Button
      bgColor={colors.orange}
      color={colors.background}
      border={`1px solid ${colors.orange}`}
      borderColor={colors.orange}
      borderRadius={'17px'}
      h={'48px'}
      marginTop={props.marginTop || '64px'}
      fontWeight={'regular'}
      fontSize={'18px'}
      animation={scaleAnimation}
      _hover={{
        background: colors.background,
        color: colors.white
      }}
      {...props}
    >
      {loading ? <Spinner></Spinner> : children}
    </Button>
  )
}

export const CancelButton = ({ children, ...props }) => {
  return (
    <Button
      bgColor={colors.background}
      color={colors.white}
      border={`1px solid ${colors.white}`}
      borderRadius={'17px'}
      h={'48px'}
      fontWeight={'regular'}
      fontSize={'18px'}
      animation={scaleAnimation}
      _hover={{
        background: colors.white,
        color: colors.background
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export const SubmitModalButton = ({ children, onClick, marginTop }) => {
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

export const LinkButton = ({ children, onClick, marginTop, w }) => {
  return (
    <Button
      onClick={onClick}
      color={colors.white}
      fontWeight={'regular'}
      fontSize={'18px'}
      w={w || '220px'}
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
      h={['28px', '34px']}
      w={['36px', '44px']}
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
      h={['28px', '34px']}
      w={['36px', '44px']}
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
