import axios from 'axios';
import AuthHelper from '@/helpers/authHelper';

const api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
});

api.interceptors.request.use(
    (config) => {
        if (config.url !== "/auth/login" && config.baseURL !== "https://viacep.com.br") {
            config.headers['Authorization'] = 'Bearer ' + AuthHelper.getToken();
        }

        if (config.method === 'post' || config.method === 'delete' || config.method === 'put') {
            config.headers['Content-Type'] = 'application/json;charset=utf-8';
        }

        return config;
    },
    error => Promise.reject(error)
);


api.interceptors.response.use(
    response => {

        response.header('Access-Control-Allow-Origin','*');

        response.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
        
        response.header('Access-Control-Allow-Headers','Origin,Content-Type,X-Requested-With,Accept,Authorization');

        return response.data;
    },
    error => {
        if (error.response.status === 401) {
            AuthHelper.logout();
            if(error.config.url !== "/auth/login"){
                AuthHelper.logoutWithRedirectToLogin();
            }
        }
        return Promise.reject(error.response);
    }
);


export default api;