/* 
  为count组件创建action对象
*/
import { INCREMENT, DECREMENT } from './types'
// increment 动作的action对象
export const createIncrementAction = value => ({ type: INCREMENT, data: value });

// decrement 动作的action对象
export const createDecrementAction = value => ({ type: DECREMENT, data: value });
