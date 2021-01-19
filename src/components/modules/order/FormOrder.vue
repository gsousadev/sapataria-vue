<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <h4 class="bg-primary p-2 text-white rounded">{{ headerTitle }}</h4>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Adicionar Produtos</h4>
            <hr />
            <div class="box-order-items">
              <div class="order-item">
                <div class="row mt-3">
                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <label for="product_select">Selecione um produto</label>
                      <select
                        name="product_select"
                        id="product_select"
                        class="form-control"
                        v-model="productSelectedId"
                      >
                        <option
                          v-for="(product, index) in enabledProducts"
                          :key="index"
                          :value="product.id"
                        >
                          {{ product.nome }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <label for="select_services">Quantidade de items</label>
                      <input
                        type="number"
                        class="form-control"
                        min="1"
                        name="product_quantity"
                        v-model="productQuantity"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-3 justify-content-end">
                  <div class="col-12 col-md-3">
                    <button
                      @click="addProduct()"
                      type="button"
                      class="btn btn-primary btn-add w-100"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Produtos do Pedido</h4>
            <hr />
            <div class="order-items-box" v-if="orderProductItems.length == 0">
              <p class="text-center">Nenhum item adicionado</p>
            </div>
            <div class="order-items-box table-responsive" v-else>
              <table class="table table-borderless text-center">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Valor</th>
                  <th>Excluir</th>
                </tr>

                <tr
                  v-for="(productItem, index) in orderProductItems"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ productItem.nome }}</td>
                  <td>{{ OutputHelper.money(productItem.valor) }}</td>
                  <td>
                    <button @click="removeProduct(index)">
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Adicionar Serviços</h4>
            <hr />
            <div class="box-order-items">
              <div class="order-item">
                <div class="row mt-3">
                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <label for="service_select">Selecione um serviço</label>
                      <select
                        name="service_select"
                        id="service_select"
                        class="form-control"
                        v-model="serviceSelectedId"
                      >
                        <option
                          v-for="(service, index) in enabledServices"
                          :key="index"
                          :value="service.id"
                        >
                          {{ service.nome }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 justify-content-end">
                  <div class="col-12 col-md-3">
                    <button
                      @click="addService()"
                      type="button"
                      class="btn btn-primary btn-add w-100"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Serviços do Pedido</h4>
            <hr />
            <div class="order-items-box" v-if="orderServiceItems.length == 0">
              <p class="text-center">Nenhum item adicionado</p>
            </div>
            <div class="order-items-box table-responsive" v-else>
              <table class="table table-borderless text-center">
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Valor</th>
                  <th>Observação</th>
                  <th>Excluir</th>
                </tr>

                <tr
                  v-for="(serviceItem, index) in orderServiceItems"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ serviceItem.nome }}</td>
                  <td>{{ OutputHelper.money(serviceItem.valor) }}</td>
                  <td>{{ serviceItem.observacao }}</td>
                  <td>
                    <button @click="removeService(index)">
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Informações Gerais</h4>
            <hr />
            <div class="row mt-3 align-items-center">
              <div class="col-12 col-md-6">
                <div class="row align-items-end">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>CPF do cliente</label>
                      <input
                        type="text"
                        class="form-control"
                        id="order_customer_cpf"
                        name="order_customer_cpf"
                        v-model="orderCustomer.cpf"
                        v-mask="'###.###.###-##'"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Desconto %</label>
                      <input
                        type="text"
                        class="form-control"
                        id="order_discount"
                        name="order_discount"
                        v-model="orderDiscount"
                        @input="discountCalculate()"
                        :disabled="totalOrderAmount == 0"
                        v-mask="'##'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="text-center">
                  <span class="total-value-label display-3">
                    {{ OutputHelper.money(totalOrderAmount) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="row mt-5 justify-content-end">
              <div class="col-12 col-md-3">
                <button
                  @click="submitForm()"
                  class="btn btn-primary d-block text-white w-100"
                >
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/api";
import axios from "axios";
import Breadcrumb from "@/components/Breadcrumb";
import InputHelper from "@/helpers/inputHelper";
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "../../../helpers/modalHelper";
import OrderRequest from "@/requests/OrderRequest";
import ProductRequest from "@/requests/ProductRequest";
import ServiceRequest from "@/requests/ServiceRequest";
import { mapMutations } from "vuex";

export default {
  components: {
    Breadcrumb: Breadcrumb,
  },

  created() {
    this.orderCustomer.cpf = this.$route.query.cpf;
    this.getEnabledProductsAndServices();
  },

  data() {
    return {
      OutputHelper,
      headerTitle: "Cadastro de Pedido",
      redirectUrl: "/pedidos/listar",
      productSelectedId: 1,
      serviceSelectedId: 1,
      productQuantity: 1,
      orderCustomer: {},
      orderDiscount: 0,
      orderProductItems: [],
      orderServiceItems: [],
      totalOrderAmount: 0,
      enabledProducts: [],
      enabledServices: [],
    };
  },

  methods: {
    ...mapMutations(["loaderVisibility"]),

    getEnabledProductsAndServices() {
      this.loaderVisibility(true);
      new ProductRequest()
        .index()
        .then((response) => {
          this.enabledProducts = response.data;
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });

      this.loaderVisibility(true);
      new ServiceRequest()
        .index()
        .then((response) => {
          this.enabledServices = response.data;
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },

    submitForm: function () {
      const data = order;
      new OrderRequest()
        .create(order)
        .then((response) => {
          const data = response.data;
          ModalHelper.modalSuccess("Pedido cadastrado com sucesso!");
          this.$router.push({ path: this.redirectUrl });
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },

    addProduct() {
      let product = this.getEnabledProductById(this.productSelectedId);
      product.quantidade = this.productQuantity;
      this.orderProductItems.push(...product);
      this.refreshTotal();
    },

    addService() {
      let service = this.getEnabledServiceById(this.serviceSelectedId);
      this.orderServiceItems.push(...service);
      this.refreshTotal();
    },

    generateDataToSend() {
      return {
        produtos_pedido: [],
        servicos_pedido: [],
        cpf_cliente: "",
        desconto: 0,
      };
    },

    getEnabledProductById(id) {
      return this.enabledProducts.filter((product) => {
        return product.id === id;
      });
    },

    getEnabledServiceById(id) {
      return this.enabledServices.filter((service) => {
        return service.id === id;
      });
    },

    refreshTotal() {
      this.totalOrderAmount = 0;

      this.orderProductItems.forEach((productItem, index) => {
        let totalWithQuantity = productItem.valor * productItem.quantidade;
        this.totalOrderAmount += totalWithQuantity;
      });

      this.orderServiceItems.forEach((serviceItem, index) => {
        this.totalOrderAmount += serviceItem.valor;
      });
    },

    removeProduct(index) {
      this.orderProductItems.splice(index, 1);
      this.refreshTotal();
    },

    removeService(index) {
      this.orderServiceItems.splice(index, 1);
      this.refreshTotal();
    },

    discountCalculate() {
      this.refreshTotal();
      if (this.totalOrderAmount > 0 && this.orderDiscount > 0) {
        let totalDiscount =
          this.totalOrderAmount * (InputHelper.money(this.orderDiscount) / 100);
        this.totalOrderAmount -= totalDiscount;
      }
    },
  },
};
</script>
