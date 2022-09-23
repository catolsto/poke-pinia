
<script setup>
   import { RouterLink } from "vue-router";
   import { favoritoStore } from "@/store/favoritos";
   const useFavoritos = favoritoStore();
</script>


<template>
  <div>
    <h1>LISTA DEFAVORITOS:</h1>

    <div v-if="useFavoritos.arrayFavoritos.length === 0">
      <h1>Aun no hay Favoritos!!!</h1>
    </div>
    <div v-else>
      <ul class="list-group">
        <li   
          style="font-size:20px" 
          v-for="(fav, index) in useFavoritos.arrayFavoritos" 
          :key="index" 
          class="list-group-item">
            <RouterLink :to="`/pokemon/${fav}`" >
              {{ fav }}  
            </RouterLink> 
            <button 
              @click="useFavoritos.eliminarFavorito(fav)" 
              class="btn btn-danger btn-space">Eliminar
            </button>
        </li>
      </ul>
    </div>


  </div>
</template>

<style>
  .btn-space {
    margin-right: 5px;
    margin-left: 15px;
}
</style>
