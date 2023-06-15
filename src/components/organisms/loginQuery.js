import { useMutation } from '@tanstack/react-query'
import { PopUp, LoginForm } from 'components/molecules'

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
      <PopUp message={errorMessage} title={'Erro'} setOpen={openPopUp}></PopUp>
      <LoginForm mutation={mutation}></LoginForm>
    </>
  )
}
