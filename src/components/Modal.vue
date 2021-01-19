<template>
  <div name="modal" v-if="getModalInfo.isVisible == true">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="header">
            <img
              class="img-fluid alert-icon"
              v-if="getModalInfo.type == 'error'"
              src="@/assets/images/error.png"
            />
            <img
              class="img-fluid alert-icon"
              v-if="getModalInfo.type == 'success'"
              src="@/assets/images/success.png"
            />
            <img
              class="img-fluid alert-icon"
              v-if="getModalInfo.type == 'warning'"
              src="@/assets/images/warning.png"
            />
            <h3 class="title">{{getModalInfo.title}}</h3>
          </div>
          <div class="text">
            <p v-for="(text, index) in getModalInfo.textLines" :key="index">{{text}}</p>
          </div>
          <div class="footer">
            <button
              class="btn btn-danger"
              v-if="getModalInfo.cancelButton"
              @click="changeModalData({isVisible:false})"
            >Cancelar</button>
            <button
              class="btn btn-primary"
              v-if="getModalInfo.confirmButton"
              @click="changeModalData({isVisible:false})"
            >OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Modal",
  props: {
    title: String,
    textLines: Array,
    confirmButton: Boolean,
    cancelButton: Boolean
  },

  computed: {
    ...mapGetters(["getModalInfo"])
  },

  methods: {
    ...mapMutations(["changeModalData"])
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  text-align: center;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  & .header{
    & .title, .text, .footer{
      padding: 10px 0;
    }

    & .alert-icon{
        width: 90px;
    }
  }
}
</style>
