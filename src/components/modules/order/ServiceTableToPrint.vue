<template>
  <div class="order-item">
    <p><i>Item: </i>#{{ itemNumber }}</p>
    <p><i>Nome: </i>{{ item.service.nome }}</p>
    <p><i>Valor Base: </i>{{ OutputHelper.money(item.service.valor) }}</p>
    <p><i>Valor Adic.: </i>{{ OutputHelper.money(item.valor_adicional) }}</p>
    <p><i>Descrição: </i>{{ item.service.descricao }}</p>
    <p><i>Observação: </i>{{ item.observacao }}</p>
    <p><i>Entrega: </i>{{ item.data_entrega }}</p>
  </div>
</template>

<script>
import OutputHelper from "@/helpers/outputHelper";

export default {
  name: "ServiceTableToPrint",
  props: {
    item: Object,
    itemNumber: Number,
  },

  data() {
    return {
      OutputHelper,
    };
  },
  methods: {},
};
</script>