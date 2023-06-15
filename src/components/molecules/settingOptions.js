import { Button, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from 'storage'

export const SettingOptions = () => {
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
      <Button
        onClick={() => navigate('/editAccount')}
        width={'100%'}
        borderRadius={'15px'}
        marginTop={'8px'}
      >
        Editar Conta
      </Button>
      <Button width={'100%'} borderRadius={'15px'} marginTop={'8px'}>
        Alterar Senha
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
