import store from '@/store/store';

export default class UserHelper {
  public static storeLoggedUser(payload: object) {
    store.commit('loggedUser', payload);
  }
}
