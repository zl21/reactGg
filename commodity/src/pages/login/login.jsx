import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'
import logo from './imgs/logo.png'

const {Item} = Form

export default class Login extends Component {
  // 表单提交的回调
  onFinish = values => {
      console.log('Received values of form: ', values);
  };
  render() {
    return (
      <div className="login">
        <div className="login-header">
          <img src={logo} alt=""/>
          <h1>Commodity Management System</h1>
        </div>
        <div className="login-content">
					<h1>W e l c o m e </h1>
          {/* 这儿放置antd组件。因为要自己用原生去实现一个实时的校验+交互效果 还是挺麻烦的。 */}
          <Form
            className="login-form"
            onFinish={this.onFinish}
          >
            <Item name="username">
              <Input prefix={<UserOutlined className="site-form-it em-icon" />} placeholder="Username" />
            </Item>
            <Item name="password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Item>
            <Item>
              {/* 
              primary:主按钮颜色
              submit:指定按钮的作用是提交表单 
              */}
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    )
  }
}
