
<script setup>
    import { ref } from "vue";
    import axios from "axios";
    import { RouterLink } from "vue-router";

    const pokemons = ref([])

    const getData = async() => {
        try {
            const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            pokemons.value = data.results
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    getData()

</script>

<template>
    <div>
        <h1>Lista de Pokemones:</h1>
        <ul class="list-group">
            <li  style="font-size:20px" v-for="(poke, index) in pokemons" :key="index" class="list-group-item"  >
                <router-link :to="`/pokemon/${poke.name}`">
                   {{ poke.name }}
                </router-link>
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
</style>