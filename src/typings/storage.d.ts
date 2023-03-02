declare namespace StorageInterface {
  /* sessiontorage的存储数据的类型 */
  interface Session {
    demoKey: string;
  }

  /* localStorage的存储数据的类型 */
  interface Local {
    /* 用户token */
    token: string
    /* 用户刷新token */
    refreshToken: string
    /* 用户信息 */
    userInfo: string
  }
}