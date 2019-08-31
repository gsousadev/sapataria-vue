<template>
<section class="home">
  <HomeMenu/>
</section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeMenu from '@/components/HomeMenu.vue'; 


@Component({
  data(){
    return{
    }
  },
  components: {
    HomeMenu,
  },
})
export default class Home extends Vue {}
</script>
