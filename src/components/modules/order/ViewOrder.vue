<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <h4 class="bg-primary p-2 text-white rounded">{{ headerTitle }}</h4>

          <section class="bg-white p-3 mt-3 rounded">
            <h3>Informações do Pedido</h3>
            <hr />
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Código do Pedido: </strong>
                  {{ orderInfo.id }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Nome do Cliente: </strong>
                  {{ orderInfo.customer.nome }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>CPF do Cliente: </strong>
                  {{ OutputHelper.cpf(orderInfo.customer.cpf) }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Desconto: </strong>
                  {{ OutputHelper.money(orderInfo.desconto) }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Valor Pago: </strong>
                  {{ OutputHelper.money(orderInfo.valor_pago) }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Valor faltante: </strong>
                  {{ OutputHelper.money(missingValue) }}
                </p>
              </div>

              <div class="col-12 col-sm-6">
                <p>
                  <strong>Status Pagamento: </strong>
                  <span
                    v-html="OutputHelper.status(orderInfo.status_pagamento)"
                  ></span>
                </p>
              </div>
            </div>
          </section>

          <section class="bg-white p-3 mt-3 rounded">
            <h3>Produtos do Pedido</h3>
            <hr />
            <div class="row justify-content-center">
              <div
                class="col-12 py-3"
                v-for="(item, index) in orderInfo.product_items"
                :key="index"
              >
                <div
                  v-if="
                    index != Object.keys(orderInfo.product_items).length - 1
                  "
                  class="border-bottom p-2 rounded"
                >
                  <ProductTable :item="item"></ProductTable>
                </div>

                <div v-else class="p-2 rounded">
                  <ProductTable :item="item"></ProductTable>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white p-3 mt-3 rounded">
            <h3>Servicos do Pedido</h3>
            <hr />
            <div class="row justify-content-center">
              <div
                class="col-12 py-3"
                v-for="(item, index) in orderInfo.service_items"
                :key="index"
              >
                <div
                  v-if="
                    index != Object.keys(orderInfo.service_items).length - 1
                  "
                  class="border-bottom p-2 rounded"
                >
                  <ServiceTable :item="item"></ServiceTable>
                </div>

                <div v-else class="p-2 rounded">
                  <ServiceTable :item="item"></ServiceTable>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white p-3 mt-3 rouded">
            <h3>Observações</h3>
            <hr />
            <div class="row justify-content-center">
              <div class="col-12 py-3">
                <div class="form-group">
                  <label for="new_observation">Nova Observação</label>
                  <textarea
                    class="form-control"
                    name="new_observation"
                    v-model="observation.textarea.value"
                  />
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4 py-3">
                <div class="form-group">
                  <button
                    @click="addObservation()"
                    type="button"
                    class="btn btn-primary btn-add w-100"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-12"><h4>Observações Criadas</h4></div>
              <div
                class="col-12 my-2"
                v-for="(observation, index) in orderInfo.observations"
                :key="index"
              >
              <div class="order_observation p-2">
                <small
                  ><strong>{{ observation.created_at }}</strong></small
                >
                <p class="mb-0">{{ observation.descricao }}</p>
              </div>
              </div>
            </div>
          </section>

          <section class="bg-white p-3 mt-3 rouded">
            <h3>Ações</h3>
            <hr />
            <div class="row align-items-end justify-content-center">
              <div class="col-12 col-sm-8">
                <div class="form-group">
                  <label>Status de Pagamento</label>
                  <select
                    v-model="orderPaymentStatusSelect.value"
                    class="form-control"
                  >
                    <option
                      v-for="(
                        option, index
                      ) in orderPaymentStatusSelect.options"
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
                  <button
                    class="btn btn-primary w-100"
                    @click="paymentStatusUpdate()"
                  >
                    Alterar Status
                  </button>
                </div>
              </div>
            </div>
            <div class="row align-items-end justify-content-center">
              <div class="col-12 col-lg-3">
                <div class="form-group d-flex justify-content-end">
                  <button class="btn btn-danger w-100" @click="deleteOrder()">
                    <i class="material-icons">delete</i>Excluir Pedido
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.order_observation {
  background: #cccccc;
}
</style>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "@/helpers/modalHelper";
import ServiceTable from "@/components/modules/order/ServiceTable";
import ProductTable from "@/components/modules/order/ProductTable";
import OrderRequest from "@/requests/OrderRequest";
import { mapMutations } from "vuex";

export default {
  components: {
    Breadcrumb: Breadcrumb,
    ServiceTable: ServiceTable,
    ProductTable: ProductTable,
  },

  computed: {
    missingValue() {
      return this.totalOrderValue - this.orderInfo.valor_pago;
    },
  },

  created() {
    this.loaderVisibility(true);
    this.getOrderInfo();
  },

  data() {
    return {
      OutputHelper,
      headerTitle: "Visualizar Pedido",
      redirectUrl: "/pedidos/listar",
      orderId: this.$route.params.id,
      orderInfo: {
        customer: {
          nome: "",
          cpf: "",
        },
        status: "",
        valor_pago: 0,
        observations: [],
        product_items: [],
        service_items: [],
      },
      observation: {
        textarea: {
          value: "",
        },
      },
      totalOrderValue: 0,
      orderPaymentStatusSelect: {
        value: "",
        options: {
          PENDENTE: OutputHelper.status("PENDENTE", true),
          PAGO_SINAL: OutputHelper.status("PAGO_SINAL", true),
          PAGO: OutputHelper.status("PAGO", true),
        },
      },
    };
  },
  methods: {
    ...mapMutations(["loaderVisibility"]),

    calculateTotalOrderValue() {
      this.orderInfo.product_items.forEach((item) => {
        const totalWithQuantityValue =
          parseFloat(item.product.valor) * item.quantidade;
        this.totalOrderValue += totalWithQuantityValue;

        console.log(totalWithQuantityValue);
      });

      this.orderInfo.service_items.forEach((item) => {
        const totalWithAdditionalValue =
          parseFloat(item.service.valor) + parseFloat(item.valor_adicional);
        this.totalOrderValue += totalWithAdditionalValue;
      });
    },

    paymentStatusUpdate() {
      this.loaderVisibility(true);
      new OrderRequest()
        .paymentStatusUpdate(
          this.orderInfo.id,
          this.orderPaymentStatusSelect.value
        )
        .then((response) => {
          this.orderInfo.status_pagamento = response.data.status_pagamento;
          this.orderPaymentStatusSelect.value = this.orderInfo.status_pagamento;
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },

    addObservation() {
      const data = {
        pedido_id: this.orderInfo.id,
        descricao: this.observation.textarea.value,
      };

      new OrderRequest()
        .createOrderObservation(data)
        .then(() => {
          ModalHelper.modalSuccess("Ok!", ["Observção cadastrada com sucesso"]);
          this.getOrderInfo();
          this.observation.textarea.value = 0;
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },

    getOrderInfo() {
      new OrderRequest()
        .get(this.orderId)
        .then((response) => {
          this.orderInfo = response.data;
          this.orderPaymentStatusSelect.value = this.orderInfo.status_pagamento;
          this.calculateTotalOrderValue();
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },

    deleteOrder() {
      new OrderRequest()
        .delete(this.orderInfo.id)
        .then(() => {
          ModalHelper.modalSuccess("Ok!", ["Pedido deletado com sucesso!"]);
          this.$router.push({ path: this.redirectUrl });
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
  },
};
</script>