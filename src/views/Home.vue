<template>
  <div class="home">
    <HomeMenu/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeMenu from '@/components/HomeMenu.vue'; // @ is an alias to /src

@Component({
  components: {
    HomeMenu,
  },
})
export default class Home extends Vue {}
</script>
