import { Image } from '@chakra-ui/react'

export const WaveImage = () => {
  return (
    <Image
      position={'absolute'}
      top={'46.53px'}
      marginTop={'32px'}
      width={'100vw'}
      src="wave.svg"
    ></Image>
  )
}

export const LoginTitleImage = () => {
  return (
    <Image marginTop={'32px'} width={190} h={51} src="loginTitle.svg"></Image>
  )
}
