<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Sapataria Sr.Osvaldo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/novo-pedido" class="nav-link">Novo Pedido</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/pedidos" class="nav-link">Pedidos</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
</style>
