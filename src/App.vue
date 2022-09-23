<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

    <nav class="navbar bg-light">
      
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPP</RouterLink>
        <div class="navbar-nav-onlinne">
          <RouterLink to="/" class="btn btn-outline-primary mx-1">INICIO</RouterLink>
          <RouterLink to="/about" class="btn btn-outline-primary mx-1">ACERCA DE</RouterLink>
          <RouterLink to="/pokemon" class="btn btn-outline-primary mx-1">POKEMON</RouterLink>
          <RouterLink to="/favoritos" class="btn btn-outline-primary mx-1">FAVORITOS</RouterLink>
        </div>


    </nav>

    <div class="container mt-5">
      <RouterView />
    </div>

</template>

