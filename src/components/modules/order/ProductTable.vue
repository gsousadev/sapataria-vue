<template>
  <table class="table table-borderless table-sm">
    <tr>
      <td class="w-25">
        <strong>Código do Produto:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.product.id}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Nome:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.product.nome}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Valor Unitário:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{OutputHelper.money(item.product.valor)}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Quantidade:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.quantidade}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
import OutputHelper from "@/helpers/outputHelper";

export default {
    name:'ProductTable',
    props:{
        item: Object
    },
    data(){
      return {
        OutputHelper
      }
    }
};
</script>