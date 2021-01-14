import Api from '@/api';
import BaseRequest from './BaseRequest';

export default class AuthRequest extends BaseRequest {

    constructor() {
        super('/auth');
    }

    public login(payload: object) {
        return Api.post(`${this.prefix}/login`, payload);
    }

    public logout() {
        return Api.post(`${this.prefix}/logout`);
    }

    public refresh() {
        return Api.post(`${this.prefix}/refresh`);
    }
}
