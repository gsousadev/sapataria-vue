<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb currentPageName="Lista de Clientes"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped text-center table-sm bg-white rounded">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Telefone 1</th>
                  <th scope="col">Telefone 2</th>
                  <th scope="col">Atualizar | Excluir</th>
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
                    <button @click="editItem(item.id)">
                      <i class="material-icons">edit</i>
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
                  <td colspan="6">Nenhum dado localizado</td>
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
import ModalHelper from "@/helpers/modalHelper";
import { mapMutations } from "vuex";

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
     Api.get('/customer/index')
        .then((response) => {
          this.items = response.data;
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },

    deleteItem(itemId, localIndex) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/customer/${itemId}`)
        .then((response) => {
          ModalHelper.modalSuccess("Ok!", ["Cliente excluido com sucesso!"]);
          this.items.splice(localIndex, 1);
        })
        .catch((error) => {
          ModalHelper.modalError(error);
        });
    },
    editItem(itemId) {
      this.$router.push({ path: `/clientes/editar/${itemId}` });
    },
  },
};
</script>
