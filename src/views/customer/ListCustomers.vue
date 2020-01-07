<template>
  <div class="row">
    <div class="col-12">
      <Breadcrumb currentPageName="Lista de Clientes"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-striped text-center table-sm">
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
              <tr v-for="(item,index) in items" :key="index">
                <td>{{item.nome}}</td>
                <td>{{OutputHelper.cpf(item.cpf)}}</td>
                <td>{{item.cidade}}</td>
                <td>{{OutputHelper.phone(item.telefone_1)}}</td>
                <td>{{OutputHelper.phone(item.telefone_2)}}</td>
                <td>
                  <button @click="editItem(item.id)">
                    <i class="material-icons">edit</i>
                  </button>
                  |
                  <button @click="deleteItem(item.id)">
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
import Breadcrumb from "@/components/Breadcramb";
import axios from "axios";
import OutputHelper from "@/helpers/outputHelper";

export default {
  mounted() {
    axios.get(process.env.VUE_APP_API_URL + this.requestUrl).then(response => {
      this.items = response.data.data;
    });
  },

  data() {
    return {
      items: [],
      requestUrl: "/customer/index",
      OutputHelper: OutputHelper
    };
  },
  components: {
    Breadcrumb: Breadcrumb
  },

  methods: {
    deleteItem: itemId => {
      
    },
    editItem: itemId => {
      console.log('edit');
    }
  }
};
</script>