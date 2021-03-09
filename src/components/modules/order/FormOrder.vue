<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-8">
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
                  <div class="col-12 col-sm-8">
                    <div class="form-group">
                      <label for="product_select">Selecione um produto</label>
                      <select
                        name="product_select"
                        id="product_select"
                        class="form-control"
                        v-model="productSelected.produto_id"
                        @change="productSelectedStockCheck()"
                      >
                        <option
                          v-for="(product, index) in enabledProducts"
                          :key="index"
                          :value="product.id"
                        >
                          {{
                            product.nome +
                            " - " +
                            OutputHelper.money(product.valor)
                          }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label for="select_services">Quantidade de items</label>
                      <input
                        type="number"
                        class="form-control"
                        min="1"
                        name="product_quantity"
                        v-model="productSelected.quantidade"
                        :disabled="productSelected.quantidade == 0"
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
                      :disabled="productSelected.quantidade == 0">
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
                  <th>Quantidade</th>
                  <th>Excluir</th>
                </tr>

                <tr
                  v-for="(productItem, index) in orderProductItems"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ productItemName(productItem.produto_id) }}</td>
                  <td>{{ OutputHelper.money(productItemValue(productItem.produto_id)) }}</td>
                  <td>{{ productItem.quantidade }}</td>
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
                  <div class="col-12 col-sm-12">
                    <div class="form-group">
                      <label for="service_select">Selecione um serviço</label>
                      <select
                        name="service_select"
                        id="service_select"
                        class="form-control"
                        v-model="serviceSelected.servico_id"
                      >
                        <option
                          v-for="(service, index) in enabledServices"
                          :key="index"
                          :value="service.id"
                        >
                          {{
                            service.nome +
                            " - " +
                            OutputHelper.money(service.valor)
                          }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label for="service_additional_value"
                        >Valor Adicional</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        name="service_additional_value"
                        v-model="serviceSelected.valor_adicional"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label for="service_delivery_date">Data da Entrega</label>
                      <input
                        type="date"
                        class="form-control"
                        name="service_delivery_date"
                        v-model="serviceSelected.data_entrega"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-group">
                      <label for="service_delivery_hour">Hora da Entrega</label>
                      <input
                        type="time"
                        class="form-control"
                        name="service_delivery_hour"
                        v-model="serviceSelected.hora_entrega"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="service_observation">Observação</label>
                      <input
                        type="text"
                        class="form-control"
                        name="service_observation"
                        v-model="serviceSelected.observacao"
                      />
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
                  <td>{{ serviceItemName(serviceItem.servico_id) }}</td>
                  <td>{{ OutputHelper.money(serviceItemValue(serviceItem.servico_id)) }}</td>
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

  computed: {},

  data() {
    return {
      OutputHelper,
      headerTitle: "Cadastro de Pedido",
      redirectUrl: "/pedidos/listar",
      productSelected: {
        produto_id: 1,
        quantidade: 1,
      },
      serviceSelected: {
        servico_id: 1,
        valor_adicional: 0,
        observacao: "",
        data_entrega: "",
        hora_entrega: "",
      },
      orderCustomer: {
        cpf: "",
      },
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

    productItemName(id){
      const productItem = this.getEnabledProductById(id);
      return productItem.nome;
    },
    productItemValue(id){
     const productItem = this.getEnabledProductById(id);
      return productItem.valor;
    },

    serviceItemName(id){
      const serviceItem = this.getEnabledServiceById(id);
      return serviceItem.nome;
    },
    serviceItemValue(id){
     const serviceItem = this.getEnabledServiceById(id);
      return serviceItem.valor;
    },

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
        .create(this.generateDataToSend())
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
      const productBase = this.getEnabledProductById(
        this.productSelected.produto_id
      );
      productBase.estoque -= this.productSelected.quantidade;
      this.orderProductItems.push(this.productSelected);
      this.refreshTotal();
      this.productSelectedStockCheck();
    },

    productSelectedStockCheck(){
      const productBase = this.getEnabledProductById(
        this.productSelected.produto_id
      );
      this.productSelected.quantidade = productBase.estoque;
    },

    removeProduct(index) {
      this.rearrangeStock(index);
      this.orderProductItems.splice(index, 1);
      this.refreshTotal();
    },

    rearrangeStock(productItemIndex) {
      const productItem = this.orderProductItems[productItemIndex];
      const productBase = this.getEnabledProductById(productItem.produto_id);
      productBase.estoque += productItem.quantidade;
    },

    addService() {
      this.orderServiceItems.push(this.serviceSelected);
      this.refreshTotal();
    },

    removeService(index) {
      this.orderServiceItems.splice(index, 1);
      this.refreshTotal();
    },

    getEnabledProductById(id) {
      return this.enabledProducts.filter((product) => {
        return product.id === id;
      })[0];
    },

    getEnabledServiceById(id) {
      return this.enabledServices.filter((service) => {
        return service.id === id;
      })[0];
    },

    refreshTotal() {
      this.totalOrderAmount = 0;

      this.orderProductItems.forEach((productItem) => {
        const productBase = this.getEnabledProductById(productItem.produto_id);
        const totalWithQuantity = productBase.valor * productItem.quantidade;
        this.totalOrderAmount += totalWithQuantity;
      });

      this.orderServiceItems.forEach((serviceItem) => {
        const serviceBase = this.getEnabledServiceById(serviceItem.servico_id);
        this.totalOrderAmount += serviceBase.valor;
      });
    },

    discountCalculate() {
      this.refreshTotal();
      if (this.totalOrderAmount > 0 && this.orderDiscount > 0) {
        let totalDiscount =
          this.totalOrderAmount * (InputHelper.money(this.orderDiscount) / 100);
        this.totalOrderAmount -= totalDiscount;
      }
    },

    generateDataToSend() {
      return {
        produtos_pedido: this.orderProductItems,
        servicos_pedido: this.orderServiceItems,
        cpf_cliente: this.orderCustomer.cpf,
        desconto: this.orderDiscount,
      };
    },
  },
};
</script>
