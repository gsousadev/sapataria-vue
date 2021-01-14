import Api from '@/api';
import BaseRequest from './BaseRequest';

export default class ServiceItemRequest extends BaseRequest {
    constructor() {
        super('/service-item');
    }
                                       
    updateStatus(id: number, status: string) {
        return Api.put(`${this.prefix}/status/${id}`, { status: status })
    }
}
