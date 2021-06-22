<template>
  <div class="page">
    <p class="text-center mb-3">Venda Fácil</p>
    <h3 class="text-center mb-3">Sapataria São Crispim</h3>
    <hr />
    <section>
      <div class="order-code">
        <p class="text-center">Número do Pedido</p>
        <h1 class="text-center">
          <strong>{{ orderInfo.id }}</strong>
        </h1>
      </div>
    </section>
    <hr />
    <section>
      <h4>Informações Gerais</h4>
      <div class="order-info">
        <p><i>Nome: </i>{{ orderInfo.customer.nome }}</p>
        <p><i>CPF: </i>{{ OutputHelper.cpf(orderInfo.customer.cpf) }}</p>
        <p><i>Tel.: </i>{{ OutputHelper.phone(orderInfo.customer.telefone_1) }}</p>
        <p><i>Desconto: </i>{{ OutputHelper.money(orderInfo.desconto) }}</p>
        <p><i>Total: </i>{{ OutputHelper.money(totalOrderValue) }}</p>
        <p><i>Pago: </i>{{ OutputHelper.money(orderInfo.valor_pago) }}</p>
        <p><i>A pagar: </i>{{ OutputHelper.money(missingValue) }}</p>
        <p><i>Data: </i>{{ orderInfo.created_at }}</p>
        <p><i>Status Pag.: </i>{{ OutputHelper.status(orderInfo.status_pagamento, true) }}</p>
      </div>
    </section>
    <hr />
    <section v-if="orderInfo.product_items.length !== 0">
      <h4>Informações de Produtos</h4>
      <p>Quantidade de Itens: {{ orderInfo.product_items.length }}</p>
      <div v-for="(item, index) in orderInfo.product_items" :key="index">
        <ProductTableToPrint
          :item="item"
          :itemNumber="index + 1"
        ></ProductTableToPrint>
      </div>
      <hr />
    </section>
    <section v-if="orderInfo.service_items.length !== 0">
      <h4>Informações de Serviços</h4>
      <p>Quantidade de Itens: {{ orderInfo.service_items.length }}</p>
      <div v-for="(item, index) in orderInfo.service_items" :key="index">
        <ServiceTableToPrint
          :item="item"
          :itemNumber="index + 1"
        ></ServiceTableToPrint>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.page {
  * {
    color: #000;
  }
  font-size: 4.4mm;
  & hr {
    border-top: 1px solid #000;
  }
  width: 70mm;
  margin: 5mm;
  font-family: Arial, Helvetica, sans-serif;
  & .order-code {
    margin: 2mm 0;
    padding: 0;
  }
  & p {
    padding: 0;
    margin: 0;
  }
  & .order-item,
  .order-info {
    padding-left: 0.2cm;
    margin-top: 0.5cm;
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
          setTimeout(function () {
            window.print();
          }, 60);
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
  },
};
</script>