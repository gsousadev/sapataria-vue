<template>
  <section class="home">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8">
        <CpfSearchUser />
        <div class="row py-3 justify-content-center">
          <IconButton
            url="/clientes/listar"
            iconClass="list"
            buttonText="Lista de Clientes"
          />
          <IconButton
            url="/pedidos/listar"
            iconClass="table"
            buttonText="Lista de Pedidos"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CpfSearchUser from "@/components/CpfSearchUser";
import IconButton from "@/components/IconButton";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    IconButton,
    CpfSearchUser,
  },
};
</script>
