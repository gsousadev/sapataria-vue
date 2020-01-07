<template>
  <section class="home">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8">
        <CpfSearchUser />
        <HomeMenu />
      </div>
    </div>
  </section>
</template>

<script>
import HomeMenu from "@/components/HomeMenu.vue";
import CpfSearchUser from "@/components/CpfSearchUser.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HomeMenu,
    CpfSearchUser
  }
};
</script>
