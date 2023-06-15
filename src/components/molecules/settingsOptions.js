import { Button, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from 'storage'

export const SettingsOptions = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <Flex display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Button
        onClick={() => navigate('/avatar')}
        width={'100%'}
        borderRadius={'15px'}
        marginTop={'16px'}
      >
        Alterar Foto
      </Button>
      <Button width={'100%'} borderRadius={'15px'} marginTop={'8px'}>
        Alterar Senha
      </Button>
      <Button width={'100%'} borderRadius={'15px'} marginTop={'8px'}>
        Alterar Perfil
      </Button>
      <Button
        onClick={() => {
          dispatch(deleteUser())
          navigate('/')
        }}
        width={'100%'}
        borderRadius={'15px'}
        marginTop={'8px'}
      >
        Sair
      </Button>
    </Flex>
  )
}
