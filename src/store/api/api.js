import axios from 'axios'

const BaseApi = axios.create({
  baseURL: 'http://localhost:8089',
})

const Api = () => BaseApi

export default Api
