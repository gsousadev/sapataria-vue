import Api from '@/api';
import BaseRequest from './BaseRequest';

export default class AuthRequest extends BaseRequest {

    constructor() {
        super('/auth');
    }

    login(payload) {
        return this.api.post(`${this.prefix}/login`, payload);
    }

    logout() {
        return this.api.post(`${this.prefix}/logout`);
    }

    refresh() {
        return Api.post(`${this.prefix}/refresh`);
    }
}
