import React, { Component } from 'react'
import './css/login.less'
import logo from './imgs/logo.png'

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt=""/>
          <h1>Commodity Management System</h1>
        </div>
        <div className="login-content">
					<h1>用户登录</h1>
          这儿放置antd组件。因为要自己用原生去实现一个实时的校验+交互效果 还是挺麻烦的。
        </div>
      </div>
    )
  }
}
