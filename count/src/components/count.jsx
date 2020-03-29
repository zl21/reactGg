import React, { Component } from 'react'
// import store from '../redux/store';
/* import {
  createIncrementAction,
  createDecrementAction
} from '../redux/cocunt_action_creacor'
 */
export default class Count extends Component {
  state = { count: 0 }

  // increment:
  increment = () => {
    // 获取用户选择的数字
    let { value } = this.refs.checkNumber;
    // Update state
    // let { count } = this.state;
    // this.setState({ count: count + value * 1 });
    // 通知redux该做increment了
    // store.dispatch({ type: 'increment', data: value * 1 });
    // this.props.store.dispatch(createIncrementAction(value * 1));
    this.props.increase(value * 1);
  }
  // decrement:
  decrement = () => {
    let { value } = this.refs.checkNumber;
    this.props.decrease(value * 1);
  }
  // incrementIfOdd:
  incrementIfOdd = () => {
    let { value } = this.refs.checkNumber;
    let count = this.props.number;
    if(count % 2 === 1){
      this.props.increase(value * 1);
    }
  }
  // incrementAsync:
  incrementAsync = () => {
    let { value } = this.refs.checkNumber;
    setTimeout(() => {
      this.props.increase(value * 1);
    }, 1000)
  }
  render() {
    console.log("UI组件被顺便render了没？", this.props);
    return (
      <div>
        {/* <h2>result：{this.state.count}</h2> */}
        {/* <h2>result：{this.props.store.getState()}</h2> */}
        <h2>result：{this.props.number}</h2>
        <select ref="checkNumber">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
