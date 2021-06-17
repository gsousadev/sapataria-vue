import Api from '@/api';
import BaseRequest from './BaseRequest';

export default class ServiceItemRequest extends BaseRequest {
    constructor() {
        super('/service-item');
    }
                                       
    progressStatusUpdate(id, status) {
        return Api.put(`${this.prefix}/progress-status/${id}`, { status: status })
    }
}
