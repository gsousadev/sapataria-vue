<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <form @submit.prevent="submitForm()">
            <h4 class="bg-primary p-2 text-white rounded">{{ headerTitle }}</h4>
            <div class="row my-3">
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.nome.name">
                    {{ customerInfo.nome.label }}
                  </label>
                  <input
                    :type="customerInfo.nome.type"
                    class="form-control"
                    :id="customerInfo.nome.name"
                    :name="customerInfo.nome.name"
                    v-model="customerInfo.nome.value"
                    :required="customerInfo.nome.required"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.cpf.name">
                    {{ customerInfo.cpf.label }}
                  </label>
                  <input
                    :type="customerInfo.cpf.type"
                    class="form-control"
                    :id="customerInfo.cpf.name"
                    :name="customerInfo.cpf.name"
                    v-model="customerInfo.cpf.value"
                    :disabled="customerInfo.cpf.disabled"
                    :required="customerInfo.cpf.required"
                    v-mask="'###.###.###-##'"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.cep.name">
                    {{ customerInfo.cep.label }}
                  </label>
                  <input
                    :type="customerInfo.cep.type"
                    class="form-control"
                    :id="customerInfo.cep.name"
                    :name="customerInfo.cep.name"
                    v-model="customerInfo.cep.value"
                    @keyup="getCepInfo()"
                    :required="customerInfo.cep.required"
                    v-mask="'#####-###'"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.rua.name">
                    {{ customerInfo.rua.label }}
                  </label>
                  <input
                    :type="customerInfo.rua.type"
                    class="form-control"
                    :id="customerInfo.rua.name"
                    :name="customerInfo.rua.name"
                    v-model="customerInfo.rua.value"
                    :required="customerInfo.rua.required"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.numero_residencia.name">
                    {{ customerInfo.numero_residencia.label }}
                  </label>
                  <input
                    :type="customerInfo.numero_residencia.type"
                    class="form-control"
                    :id="customerInfo.numero_residencia.name"
                    :name="customerInfo.numero_residencia.name"
                    v-model="customerInfo.numero_residencia.value"
                    :required="customerInfo.numero_residencia.required"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.cidade.name">
                    {{ customerInfo.cidade.label }}
                  </label>
                  <input
                    :type="customerInfo.cidade.type"
                    class="form-control"
                    :id="customerInfo.cidade.name"
                    :name="customerInfo.cidade.name"
                    v-model="customerInfo.cidade.value"
                    :required="customerInfo.cidade.required"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.telefone_1.name">
                    {{ customerInfo.telefone_1.label }}
                  </label>
                  <input
                    :type="customerInfo.telefone_1.type"
                    class="form-control"
                    :id="customerInfo.telefone_1.name"
                    :name="customerInfo.telefone_1.name"
                    v-model="customerInfo.telefone_1.value"
                    :required="customerInfo.telefone_1.required"
                    v-mask="['(##)#####-####', '(##)####-####']"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="form-group">
                  <label :for="customerInfo.telefone_2.name">
                    {{ customerInfo.telefone_2.label }}
                  </label>
                  <input
                    :type="customerInfo.telefone_2.type"
                    class="form-control"
                    :id="customerInfo.telefone_2.name"
                    :name="customerInfo.telefone_2.name"
                    v-model="customerInfo.telefone_2.value"
                    :required="customerInfo.telefone_2.required"
                    v-mask="['(##)#####-####', '(##)####-####']"
                  />
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-12 col--4">
                <button
                  type="submit"
                  class="btn btn-primary d-block text-white"
                >
                  {{ textSubmitButton }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import Breadcrumb from "@/components/Breadcrumb";
import InputHelper from "@/helpers/inputHelper";
import ModalHelper from "@/helpers/modalHelper";
import CustomerRequest from "@/requests/CustomerRequest";

export default {
  components: {
    Breadcrumb: Breadcrumb,
  },

  created() {
    this.customerInfo.telefone_1.value = this.$route.query.telefone_1;
    if (this.$route.params.id) {
      this.getCustomerInfo();
    }
  },

  data() {
    return {
      customerId: this.$route.params.id,
      headerTitle: "Cadastro de Cliente",
      textSubmitButton: "Cadastrar",
      customerInfo: {
        nome: {
          type: "text",
          label: "Nome",
          name: "nome",
          value: "",
          mask: false,
          required: true,
        },
        cpf: {
          type: "text",
          label: "CPF",
          name: "cpf",
          disabled: false,
          value: "",
          mask: true,
          required: false,
        },
        cep: {
          type: "text",
          label: "CEP",
          name: "cep",
          value: "",
          mask: true,
          required: false,
        },
        rua: {
          type: "text",
          label: "Rua",
          name: "rua",
          value: "",
          mask: false,
          required: false,
        },
        numero_residencia: {
          type: "number",
          label: "Número",
          name: "numero_residencia",
          value: "",
          mask: false,
          required: false,
        },
        cidade: {
          type: "text",
          label: "Cidade",
          name: "cidade",
          value: "",
          mask: false,
          required: false,
        },
        telefone_1: {
          type: "text",
          label: "Telefone 1",
          name: "telefone_1",
          value: "",
          mask: true,
          required: true,
        },
        telefone_2: {
          type: "text",
          label: "Telefone 2",
          name: "telefone_2",
          value: "",
          mask: true,
          required: false,
        },
      },
      redirectUrl: "/pedidos/cadastrar",
      dataToSend: {},
    };
  },
  methods: {
    disabledFieldsToEdit() {
      this.customerInfo.telefone_1.disabled = true;
    },

    generateDataToSend() {
      for (let key in this.customerInfo) {
        if (this.customerInfo[key].mask) {
          this.dataToSend[key] = InputHelper.cleanVal(
            this.customerInfo[key].value
          );
        } else {
          this.dataToSend[key] = this.customerInfo[key].value;
        }
      }
    },

    submitForm() {
      this.generateDataToSend();
      if (this.customerId) {
        new CustomerRequest()
          .update(this.customerId, this.dataToSend)
          .then(() => {
            ModalHelper.modalSuccess("Muito bom!", [
              "Os dados do cliente foram editado com sucesso!",
            ]);
            this.$router.push({
             path: `${this.redirectUrl}` ,
            });
          })
          .catch(function (error) {
            ModalHelper.modalError(error.data);
          });
      } else {
        new CustomerRequest()
          .create(this.dataToSend)
          .then((response) => {
            ModalHelper.modalSuccess("Muito bom!", [
              "Cliente cadastrado com sucesso!",
            ]);
            this.$router.push({
              path: `${this.redirectUrl}/${response.data.id}` ,
            });
          })
          .catch(function (error) {
            ModalHelper.modalError(error.data);
          });
      }
    },

    getCepInfo() {
      const unmaksCep = InputHelper.cleanVal(this.customerInfo.cep.value);
      if (unmaksCep.length === 8) {
        let url = `https://viacep.com.br/ws/${unmaksCep}/json/`;
        axios
          .get(url)
          .then((response) => {
            this.customerInfo.rua.value = response.data.logradouro;
            this.customerInfo.cidade.value = response.data.localidade;
            InputHelper.setValidInputs(this.customerInfo.cep.name);
            InputHelper.setValidInputs(this.customerInfo.rua.name);
            InputHelper.setValidInputs(this.customerInfo.cidade.name);
          })
          .catch(function (error) {
            ModalHelper.modalError(error.data);
          });
      }
    },

    getCustomerInfo() {
      new CustomerRequest().get(this.customerId)
        .then((response) => {
          this.fillFields(response.data);
          this.disabledFieldsToEdit();
          this.setEditTitles();
          this.setEditRoute();
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },

    setEditTitles() {
      this.headerTitle = "Atualização Cadastral de Cliente";
      this.textSubmitButton = "Atualizar";
    },

    setEditRoute() {
      this.redirectUrl = "/clientes/listar";
    },

    fillFields(customerData) {
      this.customerInfo.nome.value = customerData.nome;
      this.customerInfo.cpf.value = customerData.cpf;
      this.customerInfo.cep.value = customerData.cep;
      this.customerInfo.rua.value = customerData.rua;
      this.customerInfo.numero_residencia.value =
        customerData.numero_residencia;
      this.customerInfo.cidade.value = customerData.cidade;
      this.customerInfo.telefone_1.value = customerData.telefone_1;
      this.customerInfo.telefone_2.value = customerData.telefone_2;
    },
  },
};
</script>
