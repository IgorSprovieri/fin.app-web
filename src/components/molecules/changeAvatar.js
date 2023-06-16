import { Flex } from '@chakra-ui/react'
import { AvatarButton, H2, SubmitButton, WalletTitle } from 'components'
import { useSelector } from 'react-redux'
import { selectUser } from 'storage'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const ChangeAvatar = ({ mutation, loading, setLoading }) => {
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const inputFileRef = useRef()

  const onChangeImage = (event) => {
    setLoading(true)
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
    <Flex flexDir={'column'} align={'center'} w={'310px'}>
      <WalletTitle marginTop={'32px'} mL={'24px'} mR={'28px'}>
        Foto de Perfil
      </WalletTitle>
      <AvatarButton
        marginTop={'32px'}
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
      <SubmitButton
        w={'260px'}
        loading={loading}
        onClick={() => navigate('/home')}
        marginTop={'62px'}
      >
        Avançar
      </SubmitButton>
    </Flex>
  )
}
