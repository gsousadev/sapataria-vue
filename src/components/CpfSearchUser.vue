<template>
  <form class="row py-3 justify-content-center" v-on:submit.prevent="checkUser()">
    <div class="col-12 col-md-5 mb-3">
      <input
        type="text"
        name="cpf"
        id="cpfInput"
        v-model="searchText"
        v-on:keyup="checkCpf()"
        class="form-control w-100"
        placeholder="Digite o CPF do cliente"
        aria-describedby="helpId"
      />
    </div>
    <div class="col-12 col-md-3">
      <button type="submit" class="btn btn-primary w-100">Consultar Cliente</button>
    </div>
  </form>
</template>

<script>
import IconButton from "@/components/IconButton";
import InputHelper from "@/helpers/inputHelper";
import axios from "axios";

export default {
  components: {
    IconButton
  },
  data() {
    return {
      searchText: "",
      statusCpf: false
    };
  },
  methods: {
    checkCpf: function() {
      if (InputHelper.checkInput(this.searchText, "cpf")) {
        InputHelper.setValidInputs("cpfInput");
      } else {
        InputHelper.setInvalidInputs("cpfInput");
      }
    },
    checkUser: function() {
      const router = this.$router;
      const searchText = this.searchText;
      if (InputHelper.checkInput(this.searchText, "cpf")) {
        axios
          .get(
            `${process.env.VUE_APP_API_URL}/customer/check-cpf/${searchText}`
          )
          .then(function(response) {
            const responseBody = response.data;
            const customer = responseBody.data;
            router.push({
              path: "/pedidos/cadastrar/",
              query: { cpf: customer.cpf }
            });
          })
          .catch(function() {
            router.push({
              path: "/clientes/cadastrar",
              query: { cpf: searchText }
            });
          });
      } else {
        InputHelper.setInvalidInputs("cpfInput");
      }
    }
  }
};
</script>

