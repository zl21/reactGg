import React, { Component } from 'react'
// import {Button} from 'antd'
import {Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* this is App component. */}
        {/* <Button type='primary'>test antd</Button> */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
          <Redirect to='/login'></Redirect>
        </Switch>
      </div>
    )
  }
}
 