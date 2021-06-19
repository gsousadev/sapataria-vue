<template>
  <table class="table table-small table-borderless table-sm table-striped">
    <tbody>

       <tr>
        <td>
          Item:
        </td>
        <td>
          <span class="text-capitalize">#{{ itemNumber }}</span>
        </td>
      </tr>
    <tr>
      <td>
        Código do Produto:
      </td>
      <td>
        <span class="text-capitalize">{{item.product.id}}</span>
      </td>
    </tr>
    <tr>
      <td>
        Nome:
      </td>
      <td>
        <span class="text-capitalize">{{item.product.nome}}</span>
      </td>
    </tr>
    <tr>
      <td>
        Valor Unitário:
      </td>
      <td>
        <span class="text-capitalize">{{OutputHelper.money(item.product.valor)}}</span>
      </td>
    </tr>
    <tr>
      <td>
        Quantidade:
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