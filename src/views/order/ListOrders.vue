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
import Breadcrumb from "@/components/Breadcramb";
import axios from "axios";

export default {
  mounted() {
    axios.get(process.env.VUE_APP_API_URL + this.requestUrl).then(response => {
      console.log(response.data.data);
      this.items = response.data.data;
    });
  },

  data() {
    return {
      items: [],
      requestUrl: "/order/index"
    };
  },
  components: {
    Breadcrumb: Breadcrumb
  }
};
</script>