import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from 'styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store, persistor } from 'storage'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Auth } from 'Auth'

const App = () => {
  const queryClient = new QueryClient()
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <Auth></Auth>
            </BrowserRouter>
          </ChakraProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
