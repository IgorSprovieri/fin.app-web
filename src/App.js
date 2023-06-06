import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'

const App = () => {
  return <ChakraProvider theme={theme}></ChakraProvider>
}

export default App
