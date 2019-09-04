<template>
      <div class="row py-3 justify-content-center">
          <div class="col-12">
            <form>
                <div class="form-group row justify-content-center">
                  <input type="text" name="cpf" id="cpfInput" v-model='searchText' v-on:keyup="checkUser()" class="form-control col-4 mr-3" placeholder="Digite o CPF do cliente" aria-describedby="helpId">
                 <button type="button" class="btn btn-primary col-2" v-on:click="checkUser()">Consultar Usuário</button>
                </div>
            </form>
          </div>
      </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import IconButton from '@/components/IconButton';
import InputHelper from '../../helpers/inputHelper';

export default{
  components: {
    IconButton,
  },
  data(){
    return {
        searchText:""
    }
  },
  methods:{
      checkUser:function(){
          if(InputHelper.checkInput(this.searchText,'cpf')){
              
          axios.post("", {cpf:searchText})
          .then(function(response) {
            console.log(response);
          })
          .catch(function() {
            console.log("erro ao procurar");
          });

          }else{
              InputHelper.setInvalidInputs('cpfInput');
          }
      }
  }
}
</script>
