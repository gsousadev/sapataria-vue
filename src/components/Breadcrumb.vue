<template>
  <div class="row">
    <div class="col-12">
      <nav aria-label="breadcrumb bg-transparent rounded">
        <ol class="breadcrumb rounded bg-white">
          <li class="breadcrumb-item">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ currentPageName }}
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    currentPageName: String,
  },
};
</script>
