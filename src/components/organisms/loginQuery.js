import { useMutation } from '@tanstack/react-query'
import { Alert, LoginForm } from 'components/molecules'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, setUser } from 'services'

export const LoginQuery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openPopUp, setOpenPopUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setUser(data))
      navigate('/home')
    },
    onError: (error) => {
      setOpenPopUp(true)
      setErrorMessage(error.message)
      setTimeout(() => {
        setOpenPopUp(false)
      }, 500)
    }
  })

  return (
    <>
      <Alert message={errorMessage} title={'Erro'} setOpen={openPopUp}></Alert>
      <LoginForm mutation={mutation}></LoginForm>
    </>
  )
}
