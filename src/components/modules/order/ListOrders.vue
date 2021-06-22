<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb currentPageName="Lista de Pedidos"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table
              class="table table-striped text-center table-sm bg-white rounded"
            >
              <thead>
                <tr>
                  <th scope="col">Codigo do Pedido</th>
                  <th scope="col">Nome do Cliente</th>
                  <th scope="col">CPF do Cliente</th>
                  <th scope="col">Data do Pedido</th>
                  <th scope="col">Visualizar</th>
                  <th scope="col">Imprimir</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>
              <tbody v-if="this.items.length != 0">
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{ item.id }}</td>
                  <td>{{ item.customer.nome }}</td>
                  <td>{{ OutputHelper.cpf(item.customer.cpf) }}</td>
                  <td>{{ item.created_at }}</td>
                  <td>
                    <button @click="showItem(item.id)">
                      <i class="material-icons">description</i>
                    </button>
                  </td>
                  <td>
                    <button @click="printOrder(item.id)">
                      <i class="material-icons">print</i>
                    </button>
                  </td>
                  <td>
                    <button @click="deleteItem(item.id, index)">
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="7">Nenhum dado localizado</td>
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
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "../../../helpers/modalHelper";
import { mapMutations } from "vuex";
import OrderRequest from "@/requests/OrderRequest";

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
      new OrderRequest()
        .index()
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },
    deleteItem(itemId, localIndex) {
      new OrderRequest()
        .delete(itemId)
        .then(() => {
          ModalHelper.modalSuccess("Legal", ["Pedido deletado com sucesso!"]);
          this.items.splice(localIndex, 1);
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
    showItem(itemId) {
      this.$router.push({ path: `/pedidos/visualizar/${itemId}` });
    },

    printOrder(itemId){
      this.$router.push({ path: `/pedidos/imprimir/${itemId}` });
    }
  },

  components: {
    Breadcrumb: Breadcrumb,
  },
};
</script>
