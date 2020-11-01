import router from '@/router/router';
import store from '@/store/store';

export default class AuthHelper {
  public static isAuthenticated() {
    if (!store.state.authentication.signedIn) {
      if (localStorage.getItem("token") !== null) {
        return true;
      }
    }

    return store.state.authentication.signedIn;
  }

  public static getToken() {
    return store.state.authentication.token;
  }

  public static storeToken(token: string) {
    store.commit('login', token);
  }

  public static logout() {
    store.commit('logout');
  }

  public static logoutWithRedirectToLogin() {
    AuthHelper.logout();
    router.push('/login');
  }
}
