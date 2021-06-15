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
          <strong>Status Progresso:</strong>
        </td>
        <td v-html="OutputHelper.status(item.status_progresso)"></td>
      </tr>
      <tr>
        <td class="w-25">
          <strong>Status Pagamento:</strong>
        </td>
        <td v-html="OutputHelper.status(item.status_pagamento)"></td>
      </tr>
    </table>
    <div class="row align-items-end">
      <div class="col-12 col-sm-8">
        <div class="form-group">
          <label>Status de Progresso</label>
          <select
            v-model="orderProgressStatusSelect.value"
            class="form-control"
          >
            <option
              v-for="(option, index) in orderProgressStatusSelect.options"
              :key="index"
              :value="index"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="form-group ml-sm-3 ml-0">
          <button class="btn btn-primary w-100" @click="progressStatusUpdate()">
            Alterar Status
          </button>
        </div>
      </div>
    </div>
    <div class="row align-items-end">
      <div class="col-12 col-sm-8">
        <div class="form-group">
          <label>Status de Pagamento</label>
          <select v-model="orderPaymentStatusSelect.value" class="form-control">
            <option
              v-for="(option, index) in orderPaymentStatusSelect.options"
              :key="index"
              :value="index"
            >
              {{ option }}
            </option>
          </select>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="form-group ml-sm-3 ml-0">
          <button class="btn btn-primary w-100" @click="paymentStatusUpdate()">
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
      orderProgressStatusSelect: {
        value: this.item.status_progresso,
        options: {
          PENDENTE: OutputHelper.status("PENDENTE", true),
          RETIRAR: OutputHelper.status("RETIRAR", true),
          ENTREGUE: OutputHelper.status("ENTREGUE", true),
        },
      },
      orderPaymentStatusSelect: {
        value: this.item.status_pagamento,
        options: {
          PENDENTE: OutputHelper.status("PENDENTE", true),
          PAGO_50: OutputHelper.status("PAGO_50", true),
          PAGO: OutputHelper.status("PAGO", true),
        },
      },
    };
  },
  methods: {
    ...mapMutations(["loaderVisibility"]),
    progressStatusUpdate() {
      this.loaderVisibility(true);
      new ServiceItemRequest()
        .progressStatusUpdate(
          this.item.id,
          this.orderProgressStatusSelect.value
        )
        .then((response) => {
          this.item.status_progresso = response.data.status_progresso;
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },
    paymentStatusUpdate() {
      this.loaderVisibility(true);
      new ServiceItemRequest()
        .paymentStatusUpdate(this.item.id, this.orderPaymentStatusSelect.value)
        .then((response) => {
          this.item.status_pagamento = response.data.status_pagamento;
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