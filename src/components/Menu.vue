<template>
  <div
    id="menu"
    class="d-flex flex-row-reverse"
    v-if="authenticationStatus == true"
  >
    <strong>
      <router-link to="/logout">Sair</router-link>
    </strong>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapGetters(["authenticationStatus"]),
  },
};
</script>

<style lang="scss" scoped>
#menu {
  padding: 10px;
}
</style>