// 引入创建store对象的工具
import { createStore } from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer);