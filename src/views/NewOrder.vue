<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-lg-6">
      <Breadcrumb currentPageName="Novo Pedido"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <form>
            <h4 class="bg-primary p-2 text-white">Dados do cliente</h4>
            <div class="row my-3">
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
            <div class="row my-3">
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
        valid: true,
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
            type: "number",
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
            type: "select",
            label: "Cor",
            name: "cor_produto",
            value: "preto",
            options: {
              amarelo: "Amarelo",
              azul: "Azul",
              bege: "Bege",
              branco: "Branco",
              bronze: "Bronze",
              caramelo: "Caramelo",
              castanho: "Castanho",
              chocolate: "Chocolate",
              cinza: "Cinza",
              cobre: "Cobre",
              dourado: "Dourado",
              esmeralda: "Esmeralda",
              ferrugem: "Ferrugem",
              laranja: "Laranja",
              lilas: "Lilás",
              marrom: "Marrom",
              mostarda: "Mostarda",
              prata: "Prata",
              preto: "Preto",
              rosa: "Rosa",
              roxo: "Roxo",
              salmao: "Salmão",
              tijolo: "Tijolo",
              verde: "Verde",
              vermelho: "Vermelho",
              vinho: "Vinho"
            }
          },
          tamanho_produto: {
            type: "select",
            label: "Tamanho",
            name: "tamanho_produto",
            value: "p",
            options: {
              p: "Pequeno",
              m: "Médio",
              g: "Grande",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              10: "10",
              11: "11",
              12: "12",
              13: "13",
              14: "14",
              15: "15",
              16: "16",
              17: "17",
              18: "18",
              19: "19",
              20: "20",
              21: "21",
              22: "22",
              23: "23",
              24: "24",
              25: "25",
              26: "26",
              27: "27",
              28: "28",
              29: "29",
              30: "30",
              31: "31",
              32: "32",
              33: "33",
              34: "34",
              35: "35",
              36: "36",
              37: "37",
              38: "38",
              39: "39",
              40: "40",
              41: "41",
              42: "42",
              43: "43",
              44: "44",
              45: "45",
              46: "46",
              47: "47",
              48: "48",
              49: "49",
              50: "50",
              51: "51",
              52: "52",
              53: "53",
              54: "54",
              55: "55",
              56: "56",
              57: "57",
              58: "58",
              59: "59",
              60: "60",
              61: "61",
              62: "62",
              63: "63",
              64: "64",
              65: "65",
              66: "66",
              67: "67",
              68: "68",
              69: "69",
              70: "70",
              71: "71",
              72: "72",
              73: "73",
              74: "74",
              75: "75",
              76: "76",
              77: "77",
              78: "78",
              79: "79",
              80: "80",
              81: "81",
              82: "82",
              83: "83",
              84: "84",
              85: "85",
              86: "86",
              87: "87",
              88: "88",
              89: "89",
              90: "90",
              91: "91",
              92: "92",
              93: "93",
              94: "94",
              95: "95",
              96: "96",
              97: "97",
              98: "98",
              99: "99",
              100: "100"
            }
          },
          valor_produto: {
            type: "text",
            label: "Valor",
            name: "valor_produto",
            value: "",
            regex: RegExp("^[0-9]{1,10}$")
          }
        }
      }
    };
  },
  methods: {
    submitForm: function() {
      let inputs = { ...this.form.customer, ...this.form.order };
      this.form.valid = true;
      var formToSend = [];
      for (let element in inputs) {
        this.validFields(inputs[element]);
        formToSend[inputs[element].name] = inputs[element].value;
      }
      if (this.form.valid) {
        axios({
          url: "http://localhost:8000/",
          method: "post",
          contentType: 'application/json',
          data: formToSend
        }).then(function(response){
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
      } else {
        console.log("Não enviar");
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
      let unmaksCep = this.form.customer.cep.value.replace("-", "");
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