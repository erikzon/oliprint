<template>
  <div class="grid grid-cols-2 lg:grid-cols-4">
    <div v-for="doc in docs" :key="doc.id">
      <div class="producto">
        <div class="thumbnail">
          <img :src="doc.Foto" />
        </div>
        <div class="info">
          <h3 class="text-purple-900 font-bold uppercase">{{ doc.Name }}</h3>
          <p class="text-left">{{ doc.Description }}</p>
        </div>
        <div class="tags mt-3 grid grid-cols-5 ">
          <p class="text-blue-400 underline italic col-span-4">{{ doc.Tags }}</p>
          <span class="col-span-1 cursor-pointer text-2xl">❤</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import getDocuments from "../composables/getCollection";

const { docs, error, load } = getDocuments();

onMounted(() => {
  load("Producto");
});
</script>

<style scoped>
.producto {
  @apply bg-white m-4 p-3 rounded-tl-3xl rounded-br-3xl;
}

.producto:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}
</style>