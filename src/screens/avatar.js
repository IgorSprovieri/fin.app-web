import { Flex } from '@chakra-ui/react'
import {
  AvatarButton,
  AvatarTitleImage,
  H2,
  SubmitButton,
  WaveImage
} from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { putUserAvatar, selectUser, setAvatarUrl } from 'services'
import { useRef } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

export const AvatarScreen = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const inputFileRef = useRef()
  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: (data) => putUserAvatar(data, user?.token),
    onSuccess: (data) => {
      dispatch(setAvatarUrl(data?.avatar_url))
    },
    onError: (error) => {
      console.log(error.message)
    }
  })

  const onChangeImage = (event) => {
    const file = event?.target?.files[0]
    const type = file?.type

    const reader = new FileReader(type)
    reader.readAsDataURL(file)
    reader.onload = () => {
      const base64 = reader.result
      mutation.mutate({ mime: type, base64 })
    }
  }

  return (
    <Flex w={'100dvw'} h={'100dvh'}>
      <WaveImage></WaveImage>
      <Flex
        zIndex={1}
        w={'100dvw'}
        h={'100dvh'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
      >
        <Flex flexDir={'column'} align={'center'} w={'310px'}>
          <AvatarTitleImage></AvatarTitleImage>
          <AvatarButton
            marginTop={'48px'}
            size={'128px'}
            onClick={() => inputFileRef?.current?.click()}
            src={user.avatar_url}
            borderRadius={'36px'}
          ></AvatarButton>
          <H2 marginTop={'16px'}>{user.name}</H2>
          <input
            ref={inputFileRef}
            style={{ display: 'none' }}
            onChange={onChangeImage}
            type="file"
            accept="image/*"
          ></input>
          <SubmitButton onClick={() => navigate('/home')} marginTop={'62px'}>
            Avançar
          </SubmitButton>
        </Flex>
      </Flex>
    </Flex>
  )
}
