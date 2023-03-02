import { ERROR_MSG_DURATION, NO_ERROR_MSG_CODE } from "@/config/service";

/* 错误消息栈,防止同一错误同事出现 */
const errorMsgStack = new Map<string | number, string>([])

function addErrorMsg(error: Service.RequestError) {
  errorMsgStack.set(error.code, error.msg)
}

function removeErrorMsg(error: Service.RequestError) {
  errorMsgStack.delete(error.code)
}

function hasErrorMsg(error: Service.RequestError): boolean {
  return errorMsgStack.has(error.code)
}


/**
 * 显示错误信息
 * @param Error
 */

export function showErrorMsg(error: Service.RequestError) {
  if (!error.msg || NO_ERROR_MSG_CODE.includes(error.code) || hasErrorMsg(error)) return;

  addErrorMsg(error)

  window.console.warn(error.code, error.msg)

  window.$message?.error({ message: error.msg, duration: ERROR_MSG_DURATION });

  setTimeout(() => {
    removeErrorMsg(error)
  }, ERROR_MSG_DURATION);
}