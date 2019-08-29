<template>
<section class="home">
  <div class="row justify-content-center">
     <div class='col-3'>
       <img class='img-fluid' src="../assets/images/brand_text_transparent_1000x1000.png"/>
     </div>
  </div>
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
