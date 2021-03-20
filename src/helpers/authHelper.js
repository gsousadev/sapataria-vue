import router from '@/router/router';
import store from '@/store/store';

export default class AuthHelper {
  static isAuthenticated() {
    if (!store.state.authentication.signedIn) {
      if (localStorage.getItem("token") !== null) {
        return true;
      }
    }

    return store.state.authentication.signedIn;
  }

  static getToken() {
    return store.state.authentication.token;
  }

  static storeToken(token){
    store.commit('login', token);
  }

  static logout() {
    store.commit('logout');
  }

 static logoutWithRedirectToLogin() {
    AuthHelper.logout();
    router.push('/login');
  }
}
