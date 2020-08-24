<template>
<transition name="fade">
  <div class="loader-area" v-if="loaderVisibility == true">
    <div class="loader-wrapper">
      <div class="loader"></div>
    </div>
  </div>
</transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loader",
  computed: {
    ...mapGetters(["loaderVisibility"]),
  },
};
</script>

<style lang="scss" scoped>
.fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.loader-area {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: table;
  transition: opacity 0.3s ease;
  & .loader-wrapper {
    width: 50px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    & .loader {
      widows: 100%;
      height: 100%;
      margin: 0 auto;
      border: 5px solid #f3f3f3; /* Light grey */
      border-top: 5px solid #3498db; /* Blue */
      border-radius: 50%;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>