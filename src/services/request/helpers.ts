import { localStg } from "@/utils/storage/local";
import type { AxiosRequestConfig } from "axios";
/**
 * 刷新token
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
  // TODO #1 重设token的store
  const refreshToken = localStg.get('refreshToken') || '';
  // TODO #2 刷新token的请求
  // eg. const {data} = await fetchUpdateToken(refreshToken)
  const data: any = await refreshToken;
  if (data) {
    localStg.set('token', data.token);
    localStg.set('refreshToken', data.refreshToken)

    const config = { ...axiosConfig }

    if (config.headers) {
      config.headers.Authorization = data.token
    }
    return config
  }
  // TODO #3 调用TODO #1
  return null
}
