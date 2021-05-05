import BaseRequest from './BaseRequest';

export default class ProductRequest extends BaseRequest {
    constructor(){
        super('/product');
    }
}
