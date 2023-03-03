import type { AxiosRequestConfig } from "axios"
import CustomAxiosInstance from "./instance"
import type { RequestParam } from './request'
import { getRequestResponse } from './request'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useBoolean, useLoading } from "@/hooks/common"

interface RequestResultHook<T = any> {
  data: Ref<T | null>
  error: Ref<Service.RequestError | null>
  loading: Ref<boolean>
  network: Ref<boolean>
}

export function createHookRequest(axiosConfig: AxiosRequestConfig, backendConfig: Service.BackendResultConfig) {
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig);

  function useRequest<T>(param: RequestParam): RequestResultHook<T> {
    const { loading, startLoading, endLoading } = useLoading()
    const { bool: network, setBool: setNetwork } = useBoolean(window.navigator.onLine)

    startLoading()

    const data = ref<T | null>(null) as Ref<T | null>
    const error = ref<Service.RequestError | null>(null)

    function handleRequestResult(response: any) {
      const res = response as Service.RequestResult
      data.value = res.data
      error.value = res.error
      endLoading()

      setNetwork(window.navigator.onLine)
    }

    const { url } = param
    const method = param.method || 'get';
    const { instance } = customInstance

    getRequestResponse({ instance, method, url, data: param.data, config: param.axiosConfig }).then(handleRequestResult)

    return {
      data,
      error,
      loading,
      network
    }
  }


  /**
   * get请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function get<T>(url: string, config?: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'get', axiosConfig: config });
  }

  /**
   * post请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'post', data, axiosConfig: config });
  }
  /**
   * put请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'put', data, axiosConfig: config });
  }

  /**
   * delete请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function handleDelete<T>(url: string, config: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'delete', axiosConfig: config });
  }

  return {
    get,
    post,
    put,
    delete: handleDelete
  };
}