import BaseRequest from './BaseRequest';

export default class CustomerRequest extends BaseRequest{
    constructor(){
        super('/customer');
    }
}
