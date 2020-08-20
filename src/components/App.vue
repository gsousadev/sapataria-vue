<template>
  <div id="app">
    <Modal></Modal>

    <div class="container-fluid my-3">
      <div class="row justify-content-center">
        <div class="col-6 col-md-2">
          <router-link to="/">
            <img
              class="img-fluid"
              src="@/assets/images/brand_text_transparent_1000x1000.png"
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

export default {
  data() {
    return {};
  },
  components: {
    Modal,
  },
};
</script>
