<template>

    <div class="container">
        <h1>Error 404</h1>
        <br>
        <button class="btn  btn-primary" @click="inicio">Volver al Inicio con push</button>

        <br><br>

        <RouterLink to="/" class="btn  btn-warning">Volver al Inicio con Router</RouterLink>
    </div>


</template>

<script setup>
    import { useRoute,useRouter } from "vue-router";

   const router = useRouter()
   const inicio = () => {
        router.push('/')
    }

</script>

 