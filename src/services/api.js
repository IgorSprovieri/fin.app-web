import axios from 'axios'

const unauthInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const postUser = (data) => {
  unauthInstance.post('/user', { ...data })
}
