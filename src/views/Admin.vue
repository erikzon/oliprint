<template>
  <h2 class="text-white text-2xl font-bold">TABLERO ADMINISTRATIVO</h2>
  <div class="lg:grid lg:grid-cols-2">
    <FormularioAgregarContenido />
    <UltimasCotizaciones />
  </div>
</template>

<script setup>
import FormularioAgregarContenido from "../components/FormularioAgregarContenido.vue";
import UltimasCotizaciones from "../components/UltimasCotizaciones.vue";
</script>

<style>
</style>