<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb currentPageName="Lista de Pedidos"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped text-center table-sm bg-white rounded">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Quantidade de itens</th>
                  <th scope="col">Valor Total</th>
                  <th scope="col">Desconto</th>
                  <th scope="col">Data de entrega</th>
                  <th scope="col">Status</th>
                  <th scope="col">Visualizar | Excluir</th>
                </tr>
              </thead>
              <tbody v-if="this.items.length != 0">
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{ item.customer.nome }}</td>
                  <td>{{ OutputHelper.cpf(item.customer.cpf) }}</td>
                  <td>{{ item.items.length }}</td>
                  <td>{{ OutputHelper.money(item.valor) }}</td>
                  <td>{{ OutputHelper.money(item.desconto) }}</td>
                  <td>{{ item.data_entrega }}</td>
                  <td v-html="OutputHelper.status(item.status)" class="text-capitalize"></td>
                  <td>
                    <button @click="showItem(item.id)">
                      <i class="material-icons">description</i>
                    </button>
                    |
                    <button @click="deleteItem(item.id, index)">
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="8">Nenhum dado localizado</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import Api from "@/api";
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "../../../helpers/modalHelper";
import { mapMutations } from "vuex";

export default {
 created() {
    this.loaderVisibility(true);
    this.indexOrders();
  },

  data() {
    return {
      OutputHelper,
      items: [],
    };
  },

  methods: {
    ...mapMutations(["loaderVisibility"]),

    indexOrders() {
      Api.get(`${process.env.VUE_APP_API_URL}/order/index`)
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          ModalHelper.modalWarning(error.response.data)
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },
    deleteItem(itemId, localIndex) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/order/${itemId}`)
        .then((response) => {
          ModalHelper.modalSuccess("Legal", ["Pedido deletado com sucesso!"]);
          this.items.splice(localIndex, 1);
        })
        .catch((error) => {
          ModalHelper.modalError(error.response.data);
        });
    },
    showItem(itemId) {
      this.$router.push({ path: `/pedidos/visualizar/${itemId}` });
    },
  },

  components: {
    Breadcrumb: Breadcrumb,
  },
};
</script>
