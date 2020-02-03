<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <h4 class="bg-primary p-2 text-white rounded">{{headerTitle}}</h4>

          <section class="bg-white p-3 mt-3 rounded">
            <h3>Informações do Pedido</h3>
            <hr />
            <div class="row">
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Código do Pedido:</strong>
                  {{orderInfo.id}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Nome do Cliente:</strong>
                  {{orderInfo.customer.nome}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>CPF do Cliente:</strong>
                  {{OutputHelper.cpf(orderInfo.customer.cpf)}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Data de Entrega:</strong>
                  {{orderInfo.data_entrega}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Desconto:</strong>
                  {{OutputHelper.money(orderInfo.desconto)}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Valor:</strong>
                  {{OutputHelper.money(orderInfo.valor)}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Valor com desconto:</strong>
                  {{OutputHelper.money(orderInfo.valor -
                  orderInfo.desconto)}}
                </p>
              </div>
              <div class="col-12 col-sm-6">
                <p>
                  <strong>Status:</strong>
                  <span class="text-capitalize h4" v-html="OutputHelper.status(orderInfo.status)" />
                </p>
              </div>
            </div>
          </section>

          <section class="bg-white p-3 mt-3 rounded">
            <h3>Items do Pedido</h3>
            <hr />
            <div class="row justify-content-center">
              <div
                class="col-12 col-sm-4 py-3"
                v-for="(item,index) in orderInfo.items"
                :key="index"
              >
                <div class="border shadow p-2 rounded">
                  <table class="table table-borderless">
                    <tr>
                      <td>
                        <strong>Código do item:</strong>
                      </td>
                      <td>
                        <span class="text-capitalize">{{item.id}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tipo:</strong>
                      </td>
                      <td>
                        <span class="text-capitalize">{{item.tipo}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Cor:</strong>
                      </td>
                      <td>
                        <span class="text-capitalize">{{item.cor}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Gênero:</strong>
                      </td>
                      <td>
                        <span class="text-capitalize">{{OutputHelper.productGenre(item.genero)}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tamanho:</strong>
                      </td>
                      <td>
                        <span class="text-capitalize">{{OutputHelper.productSize(item.size)}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Valor:</strong>
                      </td>
                      <td>
                        <span class="text-capitalize">{{OutputHelper.money(item.valor)}}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Descrição do pedido:</strong>
                      </td>
                      <td>
                        <span class="font-italic">{{item.descricao}}</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-white p-3 mt-3 rounded">
            <h3>Ações</h3>
            <hr />
            <div class="row align-items-end justify-content-between">
              <div class="col-12 col-lg-6">
                <div class="row align-items-end">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Selecione o novo status</label>
                      <select v-model="orderStatusSelect.value" class="form-control">
                        <option
                          v-for="(option,index) in orderStatusSelect.options"
                          :key="index"
                          :value="index"
                        >{{option}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="form-group ml-sm-3 ml-0">
                      <button class="btn btn-primary w-100" @click="updateStatus()">Alterar Status</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-3">
                <div class="form-group d-flex justify-content-end">
                  <button class="btn btn-danger w-100" @click="deleteOrder()">
                    <i class="material-icons">delete</i>Excluir
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcramb";
import OutputHelper from "@/helpers/outputHelper";
import axios from "axios";

export default {
  components: {
    Breadcrumb: Breadcrumb
  },

  created() {
    this.getOrderInfo();
  },

  data() {
    return {
      OutputHelper,
      headerTitle: "Visualizar Pedido",
      redirectUrl: "/pedidos/listar",
      orderId: this.$route.params.id,
      orderInfo: {
        customer: {
          nome: "",
          cpf: ""
        },
        status: ""
      },
      orderStatusSelect: {
        value: OutputHelper.status("pendente", true),
        options: {
          pendente: OutputHelper.status("pendente", true),
          ativo: OutputHelper.status("ativo", true),
          aguardando: OutputHelper.status("aguardando", true),
          entregue: OutputHelper.status("entregue", true)
        }
      }
    };
  },
  methods: {
    getOrderInfo() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/order/${this.orderId}`)
        .then(response => {
          this.orderInfo = response.data.data;
          console.log(this.orderInfo);
          this.orderStatusSelect.value = this.orderInfo.status;
        })
        .catch(error => {
          console.log(error.message);
        });
    },

    getDataToSend() {
      return {
        status: this.orderStatusSelect.value
      };
    },

    deleteOrder() {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/order/${this.orderInfo.id}`)
        .then(response => {
          alert(response.data.message);
          this.$router.push({ path: this.redirectUrl });
        })
        .catch(error => {
          console.log(error.message);
        });
    },

    updateStatus() {
      axios
        .put(
          `${process.env.VUE_APP_API_URL}/order/status/${this.orderId}`,
          this.getDataToSend()
        )
        .then(response => {
          alert(response.data.message);
          this.$router.push({ path: this.redirectUrl });
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>