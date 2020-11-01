import Api from '@/api';

export default class AuthRequest {

    static prefix = '/auth';

    public static login(payload: object) {
        return Api.post(`${AuthRequest.prefix}/login`, payload);
    }

    public static logout() {
        return Api.post(`${AuthRequest.prefix}/logout`);
    }

    public static refresh() {
        return Api.post(`${AuthRequest.prefix}/refresh`);
    }
}
