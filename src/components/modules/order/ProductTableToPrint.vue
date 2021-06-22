<template>
  <div class="order-item">
          <p><i>Item: #{{ itemNumber }}</i></p>
          <p><i>Código do Produto: {{item.product.id}}</i></p>
          <p><i>Nome: {{item.product.nome}}</i></p> 
          <p><i>Valor Unitário: {{OutputHelper.money(item.product.valor)}}</i></p>
          <p><i>Quantidade: {{item.quantidade}}</i></p>
  </div>
</template>

<script>
import OutputHelper from "@/helpers/outputHelper";

export default {
    name:'ProductTableToPrint',
    props:{
        item: Object,
        itemNumber: Number
    },
    data(){
      return {
        OutputHelper
      }
    }
};
</script>