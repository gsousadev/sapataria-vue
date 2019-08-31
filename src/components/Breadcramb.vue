<template>
  <div class="row">
    <div class="col-12">
      <nav aria-label="breadcrumb bg-transparent">
        <ol class="breadcrumb bg-primary rounded-0">
          <li class="breadcrumb-item">
            <router-link to="/" class='text-light'>Inicio</router-link>
          </li>
          <li class="breadcrumb-item active text-light" aria-current="page">{{currentPageName}}</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
    name:'Breadcrumb',
    props:{
        currentPageName:String
    }
};
</script>

<style>
</style>