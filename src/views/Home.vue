<template>
  <section class="home">
    <CpfSearchUser />
    <HomeMenu />
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
