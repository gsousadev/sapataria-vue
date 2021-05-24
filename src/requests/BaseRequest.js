import Api from '@/api';

export default class BaseRequest {

    constructor(prefix) {
        this.prefix = prefix;
        this.api = Api;
    }

    create(data) {
        return this.api.post(this.prefix, data)
    }

    index(filters = "") {

        if (filters) {
            filters = "?" + filters;
        }

        return this.api.get(`${this.prefix}${filters}`)
    }

    get(id) {
        return this.api.get(`${this.prefix}/${id}`)
    }

    update(id, data) {
        return this.api.put(`${this.prefix}/${id}`, data)
    }

    delete(id) {
        return this.api.delete(`${this.prefix}/${id}`)
    }
}
