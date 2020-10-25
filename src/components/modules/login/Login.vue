<template>
  <section class="login">
    <div class="row justify-content-center">
      <div class="col-xs-12">
        <form class="login" @submit.prevent="login">
          <div class="form-group">
            <input
              name="email"
              type="text"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="form-group">
            <input
              name="password"
              type="password"
              placeholder="Senha"
              v-model="password"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import AuthRequests from "@/requests/auth";
import ModalHelper from "@/helpers/modalHelper";
import AuthHelper from "@/helpers/authHelper";

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
          AuthHelper.storeToken(success.data.data.access_token);
          router.push({name:'home'});
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>