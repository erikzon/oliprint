<template>
  <div class="px-6 leading-loose lg:mx-4 bg-white rounded shadow-xl">
    <h1
      class="
        text-xl
        font-bold
        bg-clip-text
        text-transparent
        bg-gradient-to-r
        from-green-400
        to-blue-500
        mt-4
        mb-4
      "
    >
      Ultimos mensajes recibidos en la pestaña "cotizar"
    </h1>
    <div v-if="error" class="bg-red-600">
      HABO UN ERROR AL INTENTAR OBTENER LOS ULTIMOS MENSAJES
    </div>
    <div v-else>
      <div
        v-for="doc in docs"
        :key="doc"
        class="
          my-2
          py-0
          px-4
          bg-gray-200
          shadow-inner
          rounded-tl-3xl rounded-br-3xl
        "
      >
        <span class="text-purple-900 font-bold">Nombre: </span> {{ doc.name }}
        <br />
        <span class="text-purple-900 font-bold"> Correo: </span>
        {{ doc.email }} <br />
        <span class="text-purple-900 font-bold"> Mensaje: </span>
          {{ doc.message }}
        
        <br />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import getDocuments from "../composables/getCollection";

const { docs, error, load } = getDocuments();

onMounted(() => {
  load("Cotizaciones");
});
</script>

<style>
</style>