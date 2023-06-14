import axios from 'axios'

const unauthInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const postUser = async (data) => {
  try {
    const result = await unauthInstance.post('/user', { ...data })
    return result.data
  } catch (error) {
    throw new Error('Usuário já existe')
  }
}
