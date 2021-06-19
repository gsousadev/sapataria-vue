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
                v-for="(field, index) in serviceInfo"
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
import ServiceRequest from "@/requests/ServiceRequest";

export default {
  components: {
    Breadcrumb: Breadcrumb,
  },

  created() {
    if (this.$route.params.id) {
      this.getServiceInfo();
    }
  },

  data() {
    return {
      serviceId: this.$route.params.id,
      headerTitle: "Cadastro de Serviço",
      textSubmitButton: "Cadastrar",
      serviceInfo: {
        nome: {
          type: "text",
          label: "Nome",
          name: "nome",
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
      redirectUrl: "/servicos/listar",
      dataToSend: {},
    };
  },
  methods: {
    generateDataToSend() {
      for (let key in this.serviceInfo) {
        if (this.serviceInfo[key].mask) {
          this.dataToSend[key] = InputHelper.cleanVal(
            this.serviceInfo[key].value
          );
        } else {
          this.dataToSend[key] = this.serviceInfo[key].value;
        }
      }
      this.dataToSend.slug = InputHelper.createSlug(this.serviceInfo.nome.value);
    },

    submitForm() {
      this.generateDataToSend();
      if (this.serviceId) {
        new ServiceRequest()
          .update(this.serviceId, this.dataToSend)
          .then(() => {
            ModalHelper.modalSuccess("Muito bom!", [
              "Os dados do serviço foram editados com sucesso!",
            ]);
            this.$router.push({
              path: this.redirectUrl,
            });
          })
          .catch(function (error) {
            ModalHelper.modalError(error.data);
          });
      } else {
        new ServiceRequest()
          .create(this.dataToSend)
          .then(() => {
            ModalHelper.modalSuccess("Muito bom!", [
              "Serviço cadastrado com sucesso!",
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

    getServiceInfo() {
      new ServiceRequest()
        .get(this.serviceId)
        .then((response) => {
          this.fillFields(response.data);
          this.setEditTitles();
          this.setEditRoute();
        })
        .catch((error) => {
          ModalHelper.modalError(error.data);
        });
    },

    setEditTitles() {
      this.headerTitle = "Atualização Cadastral de Serviços";
      this.textSubmitButton = "Atualizar";
    },

    setEditRoute() {
      this.redirectUrl = "/servicos/listar";
    },

    fillFields(serviceData) {
      this.serviceInfo.nome.value = serviceData.nome;
      this.serviceInfo.descricao.value = serviceData.descricao;
      this.serviceInfo.valor.value = serviceData.valor;
    },
  },
};
</script>
