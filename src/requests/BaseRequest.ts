import Api from '@/api';
import RequestHelper from '@/helpers/requestHelper';

export default class BaseRequest {

    prefix: string;

    constructor(prefix: string) {
        this.prefix = prefix;
    }

    create(data: any) {
        return Api.post(this.prefix, data)
    }

    index(filters: any = "") {

        if (filters) {
            filters = "?" + filters;
        }

        return Api.get(`${this.prefix}${filters}`)
    }

    get(id: number) {
        return Api.get(`${this.prefix}/${id}`)
    }

    update(id: number, data: any) {
        return Api.post(`${this.prefix}/update/${id}`, data)
    }

    delete(id: number) {
        return Api.delete(`${this.prefix}/delete/${id}`)
    }
}
