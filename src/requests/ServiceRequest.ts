import BaseRequest from './BaseRequest';

export default class ServiceRequest extends BaseRequest {
    constructor(){
        super('/service');
    }
}
