import BaseRequest from './BaseRequest';

export default class UserRequest extends BaseRequest {
    constructor() {
        super('/user');
    }
}
