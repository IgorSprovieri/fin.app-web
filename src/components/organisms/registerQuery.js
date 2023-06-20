import { useMutation } from '@tanstack/react-query'
import { RegisterForm } from 'components/molecules'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUser } from 'api'
import { setUser } from 'storage'

export const RegisterQuery = ({ alertError }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      dispatch(setUser(data))
      navigate('/avatar')
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  return <RegisterForm mutation={mutation}></RegisterForm>
}
