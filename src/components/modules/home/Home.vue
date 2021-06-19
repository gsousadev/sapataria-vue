<template>
  <section class="home">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8">
        <PhoneSearchUser />
        <div class="row py-3 justify-content-center">
          <IconButton
            url="/pedidos/listar"
            iconClass="list"
            buttonText="Listar Pedidos"
          />
          <IconButton
            url="/clientes/cadastrar"
            iconClass="playlist_add"
            buttonText="Cadastrar Clientes"
          />
          <IconButton
            url="/clientes/listar"
            iconClass="list"
            buttonText="Listar Clientes"
          />
           <IconButton
            url="/produtos/cadastrar"
            iconClass="playlist_add"
            buttonText="Cadastrar Produtos"
          />
           <IconButton
            url="/produtos/listar"
            iconClass="list"
            buttonText="Listar Produtos"
          />
          <IconButton
            url="/servicos/cadastrar"
            iconClass="playlist_add"
            buttonText="Cadastrar Serviços"
          />
           <IconButton
            url="/servicos/listar"
            iconClass="list"
            buttonText="Listar Serviços"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import PhoneSearchUser from "@/components/PhoneSearchUser";
import IconButton from "@/components/IconButton";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    IconButton,
    PhoneSearchUser,
  },
};
</script>
