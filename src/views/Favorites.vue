<template>
    <h1 class="text-white font-bold text-4xl">Bienvenido {{user.email}}</h1>
</template>

<script setup>
import getUser from "../composables/getUser";

const { user } = getUser();
</script>

<style>

</style>