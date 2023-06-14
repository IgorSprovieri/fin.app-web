import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { AvatarScreen, HomeScreen, LoginScreen, RegisterScreen } from 'screens'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './services'
import { Provider } from 'react-redux'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
              <Route
                path="/login"
                element={<LoginScreen></LoginScreen>}
              ></Route>
              <Route
                path="/register"
                element={<RegisterScreen></RegisterScreen>}
              ></Route>
              <Route path="/home" element={<HomeScreen></HomeScreen>}></Route>
              <Route
                path="/avatar"
                element={<AvatarScreen></AvatarScreen>}
              ></Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
