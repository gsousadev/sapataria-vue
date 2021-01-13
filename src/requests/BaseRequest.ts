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

    index(filters: any) {
        filters = RequestHelper.buildQueryFilter(filters);
        return Api.get(`${this.prefix}/index?${filters}`)
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
