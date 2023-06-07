import { Image } from '@chakra-ui/react'
import { fadeAnimation, scaleAnimation } from 'styles'

export const WaveImage = () => {
  return (
    <Image
      position={'absolute'}
      top={'46.53px'}
      width={'100vw'}
      src="wave.svg"
      animation={fadeAnimation}
    ></Image>
  )
}

export const LoginTitleImage = () => {
  return (
    <Image
      marginTop={'32px'}
      width={190}
      h={51}
      src="loginTitle.svg"
      animation={scaleAnimation}
    ></Image>
  )
}

export const RegisterTitleImage = () => {
  return (
    <Image
      marginTop={'80px'}
      width={236}
      h={51}
      src="registerTitle.svg"
      animation={scaleAnimation}
    ></Image>
  )
}

export const AvatarImage = () => {
  return (
    <Image
      width={70}
      h={70}
      src="avatar.svg"
      animation={scaleAnimation}
    ></Image>
  )
}
