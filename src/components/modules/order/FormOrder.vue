<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-8">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <h4 class="bg-primary p-2 text-white rounded">{{ headerTitle }}</h4>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Adicionar Produtos</h4>
            <hr/>
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
                          v-model="selectProductField.value"
                          @change="checkSelectedProduct()"

                      >
                        <option
                            v-for="(product, index) in enabledProductsToSelect"
                            :key="'product_'+ index"
                            :value="product.id"
                            :disabled="product.disabled"
                        >
                          {{
                            product.nome +
                            " - " +
                            OutputHelper.money(product.valor) +
                            " - Estoque atual " +
                            product.estoque +
                            " unidade(s) "
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
                          :max="qtdProductField.maxValue"
                          name="product_quantity"
                          v-model="qtdProductField.value"
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
                        :disabled="addProductButton.disabled"
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
            <hr/>
            <div class="order-items-box" v-if="orderProductItems.length === 0">
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
                  <td>{{ productItem.nome }}</td>
                  <td>
                    {{ OutputHelper.money(productItem.valor) }}
                  </td>
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

          <!-- <div class="bg-white p-3 mt-3 rounded">
            <h4>Adicionar Serviços</h4>
            <hr/>
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
                          v-model="serviceSelected.id"
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
            <hr/>
            <div class="order-items-box" v-if="orderServiceItems.length === 0">
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
                  <td>
                    {{
                      OutputHelper.money(
                          serviceItem.valor
                      )
                    }}
                  </td>
                  <td>{{ serviceItem.observacao }}</td>
                  <td>
                    <button @click="removeService(index)">
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div> -->

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Informações Gerais</h4>
            <hr/>
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
                          :disabled="totalOrderAmount === 0"
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
import {ProductModel} from "@/models/ProductModel";
import {ServiceModel} from "@/models/ServiceModel";
import {mapMutations} from "vuex";

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
      selectProductField: {
        value: "",
        disabled: false
      },
      selectServiceField: {
        value: "",
        disabled: false
      },
      addProductButton: {
        disabled: false,
      },

      qtdProductField: {
        value: 1,
        maxValue: 1,
        disabled: false
      },
      orderCustomer: {
        cpf: "",
      },

      orderProductItems: [],
      orderServiceItems: [],
      totalOrderAmount: 0,
      enabledProducts: [],
      enabledServices: [],
      orderDiscount: 0,
    };
  },

  computed: {
    enabledProductsToSelect() {
      return this.enabledProducts.filter((product) => product.disabled !== true);
    }
  },

  methods: {
    ...mapMutations(["loaderVisibility"]),

    setProductToSelect(product) {
      this.selectProductField.value = product.id;
    },

    setServiceToSelect(service) {
      this.selectServiceField.value = service.id;
    },

    getEnabledProductsAndServices() {
      this.loaderVisibility(true);
      new ProductRequest()
          .index()
          .then((response) => {
            this.enabledProducts = response.data.map((product) => new ProductModel(product)) ?? [];
            if (this.enabledProducts.length !== 0) {
              this.setProductToSelect(this.enabledProducts[0]);
            }
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
            this.enabledServices = response.data.map((service) => new ServiceModel(service)) ?? [];
            if (this.enabledServices.length !== 0) {
              this.setServiceToSelect(this.enabledServices[0]);
            }
          })
          .catch((error) => {
            ModalHelper.modalError(error);
          })
          .finally(() => {
            this.loaderVisibility(false);
          });
    },

    addProduct() {
      const productData = {...this.getEnabledProductById(this.selectProductField.value)};
      productData.disabled = true;
      productData.quantidade = this.qtdProductField.value;
      this.orderProductItems.push(productData);
      this.addProductButton.disabled = true;
      this.refreshCart();
    },

    checkSelectedProduct() {
      const product = this.getEnabledProductById(this.selectProductField.value);
      this.qtdProductField.maxValue = product.estoque;
    },

    removeProduct(index) {
      const product = this.getEnabledProductById(this.orderProductItems[index].id);
      product["disabled"] = false;
      this.orderProductItems.splice(index, 1);
      this.refreshCart();
    },

    refreshCart() {
      this.refreshTotal();
    },

    addService() {
      this.orderServiceItems.push(this.serviceSelected);
      this.refreshTotal();
    },

    removeService(index) {
      this.orderServiceItems.splice(index, 1);
      this.refreshTotal();
    },

    getEnabledServiceById(id) {
      return this.enabledServices.filter((service) => {
        return service.id === id;
      })[0];
    },

    getEnabledProductById(id) {
      return this.enabledProducts.filter((product) => {
        return product.id === id;
      })[0];
    },

    refreshTotal() {
      this.totalOrderAmount = 0;

      this.orderProductItems.forEach((productItem) => {
        const productBase = this.getEnabledProductById(productItem.id);
        const totalWithQuantity = productBase.valor * productItem.quantidade;
        this.totalOrderAmount += totalWithQuantity;
      });

      this.orderServiceItems.forEach((serviceItem) => {
        const serviceBase = this.getEnabledServiceById(serviceItem.id);
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

    submitForm: function () {
      new OrderRequest()
          .create(this.generateDataToSend())
          .then(() => {
            ModalHelper.modalSuccess("Pedido cadastrado com sucesso!");
            this.$router.push({path: this.redirectUrl});
          })
          .catch((error) => {
            ModalHelper.modalError(error.data);
          });
    },
  },
};
</script>
