<template>
  <div class="row">
    <div class="col-12">
      <Breadcrumb currentPageName="Novo Pedido"></Breadcrumb>
      <div class="row justify-content-center">
        <div class="col-12">
          <form>
            <h4 class="bg-dark p-3 text-white">Dados do cliente</h4>
            <div class="row">
              <div class="col-12 col-sm-6" v-for="(input,index) in form.customer" :key="index" v-on:keyup="refreshInputs($event)">
                <div class="form-group">
                  <label :for="input.name">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                  />
                </div>
              </div>
            </div>
             <h4 class="bg-dark p-3 text-white">Dados do pedido</h4>
            <div class="row">
              <div class="col-12 col-sm-6" v-for="(input,index) in form.order" :key="index">
                <div class="form-group" v-if="input.type == 'text'">
                  <label :for="input.name">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                  />
                </div>
                <div class="form-group" v-else-if="input.type == 'select'">
                  <label :for="input.name">{{input.label}}</label>
                  <select :name="input.name" class="form-control">
                    <option v-for="(option,index) in input.options" :key="index" :value="index">
                        {{option}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="row justify-content-center">
                <div class="col-4">
                  <a class="btn btn-primary d-block text-white" v-on:click="submitForm()">Cadastrar Pedido</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcramb";

export default {
  components: {
    Breadcrumb: Breadcrumb
  },
  data() {
    return {
      form: {
        customer: [
          {
            type: "text",
            label: "Nome",
            name: "nome",
            value: ""
          },
          {
            type: "text",
            label: "CPF",
            name: "cpf",
            value: ""
          },
          {
            type: "text",
            label: "CEP",
            name: "cep",
            value: ""
          },
          {
            type: "text",
            label: "Rua",
            name: "rua",
            value: ""
          },
          {
            type: "text",
            label: "Número",
            name: "numero",
            value: ""
          },
          {
            type: "text",
            label: "Cidade",
            name: "cidade",
            value: ""
          }
        ],
        order: [
          {
            type: "select",
            label: "Selecione o tipo do calçado",
            name: "tipo_produto",
            value: "",
            options: {
              bota: "Bota",
              sandalia: "Sandália",
              social: "Sapato Social",
              tenis: "Tênis"
            }
          },
          {
            type: "select",
            label: "Gênero do produto",
            name: "genero_produto",
            value: "",
            options: {
              m: "Masculino",
              w: "Feminino",
              u: "Unissex"
            }
          },
          {
            type: "text",
            label: "Cor",
            name: "cor_produto",
            value: ""
          },
          {
            type: "text",
            label: "Tamanho",
            name: "tamanho_produto",
            value: ""
          },
          {
            type: "text",
            label: "Valor",
            name: "valor_produto",
            value: ""
          }
        ]
      }
    };
  },
  methods: {
    submitForm:function(){
      this.form.customer.forEach(element => {
        if(element.value == ''){
          document.getElementById(element.name).classList.add('is-invalid');
        }
      });
    },
    refreshInputs:function(event){
      
      
    }
  }
};
</script>