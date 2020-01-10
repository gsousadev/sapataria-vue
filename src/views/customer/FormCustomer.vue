<template>
  <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <form v-on:submit.prevent="submitForm()">
            <h4 class="bg-primary p-2 text-white rounded">{{headerTitle}}</h4>
            <div class="row my-3">
              <div class="col-12 col-sm-6" v-for="(input,index) in inputs" :key="index">
                <div class="form-group" v-if="input.type == 'text' && index == 'zip_code'">
                  <label :for="input.name">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
                    v-on:keyup="getCepInfo()"
                  />
                </div>
                <div
                  class="form-group"
                  v-else-if="(input.type == 'text' || input.type == 'number' ) && index != 'zip_code'"
                >
                  <label :for="input.index">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
                    :value="input.value"
                    v-on:keyup="refreshInputs(index)"
                  />
                </div>
                <div class="form-group" v-else-if="input.type == 'select'">
                  <label :for="input.name">{{input.label}}</label>
                  <select
                    :name="input.name"
                    :id="input.name"
                    v-model="input.value"
                    class="form-control"
                    v-on:keyup="refreshInputs(index)"
                  >
                    <option
                      v-for="(option,index) in input.options"
                      :key="index"
                      :value="index"
                    >{{option}}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-12 col--4">
                <button
                  type="submit"
                  class="btn btn-primary d-block text-white"
                >{{textSubmitButton}}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcramb";
import axios from "axios";
import InputHelper from "@/helpers/inputHelper";

export default {
  components: {
    Breadcrumb: Breadcrumb
  },

  created() {
    this.inputs.cpf.value = this.$route.query.cpf;
  },

  data() {
    return {
      headerTitle: 'Cadastro de Cliente',
      textSubmitButton: 'Cadastrar',
      inputs: {
        name: {
          type: "text",
          label: "Nome",
          name: "nome",
          value: ""
        },
        cpf: {
          type: "text",
          label: "CPF",
          name: "cpf",
          value: "",
          regex: RegExp("^([0-9]{11})$"),
        },
        zip_code: {
          type: "text",
          label: "CEP",
          name: "cep",
          value: "",
          regex: RegExp("([0-9]{5,5}[-]?[0-9]{3})$")
        },
        street: {
          type: "text",
          label: "Rua",
          name: "rua",
          value: ""
        },
        number: {
          type: "number",
          label: "Número",
          name: "numero_residencia",
          value: ""
        },
        city: {
          type: "text",
          label: "Cidade",
          name: "cidade",
          value: ""
        },
        phone_1: {
          type: "text",
          label: "Telefone 1",
          name: "telefone_1",
          value: ""
        },
        phone_2: {
          type: "text",
          label: "Telefone 2",
          name: "telefone_2",
          value: ""
        }
      },
      requestUrl: '/customer',
      redirectUrl: '/pedidos/cadastrar'
    };
  },
  methods: {
    submitForm: function() {
      this.valid = true;
      let bodyFormData = new FormData();

      for (let element in this.inputs) {
        this.validFields(this.inputs[element]);
        let elementName = this.inputs[element].name,
          elementValue = this.inputs[element].value;
        bodyFormData.set(elementName, elementValue);
      }
      if (this.valid) {
        axios
          .post(process.env.VUE_APP_API_URL + this.requestUrl, bodyFormData)
          .then(response => {
            const responseBody = response.data;
            console.log(responseBody);
            alert(responseBody.message);
            this.$router.push({
              path: this.redirectUrl,
              query: { cpf: this.inputs.cpf.value }
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("Não enviar");
      }
    },
    refreshInputs: function(elementIndex) {
      if (this.inputs[elementIndex]) {
        this.validFields(this.inputs[elementIndex]);
      }
    },
    getCepInfo: function() {
      let _self = this;
      let unmaksCep = this.inputs.zip_code.value.replace("-", "");
      if (unmaksCep.length == 8) {
        let url = `https://viacep.com.br/ws/${unmaksCep}/json/`;
        axios
          .get(url)
          .then(function(response) {
            _self.inputs.street.value = response.data.logradouro;
            _self.inputs.city.value = response.data.localidade;
            InputHelper.setValidInputs(_self.inputs.zip_code.name);
            InputHelper.setValidInputs(_self.inputs.street.name);
            InputHelper.setValidInputs(_self.inputs.city.name);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    validFields: function(element) {
      if (element.value != "") {
        if (element.regex) {
          if (element.regex.test(element.value)) {
            InputHelper.setValidInputs(element.name);
          } else {
            InputHelper.setInvalidInputs(element.name);
            this.valid = false;
          }
        } else {
          InputHelper.setValidInputs(element.name);
        }
      } else {
        InputHelper.setInvalidInputs(element.name);
        this.valid = false;
      }
    }
  }
};
</script>