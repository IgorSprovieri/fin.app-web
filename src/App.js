import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { LoginScreen, RegisterScreen } from 'screens'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen></LoginScreen>}></Route>
          <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
          <Route
            path="/register"
            element={<RegisterScreen></RegisterScreen>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
