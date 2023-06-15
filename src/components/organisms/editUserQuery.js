import { useDispatch, useSelector } from 'react-redux'
import { putUser } from 'api'
import { selectUser, setUser } from 'storage'
import { useMutation } from '@tanstack/react-query'
import { Alert, EditUserForm } from 'components/molecules'
import { useState } from 'react'

export const EditUserQuery = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: (data) => putUser(data, user?.token),
    onSuccess: (data) => {
      dispatch(setUser(data))
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
      <EditUserForm mutation={mutation}></EditUserForm>
    </>
  )
}
