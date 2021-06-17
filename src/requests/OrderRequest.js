import Api from '@/api';
import BaseRequest from './BaseRequest';

export default class OrderRequest extends BaseRequest {
    constructor() {
        super('/order');
    }

    createOrderObservation(data) {
        return Api.post(`${this.prefix}/observation`, data)
    }

    paymentStatusUpdate(id, status) {
        return Api.put(`${this.prefix}/payment-status/${id}`, { status: status })
    }
}