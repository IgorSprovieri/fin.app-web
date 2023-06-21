import { Flex } from '@chakra-ui/react'
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
    <Flex
      position={['fixed', 'absolute']}
      top={'46.53px'}
      w={['100vw', '100vw']}
      h={['25vw', '12.5vw']}
      backgroundImage={'url(wave.svg)'}
      backgroundSize={['200vw', '100vw']}
      backgroundPosition={['-180px 0px', 'center']}
      animation={animation}
    ></Flex>
  )
}
