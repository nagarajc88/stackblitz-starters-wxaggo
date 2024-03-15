import Axios from 'axios'
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "http://localhost:3000";
const axios = Axios.create({
    baseURL: SERVER_ENDPOINT,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios