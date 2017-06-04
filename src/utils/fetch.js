import axios from 'axios';
import { Message } from 'element-ui';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.HOST, // api的base_url
  timeout: 5000                  // 请求超时时间
});

// request拦截器

service.interceptors.request.use(config => {
  // // Do something before request is sent
  //....

  return config
}, error=> {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器

service.interceptors.response.use(
  response => response
  //...

,
    error => {
      console.log('err' + error);// for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    }
);

export default service;


