<template>
  <div
    id="menu"
    class="d-flex flex-row justify-content-center no-print "
    v-if="authenticationStatus == true"
  >
    <strong class="p-2 mx-2">
      <router-link to="/">Home</router-link>
    </strong>
    <strong class="p-2 mx-2">
      <router-link to="/pedidos/cadastrar">Novo Pedido</router-link>
    </strong>
    <strong class="p-2 mx-2">
      <router-link to="/pedidos/listar">Listar Pedidos</router-link>
    </strong>
    <strong class="p-2 mx-2">
      <router-link to="/clientes/cadastrar">Cadastrar Cliente</router-link>
    </strong>
    <strong class="p-2 mx-2">
      <router-link to="/clientes/listar">Listar Clientes</router-link>
    </strong>
    <strong class="p-2 mx-2">
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
  border-bottom: 1px solid #ddd;
  position: fixed;
  width: 100%;
  top:0;
  background: white;
  z-index: 999;
}
</style>