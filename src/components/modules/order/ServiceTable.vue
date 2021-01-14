<template>
  <div>
    <table class="table table-borderless table-sm">
      <tr>
        <td class="w-25">
          <strong>Código do Serviço:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.id }}</span>
        </td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Nome:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.nome }}</span>
        </td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Valor Inicial:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{
            OutputHelper.money(item.service.valor)
          }}</span>
        </td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Valor Adicional:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{
            OutputHelper.money(item.valor_adicional)
          }}</span>
        </td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Descrição:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.service.descricao }}</span>
        </td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Observação:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ item.observacao }}</span>
        </td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Status:</strong>
        </td>
        <td v-html="OutputHelper.status(item.status)"></td>
      </tr>
    </table>
    <div class="row align-items-end">
      <div class="col-12 col-sm-6">
        <div class="form-group">
          <label>Selecione o novo status</label>
          <select v-model="orderStatusSelect.value" class="form-control">
            <option
              v-for="(option, index) in orderStatusSelect.options"
              :key="index"
              :value="index"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="form-group ml-sm-3 ml-0">
          <button class="btn btn-primary w-100" @click="updateStatus()">
            Alterar Status
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OutputHelper from "@/helpers/outputHelper";
import ServiceItemRequest from "@/requests/ServiceItemRequest";
import ModalHelper from "@/helpers/modalHelper";
import { mapMutations } from "vuex";

export default {
  name: "ServiceTable",
  props: {
    item: Object,
  },

  data() {
    return {
      OutputHelper,
      redirectUrl: "/pedidos/listar",
      orderStatusSelect: {
        value: this.item.status,
        options: {
          PENDENTE: OutputHelper.status("PENDENTE", true),
          PROCESSANDO: OutputHelper.status("PROCESSANDO", true),
          RETIRAR: OutputHelper.status("RETIRAR", true),
          ENTREGUE: OutputHelper.status("ENTREGUE", true),
        },
      },
    };
  },
  methods: {
    ...mapMutations(["loaderVisibility"]),
    updateStatus() {
      this.loaderVisibility(true);
      new ServiceItemRequest()
        .updateStatus(this.item.id, this.orderStatusSelect.value)
        .then((response) => {
          this.item.status = response.data.status;
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },
  },
};
</script>