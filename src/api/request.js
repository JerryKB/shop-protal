import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.response.use(success => {
    // if (success.status && success.status === 200) {
    //     if (success.data.code === 500 ||
    //         success.data.code === 401 ||
    //         success.data.code === 403) {
    //         Message.error({message: success.data.message})
    //         return
    //     }
    //     if(success.data.message) {
    //         Message.success({message: success.data.message})
    //     }
    // }
    return success.data;
}, error => {
    // if(error.response.code === 504 || error.response.code === 404) {
    //     Message.error({message: '服务器被吃了/(ㄒoㄒ)/~~'})
    // }else if (error.response.code === 403) {
    //     Message.error({message: '权限不足，请联系管理员！'})
    // }else if (error.response.code === 401) {
    //     Message.error({message: '尚未登录，请登录！'})
    //     router.replace('/')
    // }else {
    //     if(error.response.data.message) {
    //         Message.error({message: error.response.data.message})
    //     }else {
    //         Message.error({message: '未知错误！'})
    //     }
    // }
    return
})
axios.interceptors.request.use(config => {
    // 如果存在 token，请求携带这个 token( 登录的时候 把 token 存入了 sessionStorage ）
    if (window.sessionStorage.getItem("tokenStr")) {
        // token 的key : Authorization ; value: tokenStr
        config.headers['Authorization'] = window.sessionStorage.getItem('tokenStr')
    }
    return config;
},error => {
    console.log(error)
})
let baseUrl='shop'
export const postRequest = (url,params) => {
    return axios({
        method: 'post',
        url: `${baseUrl}${url}`,
        data: params
    })
}
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${baseUrl}${url}`,
        data: params
    })
}

export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${baseUrl}${url}`,
        data: params
    })
}

export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${baseUrl}${url}`,
        data: params
    })
}
