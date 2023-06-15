import { useDispatch, useSelector } from 'react-redux'
import { putUserAvatar, selectUser, setAvatarUrl } from 'services'
import { useMutation } from '@tanstack/react-query'
import { ChangeAvatar, Alert } from 'components/molecules'
import { useState } from 'react'

export const ChangeAvatarQuery = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [openPopUp, setOpenPopUp] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const mutation = useMutation({
    mutationFn: (data) => putUserAvatar(data, user?.token),
    onSuccess: (data) => {
      dispatch(setAvatarUrl(data?.avatar_url))
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
      <ChangeAvatar mutation={mutation}></ChangeAvatar>
    </>
  )
}
