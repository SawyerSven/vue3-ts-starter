// import type { AxiosRequestConfig } from 'axios'
import axios from './axiosInstance'

// // const request = <ResponseType = unknown>(url: string, options?: AxiosRequestConfig<unknown>): Promise<ResponseType> => {
// //   return new Promise((resolve, reject) => {
// //     AxiosInstance({
// //       url,
// //       ...options
// //     }).then((res) => {
// //       resolve(res?.data?.data)
// //     })
// //       .catch(err => {
// //         reject(err)
// //       })
// //   })
// // }

// const request = <RT = unknown>(url: string, options?: AxiosRequestConfig<unknown>): Promise<RT> => {
  
// }

// export default request

export default axios