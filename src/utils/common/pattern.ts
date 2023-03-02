/**
 * 策略模式
 * @param acitons 每一种可能执行的操作
 */
export function execStrategyActions(actions: Common.StrategyAction[]) {
  actions.some(item => {
    const [flag, action] = item
    if (flag) {
      action()
    }
    return flag
  })
}