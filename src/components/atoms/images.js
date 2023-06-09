import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fadeAnimation, scaleAnimation, transparentAnimation } from 'styles'

export const WaveImage = () => {
  const delay = '0.5s'
  const [animation, setAnimation] = useState(transparentAnimation(delay))

  useEffect(() => {
    setTimeout(() => {
      setAnimation(fadeAnimation)
    }, 500)
  }, [])

  return (
    <Image
      position={'absolute'}
      top={'46.53px'}
      width={'100vw'}
      src="wave.svg"
      animation={animation}
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
