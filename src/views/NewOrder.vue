<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-lg-6">
      <Breadcrumb currentPageName="Novo Pedido"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <form>
            <h4 class="bg-primary p-2 text-white">Dados do cliente</h4>
            <div class="row">
              <div
                class="col-12 col-sm-6"
                v-for="(input,index) in form.customer"
                :key="index"
                v-on:keyup="refreshInputs(index)"
              >
                <div class="form-group" v-if="index != 'cep'">
                  <label :for="input.index">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
                    :value="input.value"
                  />
                </div>
                <div class="form-group" v-else>
                  <label :for="input.name">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
                    :value="input.value"
                    v-on:keyup="getCepInfo()"
                  />
                </div>
              </div>
            </div>
            <h4 class="bg-primary p-2 text-white">Dados do pedido</h4>
            <div class="row">
              <div class="col-12 col-sm-6" v-for="(input,index) in form.order" :key="index">
                <div class="form-group" v-if="input.type == 'text'">
                  <label :for="input.name">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
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
            <div class="form-group">
              <div class="row justify-content-center">
                <div class="col-4">
                  <a
                    class="btn btn-primary d-block text-white"
                    v-on:click="submitForm()"
                  >Cadastrar Pedido</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcramb";
import axios from "axios";

export default {
  components: {
    Breadcrumb: Breadcrumb
  },
  data() {
    return {
      form: {
        valid:true,
        customer: {
          nome: {
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
            regex: RegExp(
              "^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$"
            )
          },
          cep: {
            type: "text",
            label: "CEP",
            name: "cep",
            value: "",
            regex: RegExp("([0-9]{5,5}[-]?[0-9]{3})$")
          },
          rua: {
            type: "text",
            label: "Rua",
            name: "rua",
            value: ""
          },
          numero: {
            type: "text",
            label: "Número",
            name: "numero",
            value: ""
          },
          cidade: {
            type: "text",
            label: "Cidade",
            name: "cidade",
            value: ""
          }
        },
        order: {
          tipo_produto: {
            type: "select",
            label: "Selecione o tipo do calçado",
            name: "tipo_produto",
            value: "bota",
            options: {
              bota: "Bota",
              sandalia: "Sandália",
              social: "Sapato Social",
              tenis: "Tênis"
            }
          },
          genero_produto: {
            type: "select",
            label: "Gênero do produto",
            name: "genero_produto",
            value: "m",
            options: {
              m: "Masculino",
              w: "Feminino",
              u: "Unissex"
            }
          },
          cor_produto: {
            type: "text",
            label: "Cor",
            name: "cor_produto",
            value: ""
          },
          tamanho_produto: {
            type: "text",
            label: "Tamanho",
            name: "tamanho_produto",
            value: ""
          },
          valor_produto: {
            type: "text",
            label: "Valor",
            name: "valor_produto",
            value: ""
          }
        }
      }
    };
  },
  methods: {
    submitForm: function() {
      let inputs = {...this.form.customer,...this.form.order};
      this.form.valid = true;
      for(let element in inputs) {
        this.validFields(inputs[element]);
      }
      if(this.form.valid){
        console.log('Pronto para enviar');
      }else{
        console.log('Não enviar');
      }
    },
    refreshInputs: function(elementIndex) {
      if (this.form.customer[elementIndex]) {
        this.validFields(this.form.customer[elementIndex]);
      }
      if (this.form.order[elementIndex]) {
        this.validFields(this.form.order[elementIndex]);
      }
    },
    getCepInfo: function() {
      let _self = this;
      let unmaksCep = this.form.customer.cep.value.replace('-','');
      if (unmaksCep.length == 8) {
        let url = `https://viacep.com.br/ws/${unmaksCep}/json/`;
        axios
          .get(url)
          .then(function(response) {
            _self.form.customer.rua.value = response.data.logradouro;
            _self.form.customer.cidade.value = response.data.localidade;
            _self.setValidInputs(_self.form.customer.cep);
            _self.setValidInputs(_self.form.customer.rua);
            _self.setValidInputs(_self.form.customer.cidade);
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
            this.setValidInputs(element);
          } else {
            this.setInvalidInputs(element); 
            this.form.valid = false;
          }
        } else {
          this.setValidInputs(element);
        }
      } else {
        this.setInvalidInputs(element);
        this.form.valid = false;
      }
    },
    setInvalidInputs: function(element) {
      let htmlElement = document.getElementById(element.name);
      htmlElement.classList.add("is-invalid");
      htmlElement.classList.remove("is-valid");
    },
    setValidInputs: function(element) {
      let htmlElement = document.getElementById(element.name);
      htmlElement.classList.remove("is-invalid");
      htmlElement.classList.add("is-valid");
    }
  }
};
</script>