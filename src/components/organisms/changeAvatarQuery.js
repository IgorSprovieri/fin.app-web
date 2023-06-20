import { useDispatch, useSelector } from 'react-redux'
import { putUserAvatar } from 'api'
import { selectUser, setAvatarUrl } from 'storage'
import { useMutation } from '@tanstack/react-query'
import { ChangeAvatar } from 'components/molecules'
import { useState } from 'react'

export const ChangeAvatarQuery = ({ alertError }) => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const mutation = useMutation({
    mutationFn: (data) => putUserAvatar(data, user?.token),
    onSuccess: (data) => {
      setLoading(false)
      dispatch(setAvatarUrl(data?.avatar_url))
    },
    onError: (error) => {
      setLoading(false)
      alertError(error?.message)
    }
  })

  return (
    <ChangeAvatar
      mutation={mutation}
      loading={loading}
      setLoading={setLoading}
    ></ChangeAvatar>
  )
}
