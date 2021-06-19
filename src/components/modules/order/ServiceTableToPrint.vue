<template>
    <table class="table table-borderless table-sm table-striped">
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
          Código do Serviço:
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.id }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Nome:
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.nome }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Valor Base:
        </td>
        <td>
          <span class="text-capitalize">{{
            OutputHelper.money(item.service.valor)
          }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Valor Adicional:
        </td>
        <td>
          <span class="text-capitalize">{{
            OutputHelper.money(item.valor_adicional)
          }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Descrição:
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.descricao }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Observação:
        </td>
        <td>
          <span class="text-capitalize">{{ item.observacao ? item.observacao : '-' }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Data Entrega:
        </td>
        <td>
          <span class="text-capitalize">{{ item.data_entrega }}</span>
        </td>
      </tr>
      <tr>
        <td>
          Status Progresso:
        </td>
        <td>{{ OutputHelper.status(item.status_progresso, true) }}</td>
      </tr>
      </tbody>
    </table>
</template>

<script>
import OutputHelper from "@/helpers/outputHelper";

export default {
  name: "ServiceTableToPrint",
  props: {
    item: Object,
    itemNumber: Number
  },

  data() {
    return {
      OutputHelper,
    };
  },
  methods: {
  },
};
</script>