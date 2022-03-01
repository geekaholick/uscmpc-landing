import axios from 'axios'

const BaseApi = axios.create({
  baseURL: 'http://'+process.env.VUE_APP_HOST+':'+process.env.VUE_APP_DATABASE_PORT,
})

const Api = () => BaseApi

export default Api
