/* 
  改文件用于汇总管理项目中的所有ajax请求，每一个API接口都匹配一个函数，
  专门用于发送请求，哪里要用就在哪里import引入并调用即可。
*/
import ajax from './ajax'

// 登录请求。参数loginObj是登录对象(含uname和upwd)
export const reqLogin = (loginObj)=> ajax.post('/login',loginObj);