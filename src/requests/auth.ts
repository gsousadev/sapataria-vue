import Api from '@/api';

export default class Auth {
    public static login(payload: object) {
        return Api.post('/auth/login', payload);
    }

    public static logout() {
        return Api.post('/auth/logout');
    }
}
