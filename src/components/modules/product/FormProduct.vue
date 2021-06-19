<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8">
      <Breadcrumb :currentPageName="headerTitle"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <form @submit.prevent="submitForm()">
            <h4 class="bg-primary p-2 text-white rounded">{{ headerTitle }}</h4>
            <div class="row my-3">
              <div
                class="col-12 col-sm-6"
                v-for="(field, index) in productInfo"
                :key="index"
                :value="field.value"
              >
                <div class="form-group">
                  <label :for="field.name">
                    {{ field.label }}
                  </label>
                  <input
                    :type="field.type"
                    class="form-control"
                    :id="field.name"
                    :name="field.name"
                    v-model="field.value"
                    :required="field.required"
                  />
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-12 col--4">
                <button
                  type="submit"
                  class="btn btn-primary d-block text-white"
                >
                  {{ textSubmitButton }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import InputHelper from "@/helpers/inputHelper";
import ModalHelper from "@/helpers/modalHelper";
import ProductRequest from "@/requests/ProductRequest";

export default {
  components: {
    Breadcrumb: Breadcrumb,
  },

  created() {
    if (this.$route.params.id) {
      this.getProductInfo();
    }
  },

  data() {
    return {
      productId: this.$route.params.id,
      headerTitle: "Cadastro de Produto",
      textSubmitButton: "Cadastrar",
      productInfo: {
        nome: {
          type: "text",
          label: "Nome",
          name: "nome",
          value: "",
          required: true,
        },
        estoque: {
          type: "number",
          label: "Estoque",
          name: "estoque",
          value: "",
          required: true,
        },
        descricao: {
          type: "text",
          label: "Descrição",
          name: "descricao",
          value: "",
          required: true,
        },
        valor: {
          type: "number",
          label: "Valor",
          name: "valor",
          value: "",
          required: true,
        },
      },
      redirectUrl: "/produtos/listar",
      dataToSend: {},
    };
  },
  methods: {
    generateDataToSend() {
      for (let key in this.productInfo) {
        if (this.productInfo[key].mask) {
          this.dataToSend[key] = InputHelper.cleanVal(
            this.productInfo[key].value
          );
        } else {
          this.dataToSend[key] = this.productInfo[key].value;
        }
      }

       this.dataToSend.slug = InputHelper.createSlug(this.productInfo.nome.value);
    },

    submitForm() {
      this.generateDataToSend();
      if (this.productId) {
        new ProductRequest()
          .update(this.productId, this.dataToSend)
          .then(() => {
            ModalHelper.modalSuccess("Muito bom!", [
              "Os dados do produto foram editados com sucesso!",
            ]);
            this.$router.push({
              path: this.redirectUrl,
            });
          })
          .catch(function (error) {
            ModalHelper.modalError(error.data);
          });
      } else {
        new ProductRequest()
          .create(this.dataToSend)
          .then(() => {
            ModalHelper.modalSuccess("Muito bom!", [
              "Produto cadastrado com sucesso!",
            ]);
            this.$router.push({
              path: this.redirectUrl,
            });
          })
          .catch(function (error) {
            ModalHelper.modalError(error.data);
          });
      }
    },

    getProductInfo() {
      new ProductRequest()
        .get(this.productId)
        .then((response) => {
          this.fillFields(response.data);
          this.disabledFieldsToEdit();
          this.setEditTitles();
          this.setEditRoute();
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },

    setEditTitles() {
      this.headerTitle = "Atualização Cadastral de Cliente";
      this.textSubmitButton = "Atualizar";
    },

    setEditRoute() {
      this.redirectUrl = "/clientes/listar";
    },

    fillFields(productData) {
      this.productInfo.nome.value = productData.nome;
      this.productInfo.estoque.value = productData.estoque;
      this.productInfo.descricao.value = productData.descricao;
      this.productInfo.valor.value = productData.valor;
    },
  },
};
</script>
