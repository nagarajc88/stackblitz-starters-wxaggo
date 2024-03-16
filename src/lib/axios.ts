import Axios from 'axios'
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
const axios = Axios.create({
    baseURL: SERVER_ENDPOINT,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true,
    withXSRFToken: true
});
axios.interceptors.request.use(async (config:any) => {
    if(config.url?.includes("auth")) {
        return config
    }
    const res = await fetch(`${SERVER_ENDPOINT}/api/auth/token`)
    const resData = await res.json()
    const token = resData?.token
    config.headers['Authorization'] = "Bearer " + token
    return config
},
(error:any) => { return Promise.reject(error)});
export default axios