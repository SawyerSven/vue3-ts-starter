/**
 * 服务的环境类型
 * * dev: 开发环境
 * * test: 测试环境
 * * prod: 生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod'

/* 服务的环境配置 */
interface ServiceEnvConfig {
  /* 请求地址 */
  url: string
  /* 匹配路径的正则字符串,用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
  urlPattern: '/api'
  /** 另一个后端请求地址(有多个不同的后端服务时) */
  //  secondUrl: string;
  /** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
  //  secondUrlPattern: '/second-url-pattern';
}

interface ImportMetaEnv {
  /* 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /* 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /** 后端服务的环境类型 */
  readonly VITE_SERVICE_ENV?: ServiceEnvType;
  /* 开启请求代理 */
  readonly VITE_HTTP_PROXY?: 'Y' | "N"
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}