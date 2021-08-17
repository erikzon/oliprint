<template>
  <h1 v-if="error">prueba2</h1>
  <div v-else> 
    <h2 v-for="doc in docs" :key="doc">{{doc.mocoso}}</h2>
  </div>
  <div class="flex flex-col h-screen">
    <Header class="shadow-md p-4 mb-6 bg-white " />
    <router-view />
    <div class="fixed inset-x-0 bottom-0">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";

import getDocuments from "./composables/getCollection";
import { onMounted } from "@vue/runtime-core";

const {docs, error, load } = getDocuments();

onMounted(() => {
   load("test");
})

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  @apply bg-gray-100;
}

#app {
  font-family: 'Josefin Sans', sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
