<template>
  <section class="login p-5">
    <div class="row justify-content-center">
      <div class="col-xs-12 text-center">
        <form class="login" @submit.prevent="login">
          <div class="form-group">
            <input
              name="email"
              type="text"
              placeholder="Email"
              v-model="email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <input
              name="password"
              type="password"
              placeholder="Senha"
              v-model="password"
              class="form-control"
            />
          </div>
          <div class="form-group ">
            <button type="submit" class="btn btn-primary btn-block form-control">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AuthRequests from "@/requests/AuthRequest";
import ModalHelper from "@/helpers/modalHelper";
import AuthHelper from "@/helpers/authHelper";
import UserHelper from "@/helpers/userHelper";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      const router = this.$router;
      const store = this.$store;
      AuthRequests.login({ email: this.email, password: this.password })
        .then((success) => {
          AuthHelper.storeToken(success.data.access_token);
          UserHelper.storeLoggedUser(success.loggedUserInfo);
          router.push({name:'home'});
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>