import { useMutation } from '@tanstack/react-query'
import { Alert, RegisterForm } from 'components/molecules'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUser } from 'api'
import { setUser } from 'storage'

export const RegisterQuery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      dispatch(setUser(data))
      navigate('/avatar')
    },
    onError: (error) => {
      setOpenAlert(true)
      setErrorMessage(error.message)
      setTimeout(() => {
        setOpenAlert(false)
      }, 500)
    }
  })

  return (
    <>
      <Alert message={errorMessage} title={'Erro'} setOpen={openAlert}></Alert>
      <RegisterForm mutation={mutation}></RegisterForm>
    </>
  )
}
