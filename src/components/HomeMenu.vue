<template>
      <div class="row py-3 justify-content-center">
          <IconButton url="/novo-pedido" bg="red" color="white" iconClass="list" buttonText="Novo Pedido"/>
          <IconButton url="/pedidos" bg="red" color="white" iconClass="table" buttonText="Pedidos"/>
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
