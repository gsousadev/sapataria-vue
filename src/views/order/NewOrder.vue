<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-lg-6">
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
import FormTwoColumns from "@/components/FormTwoColumns";
import InputHelper from "@/helpers/inputHelper";
import axios from "axios";

export default {
  components: {
    Breadcrumb: Breadcrumb,
    FormTwoColumns: FormTwoColumns
  },

  created() {
    this.inputs.customer_cpf.value = this.$route.query.cpf;
  },

  data() {
    return {
      headerTitle: "Cadastro de Pedido",
      textSubmitButton: "Cadastrar",
      inputs: {
        customer_cpf: {
          type: "text",
          label: "CPF",
          name: "cpf",
          value: "",
          regex: RegExp("^([0-9]{11})$")
        },
        type: {
          type: "select",
          label: "Selecione o tipo do calçado",
          name: "tipo",
          value: "bota",
          options: {
            bota: "Bota",
            sandalia: "Sandália",
            social: "Sapato Social",
            tenis: "Tênis"
          }
        },
        genre: {
          type: "select",
          label: "Gênero do produto",
          name: "genero",
          value: "m",
          options: {
            m: "Masculino",
            w: "Feminino",
            u: "Unissex"
          }
        },
        color: {
          type: "select",
          label: "Cor",
          name: "cor",
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
        size: {
          type: "select",
          label: "Tamanho",
          name: "tamanho",
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
        total: {
          type: "text",
          label: "Valor",
          name: "valor",
          value: "",
          regex: RegExp("^[0-9]{1,10}$")
        }
      },
      requestUrl: "/order",
      redirectUrl: "/pedidos/lista"
    };
  },
  methods: {
    submitForm: function() {
      this.valid = true;
      let bodyFormData = {};

      for (let element in this.inputs) {
        this.validFields(this.inputs[element]);
        let elementName = this.inputs[element].name,
          elementValue = this.inputs[element].value;
        bodyFormData.set(elementName, elementValue);
      }
      if (this.valid) {
        axios.post(process.env.VUE_APP_API_URL + this.requestUrl, bodyFormData)
          .then(response => {
            const responseBody = response.data;
            console.log(responseBody);
            alert(responseBody.message);
            this.$router.push({ path: this.redirectUrl });
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