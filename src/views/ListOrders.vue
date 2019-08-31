<template>
  <div class="row">
    <div class="col-12">
      <Breadcrumb currentPageName="Lista de Pedidos"></Breadcrumb>
      <div class="row">
        <div class="col-12">
          <b-table striped hover :items="items"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/Breadcramb';

export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  },
  components:{
    "Breadcrumb":Breadcrumb
  }
};
</script>