import axios from 'axios'
import store from "../store/index.js";
let cach = require('../assets/js/LocationStore.js')
export default function request(config){
    const network = axios.create({
        timeout: 5000,
        baseURL:"http://192.168.5.208:8000/Jia/",
        headers:{
            "Authorization":"ak7 "+cach.GetSessionStore("token")+" auth"
        }
    })
    network.interceptors.request.use(function (config) {
        store.commit("showLoading")
        console.log(config.baseURL)
        return config;
    },

        function (error) {
        console.log(config.baseURL)
        // 对请求错误做些什么
            store.commit("hideLoading")
        return Promise.reject(error);
    });

    // 添加响应拦截器
    network.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        store.commit("hideLoading")
        return response;
    }, function (error) {
        // 对响应错误做点什么
        store.commit("hideLoading")
        return Promise.reject(error);
    });

    return network(config)
}
