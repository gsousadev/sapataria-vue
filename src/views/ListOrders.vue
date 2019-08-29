<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Inicio</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Listagem de pedidos</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <b-table striped hover :items="items"></b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>