<template>
   <form v-on:submit.prevent="submitForm()">
            <h4 class="bg-primary p-2 text-white rounded">{{headerTitle}}</h4>
            <div class="row my-3">
              <div class="col-12 col-sm-6" v-for="(input,index) in inputs" :key="index">
                <div class="form-group" v-if="input.type == 'text' && index == 'zip_code'">
                  <label :for="input.name">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
                    v-on:keyup="getCepInfo()"
                  />
                </div>
                <div class="form-group" v-else-if="(input.type == 'text' || input.type == 'number' ) && index != 'zip_code'">
                  <label :for="input.index">{{input.label}}</label>
                  <input
                    :type="input.type"
                    class="form-control"
                    :id="input.name"
                    :name="input.name"
                    v-model="input.value"
                    :value="input.value"
                    v-on:keyup="refreshInputs(index)"
                  />
                </div>
                <div class="form-group" v-else-if="input.type == 'select'">
                  <label :for="input.name">{{input.label}}</label>
                  <select
                    :name="input.name"
                    :id="input.name"
                    v-model="input.value"
                    class="form-control"
                    v-on:keyup="refreshInputs(index)"
                  >
                    <option
                      v-for="(option,index) in input.options"
                      :key="index"
                      :value="index"
                    >{{option}}</option>
                  </select>
                </div>
              </div>
            </div>
            
              <div class="row justify-content-center">
                <div class="col-12 col--4">
                  <button type="submit" class="btn btn-primary d-block text-white">{{textSubmitButton}}</button>
                </div>
              </div>
       
          </form>
</template>

<script>
import axios from "axios";
import InputHelper from "@/helpers/inputHelper";

export default {
    name: "FormTwoColumns",
    props: {
        requestUrl:String,
        headerTitle:String,
        inputs:Object,
        textSubmitButton:String,
        redirectUrl:String
    },
    data(){
      return{
        valid:false
      }
    },
    methods: {

   submitForm: function() {
      this.valid = true;
      const _self = this;
      let bodyFormData = new FormData();

      for (let element in this.inputs) {
        this.validFields(this.inputs[element]);
        let elementName = this.inputs[element].name,
            elementValue = this.inputs[element].value;
            bodyFormData.set(elementName,elementValue);
      }
      if (this.valid) {
        axios
          .post(this.requestUrl, bodyFormData)
          .then(function(response) {
            alert(response.data.message);
            console.log(response.data.codeMessage)
            _self.$router.push({path:this.redirectUrl, query:{data:response.data.codeMessage.data}});
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("Não enviar");
      }
    },
    refreshInputs: function(elementIndex) {
      if (this.inputs[elementIndex]) {
        this.validFields(this.inputs[elementIndex]);
      }
    },
    getCepInfo: function() {
      let _self = this;
      let unmaksCep = this.inputs.zip_code.value.replace("-", "");
      if (unmaksCep.length == 8) {
        let url = `https://viacep.com.br/ws/${unmaksCep}/json/`;
        axios
          .get(url)
          .then(function(response) {
            _self.inputs.street.value = response.data.logradouro;
            _self.inputs.city.value = response.data.localidade;
            InputHelper.setValidInputs(_self.inputs.zip_code.name);
            InputHelper.setValidInputs(_self.inputs.street.name);
            InputHelper.setValidInputs(_self.inputs.city.name);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    validFields: function(element) {
      if (element.value != "") {
        if (element.regex) {
          if (element.regex.test(element.value)) {
            InputHelper.setValidInputs(element.name);
          } else {
            InputHelper.setInvalidInputs(element.name);
            this.valid = false;
          }
        } else {
          InputHelper.setValidInputs(element.name);
        }
      } else {
        InputHelper.setInvalidInputs(element.name);
        this.valid = false;
      }
    },
  }
}
</script>

<style>

</style>