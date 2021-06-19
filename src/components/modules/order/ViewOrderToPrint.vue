<template>
  <div class="page">
    <h1 class="text-center mb-3">Venda Fácil</h1>
    <h2 class="text-center mb-3">Impressão de Pedido</h2>
    <hr />
    <section>
      <p>Informações Gerais</p>
      <table class="table table-striped table-borderless table-sm">
        <tbody>
          <tr>
            <td>Código do Pedido: </td>
            <td>
              <strong class="order-code">{{ orderInfo.id }}</strong
              >
            </td>
          </tr>
          <tr>
            <td>Nome do Cliente: </td>
            <td>{{ orderInfo.customer.nome }}</td>
          </tr>
          <tr>
            <td>CPF do Cliente: </td>
            <td>{{ OutputHelper.cpf(orderInfo.customer.cpf) }}</td>
          </tr>
          <tr>
            <td>Telefone Principal: </td>
            <td>{{ OutputHelper.phone(orderInfo.customer.telefone_1) }}</td>
          </tr>
          <tr>
            <td>Desconto: </td>
            <td>{{ OutputHelper.money(orderInfo.desconto) }}</td>
          </tr>
          <tr>
            <td>Valor Pago: </td>
            <td>{{ OutputHelper.money(totalOrderValue) }}</td>
          </tr>
          <tr>
            <td>Valor Pago: </td>
            <td>{{ OutputHelper.money(orderInfo.valor_pago) }}</td>
          </tr>
          <tr>
            <td>Valor Faltante: </td>
            <td>{{ OutputHelper.money(missingValue) }}</td>
          </tr>
          <tr>
        <td>
          Data:
        </td>
        <td>
          <span class="text-capitalize">{{ orderInfo.created_at }}</span>
        </td>
      </tr>
          <tr>
            <td>Status Pagamento: </td>
            <td>{{ OutputHelper.status(orderInfo.status_pagamento, true) }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <hr>
    <section v-if="orderInfo.product_items.length !== 0">
      <p>Informações de Produtos</p>
      <p>Quantidade de Itens: {{ orderInfo.product_items.length }}</p>
      <div v-for="(item, index) in orderInfo.product_items" :key="index">
        <ProductTableToPrint
          :item="item"
          :itemNumber="index + 1"
        ></ProductTableToPrint>
        <hr />
      </div>
    </section>
    <section v-if="orderInfo.service_items.length !== 0">
      <p>Informações de Serviços</p>
       <p>Quantidade de Itens: {{ orderInfo.service_items.length }}</p>
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
  & hr{
    border-top: 1px solid #000;
  }
  width: 70mm;
  margin:6mm;
  font-size: 1.1em !important;
  font-family: Arial, Helvetica, sans-serif;
  & .order-code{
    font-size: 1.3em;
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