<template>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-10">
      <Breadcrumb currentPageName="Lista de Serviços"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table
              class="table table-striped text-center table-sm bg-white rounded"
            >
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Data Criação</th>
                  <th scope="col">Atualizar | Excluir</th>
                </tr>
              </thead>
              <tbody v-if="this.items.length != 0">
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{ item.nome }}</td>
                  <td>{{ OutputHelper.money(item.valor) }}</td>
                  <td>{{ item.created_at }}</td>
                  <td>
                    <button @click="editItem(item.id)">
                      <span class="material-icons">edit</span>
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
import OutputHelper from "@/helpers/outputHelper";
import ModalHelper from "@/helpers/modalHelper";
import { mapMutations } from "vuex";
import ServiceRequest from "@/requests/ServiceRequest";

export default {
  created() {
    this.loaderVisibility(true);
    this.indexServices();
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
    indexServices() {
      new ServiceRequest()
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
      new ServiceRequest()
        .delete(itemId)
        .then(() => {
          ModalHelper.modalSuccess("Ok!", ["Serviço excluido com sucesso!"]);
          this.items.splice(localIndex, 1);
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },
    editItem(itemId) {
      this.$router.push({ path: `/servicos/editar/${itemId}` });
    },
  },
};
</script>
