<template>
  <div id="app">
    <Modal
      v-show="modalData.isVisible"
      @close="toggleModal"
      :title="modalData.title"
      :textLines="modalData.textLines"
      :confirmButton="modalData.confirmButton"
      :cancelButton="modalData.cancelButton"
    ></Modal>

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
    return {
      modalData: {
        isVisible: false,
        title: "Exemplo de Titulo",
        textLines: ["Exemplo texto 1", "Exemplo texto 2"],
        confirmButton: true,
        cancelButton: false,
      },
    };
  },
  methods: {
    toggleModal() {
      this.modalData.isVisible = !this.modalData.isVisible;
    },
  },
  components: {
    Modal,
  },
};
</script>
