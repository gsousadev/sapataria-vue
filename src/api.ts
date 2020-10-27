import axios from 'axios';
import AuthHelper from '@/helpers/authHelper';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use(
    config => {
        config.headers.authorization = 'Bearer ' + AuthHelper.getToken();
        return config;
    },
    error => Promise.reject(error)
);


api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status == 401) {
           AuthHelper.logout();
        }
        return Promise.reject(error);
    }
);


export default api;