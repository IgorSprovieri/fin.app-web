import { Button } from '@chakra-ui/react'
import { colors } from 'styles'

export const SubmitButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={() => onClick()}
      bgColor={colors.orange}
      color={colors.white}
      borderRadius={17}
      w={220}
      h={50}
      marginTop={'64px'}
    >
      {children}
    </Button>
  )
}

export const LinkButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={() => onClick()}
      bgColor={colors.background}
      color={colors.white}
      fontWeight={400}
      w={220}
      h={'24px'}
      marginTop={'24px'}
    >
      {children}
    </Button>
  )
}
