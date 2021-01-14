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
                  <strong>Código do Pedido:</strong>
                  {{ orderInfo.id }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Nome do Cliente:</strong>
                  {{ orderInfo.customer.nome }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>CPF do Cliente:</strong>
                  {{ OutputHelper.cpf(orderInfo.customer.cpf) }}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Desconto:</strong>
                  {{ OutputHelper.money(orderInfo.desconto) }}
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

          <section class="bg-white p-3 mt-3 rounded">
            <h3>Ações </h3>
            <hr />
            <div class="row align-items-end justify-content-between">
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

<script>
import Breadcrumb from "@/components/Breadcrumb";
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "@/helpers/modalHelper";
import ServiceTable from "@/components/modules/order/ServiceTable";
import ProductTable from "@/components/modules/order/ProductTable";
import Api from "@/api";
import OrderRequest from "@/requests/OrderRequest";
import ServiceItemRequest from "@/requests/ServiceItemRequest";
import { mapMutations } from "vuex";

export default {
  components: {
    Breadcrumb: Breadcrumb,
    ServiceTable: ServiceTable,
    ProductTable: ProductTable,
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
      },
    };
  },
  methods: {
    ...mapMutations(["loaderVisibility"]),

    getOrderInfo() {
      new OrderRequest()
        .get(this.orderId)
        .then((response) => {
          this.orderInfo = response.data;
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
        .then((response) => {
          ModalHelper.modalSuccess("Ok!", ["Pedido deletado com sucesso!"]);
          this.$router.push({ path: this.redirectUrl });
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    }
  }
};
</script>