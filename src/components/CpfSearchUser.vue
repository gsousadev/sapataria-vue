<template>
  <form
    class="row py-3 justify-content-center"
    v-on:submit.prevent="checkUser()"
  >
    <div class="col-12 col-lg-5 mb-3">
      <input
        type="text"
        name="cpf"
        id="cpfInput"
        v-model="searchText"
        @keyup="checkCpf()"
        class="form-control w-100"
        placeholder="Digite o CPF do cliente"
        aria-describedby="helpId"
        v-mask="'###.###.###-##'"
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
import IconButton from "@/components/IconButton";
import InputHelper from "@/helpers/inputHelper";
import ModalHelper from "@/helpers/modalHelper";
import Api from "@/api";
import axios from "axios";
import CustomerRequest from '@/requests/CustomerRequest';

export default {
  components: {
    IconButton,
  },
  data() {
    return {
      InputHelper,
      searchText: "",
      statusCpf: false,
    };
  },
  methods: {
    checkCpf: function () {
      if (InputHelper.checkInput(this.searchText, "cpf")) {
        InputHelper.setValidInputs("cpfInput");
      } else {
        InputHelper.setInvalidInputs("cpfInput");
      }
    },
    checkUser: function () {
      const router = this.$router;
      const searchText = this.searchText;
      if (InputHelper.checkInput(this.searchText, "cpf")) {
        new CustomerRequest().index(`cpf=${InputHelper.cleanVal(searchText)}`).then(
          (response) => {
            const data = response.data;
            if (data.length > 0) {
              ModalHelper.modalSuccess("Cliente encontrado!", [
                "Redirecionando para cadastro de pedido.",
              ]);
              router.push({
                path: "/pedidos/cadastrar/",
                query: { cpf: data[0].cpf },
              });
            } else {
              ModalHelper.modalWarning("Cliente não encontrado!", [
                "Redirecionando para cadastro de cliente.",
              ]);
              router.push({
                path: "/clientes/cadastrar",
                query: { cpf: searchText },
              });
            }
          }
        );
      } else {
        InputHelper.setInvalidInputs("cpfInput");
      }
    },
  },
};
</script>
