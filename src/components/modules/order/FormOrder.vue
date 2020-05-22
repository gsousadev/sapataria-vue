<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <h4 class="bg-primary p-2 text-white rounded">{{ headerTitle }}</h4>

          <div class="bg-white p-3 mt-3 rounded">
            <h4>Adicionar item</h4>
            <hr />
            <div class="box-order-items">
              <div class="order-item" data-index="1">
                <div class="row mt-3">
                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <label :for="orderItemsInputs.type.name">{{
                        orderItemsInputs.type.label
                      }}</label>
                      <select
                        :name="orderItemsInputs.type.name"
                        :id="orderItemsInputs.type.name"
                        v-model="orderItemsInputs.type.value"
                        class="form-control"
                      >
                        <option
                          v-for="(option, index) in orderItemsInputs.type
                            .options"
                          :key="index"
                          :value="index"
                          >{{ option }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <label :for="orderItemsInputs.color.name">{{
                        orderItemsInputs.color.label
                      }}</label>
                      <select
                        :name="orderItemsInputs.color.name"
                        :id="orderItemsInputs.color.name"
                        v-model="orderItemsInputs.color.value"
                        class="form-control"
                      >
                        <option
                          v-for="(option, index) in orderItemsInputs.color
                            .options"
                          :key="index"
                          :value="index"
                          >{{ option }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-12 col-sm-2">
                    <div class="form-group">
                      <label :for="orderItemsInputs.genre.name">{{
                        orderItemsInputs.genre.label
                      }}</label>
                      <select
                        :name="orderItemsInputs.genre.name"
                        :id="orderItemsInputs.genre.name"
                        v-model="orderItemsInputs.genre.value"
                        class="form-control"
                      >
                        <option
                          v-for="(option, index) in orderItemsInputs.genre
                            .options"
                          :key="index"
                          :value="index"
                          >{{ option }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-12 col-sm-2">
                    <div class="form-group">
                      <label :for="orderItemsInputs.size.name">{{
                        orderItemsInputs.size.label
                      }}</label>
                      <select
                        :name="orderItemsInputs.size.name"
                        :id="orderItemsInputs.size.name"
                        v-model="orderItemsInputs.size.value"
                        class="form-control"
                      >
                        <option
                          v-for="(option, index) in orderItemsInputs.size
                            .options"
                          :key="index"
                          :value="index"
                          >{{ option }}</option
                        >
                      </select>
                    </div>
                  </div>

                  <div class="col-12 col-sm-2">
                    <div class="form-group">
                      <label :for="orderItemsInputs.total.name">{{
                        orderItemsInputs.total.label
                      }}</label>
                      <input
                        :type="orderItemsInputs.total.type"
                        class="form-control"
                        :id="orderItemsInputs.total.name"
                        :name="orderItemsInputs.total.name"
                        v-model="orderItemsInputs.total.value"
                      />
                    </div>
                  </div>
                </div>
                <div class="row m-t-3">
                  <div class="col-12">
                    <div class="form-group">
                      <label :for="orderItemsInputs.description.name">{{
                        orderItemsInputs.description.label
                      }}</label>
                      <textarea
                        class="form-control"
                        :id="orderItemsInputs.description.name"
                        :name="orderItemsInputs.description.name"
                        v-model="orderItemsInputs.description.value"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 justify-content-end">
                  <div class="col-12 col-md-3">
                    <button
                      @click="addItem()"
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
            <h4>Itens</h4>
            <hr />
            <div class="order-items-box" v-if="orderItems.length == 0">
              <p class="text-center">Nenhum item adicionado</p>
            </div>
            <div class="order-items-box table-responsive" v-else>
              <table class="table table-borderless text-center">
                <tr>
                  <th>#</th>
                  <th>Tipo</th>
                  <th>Cor</th>
                  <th>Gênero</th>
                  <th>Tamanho</th>
                  <th>Valor</th>
                  <th>Excluir</th>
                </tr>

                <tr v-for="(item, index) in orderItems" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ orderItemsInputs.type.options[item.tipo] }}</td>
                  <td>{{ orderItemsInputs.genre.options[item.genero] }}</td>
                  <td>{{ orderItemsInputs.color.options[item.cor] }}</td>
                  <td>{{ orderItemsInputs.size.options[item.tamanho] }}</td>
                  <td>{{ OutputHelper.money(item.valor) }}</td>
                  <td>
                    <button @click="removeItem(index)">
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
                      <label :for="orderInputs.cpf.name">{{
                        orderInputs.cpf.label
                      }}</label>
                      <input
                        :type="orderInputs.cpf.type"
                        class="form-control"
                        :id="orderInputs.cpf.name"
                        :name="orderInputs.cpf.name"
                        v-model="orderInputs.cpf.value"
                        v-mask="'###.###.###-##'"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <label :for="orderInputs.discount.name">
                        {{ orderInputs.discount.label }}</label
                      >
                      <input
                        :type="orderInputs.discount.type"
                        class="form-control"
                        :id="orderInputs.discount.name"
                        :name="orderInputs.discount.name"
                        v-model="orderInputs.discount.value"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-3">
                    <div class="form-group">
                      <button
                        @click="discountCalculate()"
                        class="btn btn-primary w-100"
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row align-items-end">
                  <div class="col-sm-6 col-12">
                    <div class="form-group">
                      <label :for="orderInputs.deliveryDate.name">{{
                        orderInputs.deliveryDate.label
                      }}</label>
                      <input
                        :type="orderInputs.deliveryDate.type"
                        class="form-control"
                        :id="orderInputs.deliveryDate.name"
                        :name="orderInputs.deliveryDate.name"
                        v-model="orderInputs.deliveryDate.value"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-12">
                    <div class="form-group">
                      <label :for="orderInputs.deliveryHour.name">{{
                        orderInputs.deliveryHour.label
                      }}</label>
                      <input
                        :type="orderInputs.deliveryHour.type"
                        class="form-control"
                        :id="orderInputs.deliveryHour.name"
                        :name="orderInputs.deliveryHour.name"
                        v-model="orderInputs.deliveryHour.value"
                        :min="orderInputs.deliveryHour.min"
                        :max="orderInputs.deliveryHour.max"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-6">
                <div class="text-center">
                  <span class="total-value-label display-3">{{
                    OutputHelper.money(orderInputs.total.value)
                  }}</span>
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
import axios from "axios";

export default {
  components: {
    Breadcrumb: Breadcrumb,
  },

  created() {
    this.orderInputs.cpf.value = this.$route.query.cpf;
  },

  data() {
    return {
      OutputHelper,
      headerTitle: "Cadastro de Pedido",
      orderInputs: {
        cpf: {
          type: "text",
          label: "CPF",
          name: "cpf",
          value: "",
          regex: RegExp("^([0-9]{11})$"),
        },
        discount: {
          type: "text",
          label: "Desconto",
          name: "desconto",
          value: 0,
          regex: RegExp("[+-]?([0-9]*[.])?[0-9]+"),
        },
        deliveryDate: {
          type: "date",
          label: "Data de Entrega",
          name: "data_entrega",
        },
        deliveryHour: {
          type: "time",
          label: "hora da Entrega",
          name: "hora_entrega",
          min: "07:00",
          max: "18:00",
        },
        total: {
          type: "text",
          label: "Total",
          name: "valor_pedido",
          value: 0,
          regex: RegExp("[+-]?([0-9]*[.])?[0-9]+"),
        },
      },
      orderItemsInputs: {
        type: {
          type: "select",
          label: "Tipo",
          name: "tipo",
          value: "bota",
          options: {
            bota: "Bota",
            sandalia: "Sandália",
            social: "Sapato Social",
            tenis: "Tênis",
          },
        },
        genre: {
          type: "select",
          label: "Gênero",
          name: "genero",
          value: "m",
          options: {
            m: "Masculino",
            f: "Feminino",
            u: "Unissex",
          },
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
            vinho: "Vinho",
          },
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
            100: "100",
          },
        },
        description: {
          label: "Descrição do Serviço",
          name: "descricao",
          value: "",
        },
        total: {
          type: "text",
          label: "Valor",
          name: "valor_item",
          value: 0,
          regex: RegExp("[+-]?([0-9]*[.])?[0-9]+"),
        },
      },
      orderItems: [],
      requestUrl: "/order/",
      redirectUrl: "/pedidos/listar",
    };
  },
  methods: {
    getDataToSend() {
      return {
        cpf: InputHelper.cleanVal(this.orderInputs.cpf.value),
        data_entrega: this.orderInputs.deliveryDate.value,
        hora_entrega: this.orderInputs.deliveryHour.value,
        desconto: InputHelper.money(this.orderInputs.discount.value),
        valor: this.orderInputs.total.value,
        itens: this.orderItems,
      };
    },
    submitForm: function() {
      const url = process.env.VUE_APP_API_URL + this.requestUrl;
      const data = this.getDataToSend();
      axios
        .post(url, data)
        .then((response) => {
          const data = response.data;
          alert("Pedido cadastrado com sucesso!");
          this.$router.push({ path: this.redirectUrl });
        })
        .catch((error) => {
          const data = error.response.data;

          const modalOptions = {
            title: data.message,
            textLines: data.errors,
            confirmButton: true,
            cancelButton: false,
          };

          this.$parent.modalData = modalOptions;
          this.$parent.toggleModal();
        });
    },
    addItem() {
      this.orderItems.push({
        tipo: this.orderItemsInputs.type.value,
        genero: this.orderItemsInputs.genre.value,
        cor: this.orderItemsInputs.color.value,
        tamanho: this.orderItemsInputs.size.value,
        valor: InputHelper.money(this.orderItemsInputs.total.value),
        descricao: this.orderItemsInputs.description.value,
      });
      this.refreshTotal();
    },
    removeItem(index) {
      this.orderItems.splice(index, 1);
      this.refreshTotal();
    },

    discountCalculate() {
      this.refreshTotal();
      if (
        InputHelper.money(this.orderInputs.discount.value) >
          this.orderInputs.total.value ||
        isNaN(InputHelper.money(this.orderInputs.discount.value))
      )
        this.orderInputs.total.value = 0;
      else {
        this.orderInputs.total.value -= InputHelper.money(
          this.orderInputs.discount.value
        );
      }
    },

    refreshTotal() {
      this.orderInputs.total.value = 0;
      this.orderItems.forEach((item, index) => {
        this.orderInputs.total.value += InputHelper.money(item.valor);
      });
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
    },
  },
};
</script>
