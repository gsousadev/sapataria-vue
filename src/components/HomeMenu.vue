<template>
  <div class="row py-3 justify-content-center">
    <IconButton url="/clientes/lista" iconClass="list" buttonText="Lista de Clientes" />
    <IconButton url="/pedidos/lista" iconClass="table" buttonText="Lista de Pedidos" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import IconButton from "@/components/IconButton.vue";
@Component({
  components: {
    IconButton
  }
})
export default class HomeMenu extends Vue {}
</script>
