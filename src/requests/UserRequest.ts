import Api from '@/api';


export default class UserRequest {

    static prefix = '/user';

    public static getLoggedUserInfo() {
        return Api.get(`${UserRequest.prefix}/logged-info`);
    }
}
