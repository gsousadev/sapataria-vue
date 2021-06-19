<template>
  <div id="app">
    <Modal></Modal>
    <Loader></Loader>
    <Menu></Menu>
    <div class="container-fluid my-3">
      <div class="row justify-content-center">
        <div class="col-4 col-md-2">
          <router-link to="/home">
            <img
              class="img-fluid no-print"
              src="@/assets/images/venda_facil_logo_1400x1400.png"
            />
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";

export default {
  data() {
    return {};
  },
  components: {
    Modal,
    Loader,
    Menu
  },
};
</script>
