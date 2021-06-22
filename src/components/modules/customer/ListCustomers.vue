<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb currentPageName="Lista de Clientes"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table
              class="table table-striped text-center table-sm bg-white rounded"
            >
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Telefone 1</th>
                  <th scope="col">Telefone 2</th>
                  <th scope="col">Novo Pedido</th>
                  <th scope="col">Atualizar Cliente</th>
                  <th scope="col">Excluir Cliente</th>
                </tr>
              </thead>
              <tbody v-if="this.items.length != 0">
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{ item.nome }}</td>
                  <td>{{ OutputHelper.cpf(item.cpf) }}</td>
                  <td>{{ item.cidade }}</td>
                  <td>{{ OutputHelper.phone(item.telefone_1) }}</td>
                  <td>{{ OutputHelper.phone(item.telefone_2) }}</td>
                  <td>
                    <button @click="newOrder(item.id)">
                      <span class="material-icons">playlist_add</span>
                    </button>
                  </td>
                  <td>
                    <button @click="editItem(item.id)">
                      <span class="material-icons">edit</span>
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
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "@/helpers/modalHelper";
import RequestHelper from "@/helpers/requestHelper";
import { mapMutations } from "vuex";
import CustomerRequest from "@/requests/CustomerRequest";

export default {
  created() {
    this.loaderVisibility(true);
    this.indexCustomers();
  },
  data() {
    return {
      OutputHelper,
      items: [],
    };
  },
  components: {
    Breadcrumb: Breadcrumb,
  },

  methods: {
    ...mapMutations(["loaderVisibility"]),
    indexCustomers() {
      const filters = RequestHelper.buildQueryFilter(this.$route.query);
      new CustomerRequest()
        .index(filters)
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
    newOrder(cliente_id) {
      this.$router.push({
        path: `/pedidos/cadastrar/${cliente_id}`,
      });
    },
    deleteItem(itemId, localIndex) {
      new CustomerRequest()
        .delete(itemId)
        .then(() => {
          ModalHelper.modalSuccess("Ok!", ["Cliente excluido com sucesso!"]);
          this.items.splice(localIndex, 1);
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
    editItem(itemId) {
      this.$router.push({ path: `/clientes/editar/${itemId}` });
    },
  },
};
</script>
