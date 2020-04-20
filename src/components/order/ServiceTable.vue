<template>
  <table class="table table-borderless table-sm">
    <tr>
      <td class="w-25">
        <strong>Código do item:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.id}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Tipo:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.tipo}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Cor:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{item.cor}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Gênero:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{OutputHelper.productGenre(item.genero)}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Tamanho:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{OutputHelper.productSize(item.tamanho)}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Valor:</strong>
      </td>
      <td>
        <span class="text-capitalize">{{OutputHelper.money(item.valor)}}</span>
      </td>
    </tr>
    <tr>
      <td class="w-25">
        <strong>Descrição do pedido:</strong>
      </td>
      <td>
        <span class="font-italic">{{item.descricao}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
import OutputHelper from "@/helpers/outputHelper";

export default {
    name:'ServiceTable',
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