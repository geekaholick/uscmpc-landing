import axios from 'axios'

const BaseApi = axios.create({
  baseURL: 'http://localhost:3000',
})

const Api = () => BaseApi

export default Api