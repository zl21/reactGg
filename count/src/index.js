import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDOM.render(<App store={store}/>,document.getElementById('root'));
// store上提供了一个用于监测state的API
store.subscribe(()=>{
  ReactDOM.render(<App store={store}/>,document.getElementById('root'));
})
