
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const favoritoStore = defineStore("favoritos", () => {
    const arrayFavoritos = ref([]);

    if (localStorage.getItem('favoritos')) {
        arrayFavoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const agregarFavorito = (poke) => {
        arrayFavoritos.value.push(poke)
        localStorage.setItem('favoritos',JSON.stringify(arrayFavoritos.value))
    }
    const eliminarFavorito = (poke) => {
       // const pos = arrayFavoritos.value.indexOf(poke);
       // arrayFavoritos.value.splice(pos, 1);
       arrayFavoritos.value = arrayFavoritos.value.filter((i) => i !== poke);
       localStorage.setItem('favoritos',JSON.stringify(arrayFavoritos.value))
    }
    const existeFavorito = (poke) => {
        return arrayFavoritos.value.includes( poke )
    }
    return {
        arrayFavoritos, agregarFavorito, eliminarFavorito, existeFavorito
    };
});