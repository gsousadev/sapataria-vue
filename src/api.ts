import axios from 'axios';
import AuthHelper from '@/helpers/authHelper';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use(

    (config) => {
        config.headers['Authorization'] = 'Bearer ' + AuthHelper.getToken();
        if (config.method == 'post' || config.method == 'delete' || config.method == 'put') {
            config.headers['Content-Type'] = 'application/json;charset=utf-8';
        }
        return config;
    },
    error => Promise.reject(error)
);


api.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response.status == 401) {
            
            AuthHelper.logout();
        }
        return Promise.reject(error.response);
    }
);


export default api;