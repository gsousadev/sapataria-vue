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
                <div class="order-item" v-if="hasEnabledProducts">
                  <div class="row mt-3">
                    <div class="col-12 col-sm-8">
                      <div class="form-group">
                        <label for="product_select">Selecione um produto</label>
                        <select
                          name="product_select"
                          id="product_select"
                          class="form-control"
                          v-model="modules.products.fields.selectProductField.value"
                          @change="checkSelectedProduct()"
                        >
                          <option
                            v-for="(product, index) in modules.products.enabledItems"
                            :key="'product_' + index"
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
                          :max="modules.products.fields.qtdProductField.maxValue"
                          name="product_quantity"
                          v-model="modules.products.fields.qtdProductField.value"
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
                <div class="order-item" v-else>
                    <p class="text-center">Nenhum produto cadastrado</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-3 mt-3 rounded" v-if="hasEnabledProducts">
              <h4>Produtos do Pedido</h4>
              <hr />
              <div
                class="order-items-box"
                v-if="!hasProductOrderItems"
              >
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
                    v-for="(productItem, index) in modules.products.orderItems"
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
                   
         
            <div class="bg-white p-3 mt-3 rounded">
              <h4>Adicionar Serviços</h4>
              <hr />
              <div class="box-order-items">
                <div class="order-item" v-if="hasEnabledServices">
                  <div class="row mt-3">
                    <div class="col-12 col-sm-12">
                      <div class="form-group">
                        <label for="service_select">Selecione um serviço</label>
                        <select
                          name="service_select"
                          id="service_select"
                          class="form-control"
                          v-model="modules.services.fields.selectServiceField.value"
                        >
                          <option
                            v-for="(service, index) in modules.services.enabledItems"
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
                          type="number"
                          min="0"
                          class="form-control"
                          name="service_additional_value"
                          v-model="
                            modules.services.fields.additionalValueField.value
                          "
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group">
                        <label for="service_delivery_date"
                          >Data da Entrega</label
                        >
                        <input
                          type="date"
                          class="form-control"
                          name="service_delivery_date"
                          v-model="
                            modules.services.fields.deliveryDateField.value
                          "
                        />
                      </div>
                    </div>
                    <div class="col-12 col-sm-4">
                      <div class="form-group">
                        <label for="service_delivery_hour"
                          >Hora da Entrega</label
                        >
                        <input
                          type="time"
                          class="form-control"
                          name="service_delivery_hour"
                          v-model="
                           modules.services.fields.deliveryHourField.value
                          "
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
                          v-model="
                            modules.services.fields.observationField.value
                          "
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
                <div class="order-item" v-else>
                  <p class="text-center">Nenhum serviço cadastrado</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-3 mt-3 rounded" v-if="hasEnabledServices">
              <h4>Serviços do Pedido</h4>
              <hr />
              <div
                class="order-items-box"
                v-if="!hasServiceOrderItems"
              >
                <p class="text-center">Nenhum item adicionado</p>
              </div>
              <div class="order-items-box table-responsive" v-else>
                <table class="table table-borderless text-center">
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Observação</th>
                    <th>Data Entrega</th>
                    <th>Hora Entrega</th>
                    <th>Valor Adicional</th>
                    <th>Excluir</th>
                  </tr>

                  <tr
                    v-for="(serviceItem, index) in modules.services.orderItems"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ serviceItem.nome || "-" }}</td>
                    <td>
                      {{ OutputHelper.money(serviceItem.valor) || "-" }}
                    </td>
                    <td>{{ serviceItem.observacao || "-" }}</td>
                    <td>{{ serviceItem.data_entrega || "-" }}</td>
                    <td>{{ serviceItem.hora_entrega || "-" }}</td>
                    <td>
                      {{ OutputHelper.money(serviceItem.valor_adicional) }}
                    </td>
                    <td>
                      <button @click="removeService(index)">
                        <i class="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
   

          <div class="bg-white p-3 mt-3 rounded" v-if="hasEnabledServices || hasEnabledProducts">
            <h4>Informações Gerais</h4>
            <hr />
            <div class="row mt-3 align-items-center">
              <div class="col-12 col-md-6">
                <div class="row align-items-end">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>CPF do cliente</label>
                      <the-mask
                        type="text"
                        class="form-control"
                        id="order_customer_cpf"
                        name="order_customer_cpf"
                        v-model="orderCustomer.cpf"
                        mask="###.###.###-##"
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
import { ProductModel } from "@/models/ProductModel";
import { ServiceModel } from "@/models/ServiceModel";
import { mapMutations } from "vuex";

