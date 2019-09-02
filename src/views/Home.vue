<template>
<section class="home">
  <HomeMenu/>
</section>
</template>

<script>
import HomeMenu from '@/components/HomeMenu.vue'; 

export default {
  name:'Home',
  data(){
    return{
    }
  },
  components: {
    HomeMenu,
  },
}
</script>
