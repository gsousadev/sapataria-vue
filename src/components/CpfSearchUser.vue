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
import InputHelper from "@/helpers/inputHelper";
import ModalHelper from "@/helpers/modalHelper";
import CustomerRequest from "@/requests/CustomerRequest";

export default {
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
        new CustomerRequest()
          .getByCpf(InputHelper.cleanVal(searchText))
          .then((response) => {
            const data = response.data;

            if (data.deleted_at) {
              ModalHelper.modalWarning("Cliente desativado!", [
                "Para prosseguir com a venda ative o cliente.",
              ]);
            } else {
              ModalHelper.modalSuccess("Cliente encontrado!", [
                "Redirecionando para cadastro de pedido.",
              ]);
              router.push({
                path: "/pedidos/cadastrar/",
                query: { cpf: data.cpf },
              });
            }
          })
          .catch(() => {
            ModalHelper.modalWarning("Cliente não encontrado!", [
              "Redirecionando para cadastro de cliente.",
            ]);
            router.push({
              path: "/clientes/cadastrar",
              query: { cpf: searchText },
            });
          });
      } else {
        InputHelper.setInvalidInputs("cpfInput");
      }
    },
  },
};
</script>
