<template>
    <table class="table table-borderless table-sm table-striped">
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
          <strong>Código do Serviço:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.id }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Nome:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.nome }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Valor Base:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{
            OutputHelper.money(item.service.valor)
          }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Valor Adicional:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{
            OutputHelper.money(item.valor_adicional)
          }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Descrição:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.descricao }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Observação:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.observacao ? item.observacao : '-' }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Data Entrega:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.data_entrega }}</span>
        </td>
      </tr>
      <tr>
        <td>
          <strong>Status Progresso:</strong>
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