import store from '@/store/store';

export default class UserHelper {
  static storeLoggedUser(payload) {
    store.commit('loggedUser', payload);
  }
}
