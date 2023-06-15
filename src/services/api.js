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
    throw new Error('Usuário já existe')
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
