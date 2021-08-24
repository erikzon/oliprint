<template>
  <h1 class="text-white font-bold text-4xl">Bienvenido {{ user.email }}</h1>
  <br>
  <h2 class="text-white font-bold text-xl">
    😥 parece que aun no tienes productos favoritos...
    <router-link :to="{ name: 'Galeria' }" class="underline hover:text-purple-300"> VISITAR GALERIA </router-link>
  </h2>
</template>

<script setup>
import getUser from "../composables/getUser";

const { user } = getUser();
</script>

<style>
</style>