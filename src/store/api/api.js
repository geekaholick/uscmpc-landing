import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3900',
  withCredentials: false,
})

export default api
