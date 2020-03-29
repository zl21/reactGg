/* 
  count_reducer小工，用于初始化及加工action
*/
export default function (previousState = 0, action) {
  const { type, data } = action;
  let presentState;
  switch (type) {
    case 'increment':
      presentState = previousState + data;
      // break;
      return presentState;
    case 'decrement':
      presentState = previousState - data;
      return presentState;
    // 若为初始化状态
    default:
      return previousState;
  }
}