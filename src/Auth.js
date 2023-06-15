import { Route, Routes } from 'react-router-dom'
import { AvatarScreen, HomeScreen, LoginScreen, RegisterScreen } from 'screens'
import { useMutation } from '@tanstack/react-query'
import { getUser, selectUser } from './services'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const Auth = () => {
  const user = useSelector(selectUser)
  const [auth, setAuth] = useState(false)

  const mutation = useMutation({
    mutationFn: getUser,
    onSuccess: () => {
      setAuth(true)
    },
    onError: () => {
      setAuth(false)
    }
  })

  useEffect(() => {
    mutation.mutate(user.token)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
      <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
      <Route
        path="/register"
        element={<RegisterScreen></RegisterScreen>}
      ></Route>
      <Route
        path="/home"
        element={auth ? <HomeScreen></HomeScreen> : <LoginScreen></LoginScreen>}
      ></Route>
      <Route
        path="/avatar"
        element={
          auth ? <AvatarScreen></AvatarScreen> : <LoginScreen></LoginScreen>
        }
      ></Route>
    </Routes>
  )
}
