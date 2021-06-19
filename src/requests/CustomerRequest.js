import BaseRequest from './BaseRequest';

export default class CustomerRequest extends BaseRequest{
    constructor(){
        super('/customer');
    }

    getByCpf(cpf){
        return this.api.get(`${this.prefix}/cpf/${cpf}`);
    }

    getByPhone(phone){
        return this.api.get(`${this.prefix}/phone/${phone}`);
    }
}
