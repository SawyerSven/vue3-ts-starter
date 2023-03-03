import { getServiceEnvConfig } from '~/.env-config'
import { createRequest } from './request'

const { url, urlPattern } = getServiceEnvConfig(import.meta.env)

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'Y'

export const request = createRequest({ baseURL: isHttpProxy ? urlPattern : url })

export const mockRequest = createRequest({ baseURL: '/mock' })