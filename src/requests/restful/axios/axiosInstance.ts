import axios, { AxiosError } from 'axios'
import type { AxiosInstance } from 'axios'
import { useLoading } from '@/hooks/common'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://locahost:8081',
  timeout: 10000,
  headers: {
    // ... custom headers
  }
})
const { loading, startLoading, endLoading } = useLoading()

instance.interceptors.request.use(function (config) {
  startLoading()
  // do something before request
  return config
}, function (error) {
  // do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数
  // 对相应数据做点什么
  endLoading()
  return response.data
}, function (error: AxiosError) {
  endLoading()
  // 超出2xx 范围的状态码都会触发该函数
  const message = error.message
  console.warn(`requestError:${error.request.responseURL}:${message}`, error)
  // 对响应错误做点什么
  return Promise.reject(error)
})


export default instance