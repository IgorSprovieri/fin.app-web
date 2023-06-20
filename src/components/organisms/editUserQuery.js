import { useDispatch, useSelector } from 'react-redux'
import { putUser } from 'api'
import { selectUser, setUser } from 'storage'
import { useMutation } from '@tanstack/react-query'
import { EditUserForm } from 'components/molecules'

export const EditUserQuery = ({ alertError }) => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: (data) => putUser(data, user?.token),
    onSuccess: (data) => {
      dispatch(setUser(data))
    },
    onError: (error) => {
      alertError(error?.message)
    }
  })

  return <EditUserForm mutation={mutation}></EditUserForm>
}
