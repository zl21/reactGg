/* 
  容器组件，作为UI组件和redux的中介
*/
import Count from '../components/count'
// 从react-redux库中引入connect方法
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction } from '../redux/cocunt_action_creacor'

function mapStateToProps(state) {
  return { number: state }
}
function mapDispatchToProps(dispatch) {
  return{
    increase:(value)=>{dispatch(createIncrementAction(value))},
    decrease:(value=>{dispatch(createDecrementAction(value))})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
