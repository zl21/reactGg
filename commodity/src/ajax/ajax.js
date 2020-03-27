import axios from 'axios'
import qs from 'querystring'
import { message as msg } from 'antd';

// 配置超时时间
axios.defaults.timeout = 2000;
axios.defaults.baseURL = 'http://localhost:3000'

/* 
  使用axios请求拦截器
  参数:config，里面包含了本次请求所有的配置项（请求地址/方式/参数及参数格式）
*/
axios.interceptors.request.use((config) => {
  // console.log(config);
  // 如果发的是post请求，并且携带的是json格式的参数/数据，就要将数据处理一下
  // 获取请求方式及参数
  const { method, data } = config;
  if (method.toLowerCase() === 'post' && data instanceof Object) {
    config.data = qs.stringify(data);
  }
  return config;
})

/* 
  axios的响应拦截器
*/
axios.interceptors.response.use(
  // 响应成功的回调--状态码2开头
  response => response.data,
  err => {
    // console.log(err);
    let errmsg = '';
    const { message } = err;
    if (message.indexOf('401') !== -1) errmsg = '身份校验失败，请重新登录！';
    else if (message.indexOf('Network Error') !== -1) errmsg = '请检查网络连接！'
    else if (message.indexOf('timeout') !== -1) errmsg = '网络不稳定，连接超时！'
    msg.error(errmsg);
    return new Promise(() => { });
  }
)

export default axios