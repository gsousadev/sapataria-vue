<template>
  <form
    class="row py-3 justify-content-center"
    v-on:submit.prevent="checkUser()"
  >
    <div class="col-12 col-lg-5 mb-3">
      <the-mask
        type="text"
        name="phone"
        id="phoneInput"
        v-model="searchText"
        class="form-control w-100"
        placeholder="Pesquisar cliente pelo telefone"
        aria-describedby="helpId"
        mask="(##) #####-####"
      />
    </div>
    <div class="col-12 col-lg-3">
      <button type="submit" class="btn btn-primary w-100">
        Consultar Cliente
      </button>
    </div>
  </form>
</template>

<script>

import ModalHelper from "@/helpers/modalHelper";
import RequestHelper from "@/helpers/requestHelper";
import CustomerRequest from "@/requests/CustomerRequest";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
     ...mapMutations(["loaderVisibility"]),
     
    checkUser: function () {
      const router = this.$router;
      const searchText = this.searchText;

      const filters = RequestHelper.buildQueryFilter({telefone_1:searchText});
      new CustomerRequest()
        .index(filters)
        .then((response) => {
          if(response.data.length !== 0 ){
            ModalHelper.modalSuccess("Um ou mais clientes encontrados com esse telefone", ["Redirecionando para lista de clientes"]);
            router.push({
              path: "/clientes/listar",
              query: {telefone_1:searchText},
            });
          }else{
             ModalHelper.modalWarning("Nenhum resultado encontado", ["Redirecionando para o cadastro de clientes"]);
             router.push({
              path: "/clientes/cadastrar",
               query: {telefone_1:searchText},
             });
          }
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        })
        .finally(() => {
          this.loaderVisibility(false);
        });
    },
  },
};
</script>
