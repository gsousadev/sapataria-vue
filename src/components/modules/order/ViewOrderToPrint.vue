<template>
  <div class="page">
    <h1 class="text-center mb-3">Venda Fácil</h1>
    <h2 class="text-center mb-3">Impressão de Pedido</h2>
    <hr />
    <section>
      <p><strong>Informações Gerais</strong></p>
      <table class="table table-striped table-borderless table-sm">
        <tbody>
          <tr>
            <td><strong>Código do Pedido: </strong></td>
            <td>
              <strong class="order-code">{{ orderInfo.id }}</strong
              >
            </td>
          </tr>
          <tr>
            <td><strong>Nome do Cliente: </strong></td>
            <td>{{ orderInfo.customer.nome }}</td>
          </tr>
          <tr>
            <td><strong>CPF do Cliente: </strong></td>
            <td>{{ OutputHelper.cpf(orderInfo.customer.cpf) }}</td>
          </tr>
          <tr>
            <td><strong>Telefone Principal: </strong></td>
            <td>{{ OutputHelper.phone(orderInfo.customer.telefone_1) }}</td>
          </tr>
          <tr>
            <td><strong>Desconto: </strong></td>
            <td>{{ OutputHelper.money(orderInfo.desconto) }}</td>
          </tr>
          <tr>
            <td><strong>Valor Pago: </strong></td>
            <td>{{ OutputHelper.money(totalOrderValue) }}</td>
          </tr>
          <tr>
            <td><strong>Valor Pago: </strong></td>
            <td>{{ OutputHelper.money(orderInfo.valor_pago) }}</td>
          </tr>
          <tr>
            <td><strong>Valor Faltante: </strong></td>
            <td>{{ OutputHelper.money(missingValue) }}</td>
          </tr>
          <tr>
        <td>
          <strong>Data:</strong>
        </td>
        <td>
          <span class="text-capitalize">{{ orderInfo.created_at }}</span>
        </td>
      </tr>
          <tr>
            <td><strong>Status Pagamento: </strong></td>
            <td>{{ OutputHelper.status(orderInfo.status_pagamento, true) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <hr>
    <section v-if="orderInfo.product_items.length !== 0">
      <p><strong>Informações de Produtos</strong></p>
      <p><strong>Quantidade de Itens: {{ orderInfo.product_items.length }}</strong></p>
      <div v-for="(item, index) in orderInfo.product_items" :key="index">
        <ProductTableToPrint
          :item="item"
          :itemNumber="index + 1"
        ></ProductTableToPrint>
        <hr />
      </div>
    </section>
    <section v-if="orderInfo.service_items.length !== 0">
      <p><strong>Informações de Serviços</strong></p>
       <p><strong>Quantidade de Itens: {{ orderInfo.service_items.length }}</strong></p>
      <div v-for="(item, index) in orderInfo.service_items" :key="index">
        <ServiceTableToPrint
          :item="item"
          :itemNumber="index + 1"
        ></ServiceTableToPrint>
        <hr />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.page {
  width: 5.8cm;
  font-size: 0.6em !important;
  & .order-code{
    font-size: 1.1em;
  }
  & p{
    padding: 0;
    margin: 0;
  }
  & h1 {
    font-size: 1.3em;
  }
  & h2 {
    font-size: 1.2em;
  }
  & tr {
    & td{
      padding:0;
    }
  }
}
</style>

<script>
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "@/helpers/modalHelper";
import ServiceTableToPrint from "@/components/modules/order/ServiceTableToPrint";
import ProductTableToPrint from "@/components/modules/order/ProductTableToPrint";
import OrderRequest from "@/requests/OrderRequest";
import { mapMutations } from "vuex";

export default {
  components: {
    ServiceTableToPrint: ServiceTableToPrint,
    ProductTableToPrint: ProductTableToPrint,
  },

  computed: {
    missingValue() {
      return this.totalOrderValue - this.orderInfo.valor_pago;
    },
  },

  created() {
    this.getOrderInfo();
  },

  data() {
    return {
      OutputHelper,
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

    getOrderInfo() {
      new OrderRequest()
        .get(this.orderId)
        .then((response) => {
          this.orderInfo = response.data;
          this.calculateTotalOrderValue();
          setTimeout(function(){
            window.print();
          }, 60)
          
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
    },
  },
};
</script>