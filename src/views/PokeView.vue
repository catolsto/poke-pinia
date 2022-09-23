<script setup>
    import { ref } from "vue";
    import axios from "axios";
    import { useRoute,useRouter } from "vue-router";
    // Gestion de Favoritos
    import { favoritoStore } from "@/store/favoritos";
    const useFavoritos = favoritoStore();

    const route = useRoute()
    const router = useRouter()
    const pokemon = ref({})
    const atras = () => {
        router.push('/pokemon')
    }
    const getData = async() => {
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.nombre}`)
            pokemon.value =  data
            //console.log(data);
        } catch (error) {
            console.log(error)
            pokemon.value =  null
        }
    }

    getData()

</script>

<template>

    <div v-if="pokemon" class="container">
        <h1>POKEMON {{$route.params.nombre}}</h1>
        <hr>
      
        <img :src="pokemon.sprites?.front_default">
        <p>Nombre:{{ pokemon.name }}</p>
        <br>
        <button 
            @click="useFavoritos.agregarFavorito(pokemon.name)" 
            class="btn btn-warning btn-lg"
            :disabled = useFavoritos.existeFavorito(pokemon.name)
            >Agregar a Favoritos
        </button>
    </div>
    <div v-else class="container">
        <h1>POKEMON NO EXISTE!!!!</h1>
    </div>
    <br>
    <div class="container ">
        <button @click="atras" class="btn btn-secondary col-12">Volver al Listado...</button>
    </div>
</template>

<style>

</style>