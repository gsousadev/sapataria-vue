import BaseRequest from './BaseRequest';

export default class OrderRequest extends BaseRequest{
    constructor(){
        super('/order');
    }
}