export default {
  components: {
    Breadcrumb: Breadcrumb,
  },

  created() {
    this.loaderVisibility(true);
    this.orderCustomer.cpf = this.$route.query.cpf;
    this.getEnabledProductsAndServices();
  },

  data() {
    return {
      OutputHelper,
      headerTitle: "Cadastro de Pedido",
      redirectUrl: "/pedidos/listar",

      modules: {
        products: {
          active: false,
          fields: {
            selectProductField: {
              value: "",
              disabled: false,
            },
            qtdProductField: {
              value: 1,
              maxValue: 1,
              disabled: false,
            },
          },
          orderItems: [],
          enabledItems: [],
        },
        services: {
          active: false,
          fields: {
            selectServiceField: {
              value: "",
              isValid: false,
              isRequired: true,
            },

            additionalValueField: {
              value: 0,
              isValid: true,
              isRequired: false,
            },

            deliveryDateField: {
              value: "",
              isValid: false,
              isRequired: true,
            },

            deliveryHourField: {
              value: "",
              isValid: false,
              isRequired: true,
            },

            observationField: {
              value: "",
              isValid: true,
              isRequired: false,
            }
          },
          orderItems: [],
          enabledItems: [],
        },
      },

      orderCustomer: {
        cpf: "",
      },
      totalOrderAmount: 0,
      orderDiscount: 0,
    };
  },

  computed:{
    hasEnabledProducts(){
       return this.modules.products.enabledItems.length !== 0;
    },
    hasEnabledServices(){
      return this.modules.services.enabledItems.length !== 0;
    },

    hasProductOrderItems(){
       return this.modules.products.orderItems.length !== 0;
    },
    hasServiceOrderItems(){
      return this.modules.services.orderItems.length !== 0;
    }
  },

  methods: {
    ...mapMutations(["loaderVisibility"]),

    setProductToSelect(product) {
      this.modules.products.fields.selectProductField.value = product.id;
    },

    setServiceToSelect(service) {
      this.modules.services.fields.selectServiceField.value = service.id;
    },

    getEnabledProductsAndServices() {
      
      new ProductRequest()
        .index()
        .then((response) => {
         this.modules.products.enabledItems =
            response.data.map((product) => new ProductModel(product)) ?? [];
          if (this.modules.products.enabledItems.length !== 0) {
            this.setProductToSelect(this.modules.products.enabledItems[0]);
            this.modules.products.fields.qtdProductField.maxValue = this.modules.products.enabledItems[0].estoque;
            this.modules.products.active = true;
          }
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        })

      new ServiceRequest()
        .index()
        .then((response) => {
          this.modules.services.enabledItems =
            response.data.map((service) => new ServiceModel(service)) ?? [];
          if (this.modules.services.enabledItems.length !== 0) {
            this.setServiceToSelect(this.modules.services.enabledItems[0]);
            this.modules.services.active = true;
          }
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        }).finally(()=>{
          this.loaderVisibility(false);
        })
    
    },

    addProduct() {
      let productData = {
        ...this.getEnabledProductById(this.modules.products.fields.selectProductField.value),
      };

      productData.quantidade = this.modules.products.fields.qtdProductField.value;

      this.modules.products.orderItems.push(new ProductModel(productData));
      this.refreshCart();
    },

    addService() {
      if (this.checkSelectedServiceIsValidToCard()) {
        let serviceData = {
          ...this.getEnabledServiceById(
            this.modules.services.fields.selectServiceField.value
          ),
        };

        serviceData.servico_id =
          this.modules.services.fields.selectServiceField.value;
        serviceData.valor_adicional =
          this.modules.services.fields.additionalValueField.value;
        serviceData.data_entrega =
          this.modules.services.fields.deliveryDateField.value;
        serviceData.hora_entrega =
          this.modules.services.fields.deliveryHourField.value;
        serviceData.observacao =
          this.modules.services.fields.observationField.value;

       this.modules.services.orderItems.push(new ServiceModel(serviceData));
        this.refreshCart();
      }
    },

    checkSelectedServiceIsValidToCard() {
      // TODO: Refatorar e colocar uma validação para cada campo em um foreach
      return true;
    },

    checkSelectedProduct() {
      const product = this.getEnabledProductById(this.modules.products.fields.selectProductField.value);
      this.modules.products.fields.qtdField.maxValue = product.estoque;
    },

    removeProduct(index) {
      const product = this.getEnabledProductById(
       this.modules.products.orderItems[index].id
      );
      product["disabled"] = false;
      this.modules.products.orderItems.splice(index, 1);
      this.refreshCart();
    },

    refreshCart() {
      this.refreshTotal();
    },

    removeService(index) {
      this.modules.services.orderItems.splice(index, 1);
      this.refreshTotal();
    },

    getEnabledServiceById(id) {
      return this.modules.services.enabledItems.filter((service) => {
        return service.id === id;
      })[0];
    },

    getEnabledProductById(id) {
      return this.modules.products.enabledItems.filter((product) => {
        return product.id === id;
      })[0];
    },

    refreshTotal() {
      this.totalOrderAmount = 0;

      this.modules.products.orderItems.forEach((productItem) => {
        const productBase = this.getEnabledProductById(productItem.id);
        const totalWithQuantity = productBase.valor * productItem.quantidade;
        this.totalOrderAmount += totalWithQuantity;
      });

      this.modules.services.orderItems.forEach((serviceItem) => {
        const totalWithAdditionalValue =
          parseFloat(serviceItem.valor) +
          parseFloat(serviceItem.valor_adicional);
        this.totalOrderAmount += totalWithAdditionalValue;
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
        produtos_pedido: this.modules.products.orderItems,
        servicos_pedido: this.modules.services.orderItems,
        cpf_cliente: this.orderCustomer.cpf,
        desconto: this.orderDiscount,
      };
    },

    submitForm: function () {
      new OrderRequest()
        .create(this.generateDataToSend())
        .then(() => {
          ModalHelper.modalSuccess("Pedido cadastrado com sucesso!");
          this.$router.push({ path: this.redirectUrl });
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
  },
};
</script>
