import Api from '@/api';

export default class BaseRequest {

 

    constructor(prefix) {
        this.prefix = prefix;
    }

    create(data) {
        return Api.post(this.prefix, data)
    }

    index(filters = "") {

        if (filters) {
            filters = "?" + filters;
        }

        return Api.get(`${this.prefix}${filters}`)
    }

    get(id) {
        return Api.get(`${this.prefix}/${id}`)
    }

    update(id, data) {
        return Api.put(`${this.prefix}/${id}`, data)
    }

    delete(id) {
        return Api.delete(`${this.prefix}/${id}`)
    }
}
