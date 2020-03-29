/* 
  容器组件，作为UI组件和redux的中介
*/
import Count from '../components/count'
// 从react-redux库中引入connect方法
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction } from '../redux/cocunt_action_creacor'


export default connect(
  state =>({ number: state }),
  {
    increase:createIncrementAction,
    decrease:createDecrementAction
  })(Count);
