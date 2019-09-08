<template>
  <div class="row justify-content-center">
    <div class="col-sm-12 col-lg-6">
      <Breadcrumb currentPageName="Cadastro de Cliente"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
         <FormTwoColumns
            requestUrl="http://localhost:9090/customer/create"
            headerTitle="Cadastro de Cliente"
            :inputs="this.fields"
            textSubmitButton="Cadastrar Cliente"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcramb';
import FormTwoColumns from "@/components/FormTwoColumns";


export default {
  components: {
    Breadcrumb: Breadcrumb,
    FormTwoColumns: FormTwoColumns
  },

 created() {
    this.fields.cpf.value = this.$route.query.cpf;
},

  data() {
    return { 
        fields: {
          name: {
            type: "text",
            label: "Nome",
            name: "name",
            value: ""
          },
          cpf: {
            type: "text",
            label: "CPF",
            name: "cpf",
            value: "",
            regex: RegExp(
              "^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$"
            )
          },
          zip_code: {
            type: "text",
            label: "CEP",
            name: "zip_code",
            value: "",
            regex: RegExp("([0-9]{5,5}[-]?[0-9]{3})$")
          },
          street: {
            type: "text",
            label: "Rua",
            name: "street",
            value: ""
          },
          number: {
            type: "number",
            label: "Número",
            name: "number",
            value: ""
          },
          city: {
            type: "text",
            label: "Cidade",
            name: "city",
            value: ""
          }
        },
    };
  }
};
</script>