import { useDispatch, useSelector } from 'react-redux'
import { putUserAvatar } from 'api'
import { selectUser, setAvatarUrl } from 'storage'
import { useMutation } from '@tanstack/react-query'
import { ChangeAvatar, Alert } from 'components/molecules'
import { useState } from 'react'

export const ChangeAvatarQuery = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [openAlert, setOpenAlert] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: (data) => putUserAvatar(data, user?.token),
    onSuccess: (data) => {
      dispatch(setAvatarUrl(data?.avatar_url))
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
      <ChangeAvatar mutation={mutation}></ChangeAvatar>
    </>
  )
}
