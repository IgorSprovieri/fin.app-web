import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const postUser = async (data) => {
  try {
    const result = await instance.post('/user', { ...data })
    return result.data
  } catch (error) {
    throw new Error('Usuário já existe')
  }
}

export const getUser = async (token) => {
  try {
    const result = await instance.get('/user', {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return result.data
  } catch (error) {
    throw new Error('Usuário não autenticado')
  }
}

export const putUser = async (data, token) => {
  try {
    const result = await instance.put(
      '/user',
      { ...data },
      {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    )

    return result.data
  } catch (error) {
    if (data?.email !== '') {
      throw new Error('E-mail já está em uso')
    } else {
      throw new Error('Não foi possível alterar o usuário')
    }
  }
}

export const putUserAvatar = async (data, token) => {
  try {
    const result = await instance.put(
      '/user/avatar',
      { ...data },
      {
        headers: {
          Authorization: `bearer ${token}`
        }
      }
    )

    return result.data
  } catch (error) {
    throw new Error('Não foi possível subir esse arquivo')
  }
}

export const login = async (data) => {
  try {
    const result = await instance.post('/login', { ...data })
    return result.data
  } catch (error) {
    throw new Error('Usuário ou Senha Inválidos')
  }
}

export const forgotPassword = async (data) => {
  try {
    const result = await instance.post('/forgot-password', { ...data })
    return result.data
  } catch (error) {
    throw new Error('Não foi possível enviar o email')
  }
}

export const getCategories = async (token) => {
  try {
    const result = await instance.get('/categories', {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return result.data
  } catch (error) {
    throw new Error(error?.message || 'Erro Inesperado')
  }
}

export const getColors = async () => {
  try {
    const result = await instance.get('/colors')
    return result.data
  } catch (error) {
    throw new Error('Erro Inesperado')
  }
}

export const getIcons = async () => {
  try {
    const result = await instance.get('/icons')
    return result.data
  } catch (error) {
    throw new Error('Erro Inesperado')
  }
}

export const postCategory = async (data) => {
  try {
    const result = await instance.post(
      '/category',
      { ...data },
      {
        headers: {
          Authorization: `bearer ${data?.token}`
        }
      }
    )
    return result.data
  } catch (error) {
    throw new Error(error?.message || 'Erro Inesperado')
  }
}

export const putCategory = async (data) => {
  try {
    const result = await instance.put(
      `/category/${data?.id}`,
      { ...data },
      {
        headers: {
          Authorization: `bearer ${data?.token}`
        }
      }
    )
    return result.data
  } catch (error) {
    throw new Error(error?.message || 'Erro Inesperado')
  }
}
