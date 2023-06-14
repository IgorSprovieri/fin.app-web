import { Header } from 'components'
import { useSelector } from 'react-redux'
import { selectUser } from 'services'

export const FinancesHeader = () => {
  const user = useSelector(selectUser)

  return <Header username={user?.name} avatarUrl={user?.avatar_url}></Header>
}
