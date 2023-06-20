import { useMutation } from '@tanstack/react-query'
import { LoginForm } from 'components/molecules'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from 'api'
import { setUser } from 'storage'

export const LoginQuery = ({ alertError }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setUser(data))
      navigate('/home')
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  return <LoginForm mutation={mutation}></LoginForm>
}
