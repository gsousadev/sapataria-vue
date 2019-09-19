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
      let store = this.$store;
      let router = this.$router;
      let searchText = this.searchText;
      if (InputHelper.checkInput(this.searchText, "cpf")) {
        axios
          .get(`${process.env.VUE_APP_API_URL}/customer/check-cpf`, {
            params: {
              cpf: searchText
            }
          })
          .then(function(response) {
            alert(response.data.message);
            if (response.data.codeMessage.data != false) {
              let customerId = response.data.codeMessage.data
              router.push({ path: "/pedidos/cadastro", query:{data:customerId}});
            } else {
              router.push({ path: "/clientes/cadastro", query:{cpf:searchText}});
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        InputHelper.setInvalidInputs("cpfInput");
      }
    }
  }
};
</script>
