import { useMutation } from '@tanstack/react-query'
import { PopUp, RegisterForm } from 'components/molecules'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUser, setUser } from 'services'

export const RegisterQuery = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openPopUp, setOpenPopUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      dispatch(setUser(data))
      navigate('/avatar')
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
      <RegisterForm mutation={mutation}></RegisterForm>
    </>
  )
}
