import store from '@/store/store';

export default class AuthHelper {
  public static logout() {
    store.commit('logout');
  }
  public static isAuthenticated() {
    return store.state.authentication.signedIn;
  }

  public static getToken() {
    return store.state.authentication.token;
  }

  public static storeToken(token: string) {
    store.commit('login');
  }
}
