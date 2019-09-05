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
      const _self = this;
      if (InputHelper.checkInput(this.searchText, "cpf")) {
        axios
          .get("http://localhost:9090/customer/check-cpf", {
            params: {
              cpf: this.searchText
            }
          })
          .then(function(response) {
            if (response.data.registredCustomer != false) {
              _self.$store.dispatch("setCustomerId", {
                customerId: response.data.registredCustomer
              });
              _self.$router.push({ path: "/pedidos/cadastro" });
            } else {
              _self.$router.push({ path: "/clientes/cadastro" });
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
