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

  /* 
    pwdValidator密码校验器函数：
      概述：是一个回调函数，用于在用户输入密码的时候实时监测，用户每输入一个字符都会拿过来（即value）
      报错：不输入直接点登录时会报values是undefined。什么都不输入，不会触发onFinish方法（该方法要校验通过之后才ok）。
      解决：设置形参默认值
  */
  pwdValidator = (_,values='')=>{
    // 定义在回调函数中，避免实时验证失败的信息一直push到数组中
    let errmsg = [];
    if(!values.trim()) errmsg.push('Please input your Password !');
    if(values.length < 4) errmsg.push('Must be greater than or equal to 4 digits !');
    if(values.length > 12) errmsg.push('Must be less than or equal to 12 digits !');
    // 正则的test()验证value时候满足某个正则
    if(!(/^\w+$/).test(values)) errmsg.push('Only contain English、Number or _ !');
    if(errmsg.length > 0) return Promise.reject(errmsg);
    else return Promise.resolve();
  }
  render() {
    /*
			用户名/密码的的合法性要求
				1). 必须输入
				2). 必须大于等于4位
				3). 必须小于等于12位
				4). 必须是英文、数字或下划线组成
		*/
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
            <Item 
              name="username"
              rules={[
                {require:true,message:'Please input your Username!'},
                {min:4,message:'Must be greater than or equal to 4 digits!'},
                {max:12,message:'Must be less than or equal to 12 digits!'},
                {pattern:/^\w+$/,message:'Only contain English、Number or _!'}
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-it em-icon" />} placeholder="Username" />
            </Item>
            <Item 
              name="password"
              rules={[
                {validator:this.pwdValidator}
              ]}
            >
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
