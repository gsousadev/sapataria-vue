<template>
  <table class="table table-small table-borderless table-sm table-striped">
    <tbody>

       <tr>
        <td>
          <strong>Item:</strong>
        </td>
        <td>
          <span class="text-capitalize">#{{ itemNumber }}</span>
        </td>
      </tr>
    <tr>
      <td>
        <strong>Código do Produto:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.product.id}}</span>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Nome:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.product.nome}}</span>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Valor Unitário:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{OutputHelper.money(item.product.valor)}}</span>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Quantidade:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.quantidade}}</span>
      </td>
    </tr>
    </tbody>
  </table>
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