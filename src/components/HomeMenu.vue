<template>
      <div class="row py-3 justify-content-center">
          <IconButton url="/clientes/cadastro" iconClass="list" buttonText="Cadastrar Cliente"/>
          <IconButton url="/pedidos/cadastro" iconClass="table" buttonText="Cadastrar Pedido"/>
      </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import IconButton from '@/components/IconButton.vue'; // @ is an alias to /src

@Component({
  components: {
    IconButton,
  },
})
export default class HomeMenu extends Vue {}
</script>
