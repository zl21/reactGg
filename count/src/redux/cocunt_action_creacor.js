/* 
  为count组件创建action对象
*/
// increment 动作的action对象
export const createIncrementAction = value => ({ type: 'increment', data: value });

// decrement 动作的action对象
export const createDecrementAction = value => ({ type: 'decrement', data: value });
