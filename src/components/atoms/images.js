import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { fadeAnimation, transparentAnimation } from 'styles'

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
