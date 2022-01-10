/**
 * axios 二次封装
 */
import axios from "axios";
import config from './../config'
import router from "../router";

import { ElMessage } from "element-plus";

const TOKEN_TIMEOUT = "登录时效过期, 请重新登录";
const NETWORK_TIME = "网络异常, 请稍后重试"

// 创建axios实例对象，添加全局变量
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
    const headers = req.headers;
    if (!headers.Authorization) {
        headers.Authorization = "uuid-Authorization";
    }
    return req;
})

// 响应拦截
service.interceptors.response.use((resp) => {
    const { code, data, message } = resp.data;
    if (code == 2000) {
        return data;
    }
    else if (data == null || code == null) {
        console.error("请求未知异常，数据null。访问url[" + url + "]");
        return data;
    }
    // 未登录
    else if (code == 1000) {
        console.warn("用户未登录，不能访问该页面。跳转登录页。");
        ElMessage.error(TOKEN_TIMEOUT);
        setTimeout(() => {
            router.push('/login')
        }, 20000)
        return Promise.reject(TOKEN_TIMEOUT);
    }
    // 没权限
    else if (code == 2000) {
        console.warn("用户没有权限，不能访问该页面。跳转主页。");
        ElMessage.error(message);
    }
    // 兜底
    else {
        ElMessage.error(message || NETWORK_TIME);
        return Promise.reject(message || NETWORK_TIME);
    }
}, (error) => {
    if (error.response.status) {

        ElMessage.error(NETWORK_TIME);
        return Promise.reject(TOKEN_TIMEOUT);


    }
})

function request (options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() == 'get') {
        options.params = options.data;
    }
    console.log(options);
    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data: {
                deviceNo: "",
                deviceType: "pc",
                deviceName: "",
                deviceOsVersion: "",
                version: "1.0.0",
                versionCode: 1000000,
                channel: "",
                resolution: "",
                adCode: "",
                network: "",
                data: data
            },
            method: item,
            ...options
        })
    }
})

export default request;