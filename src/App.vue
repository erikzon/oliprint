<template>
  <div class="flex flex-col h-screen">
    <Header class="shadow-2xl p-2 mb-6 " />
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

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  background-image: radial-gradient(
    circle farthest-corner at 10.2% 55.8%,
    rgb(96, 9, 107) 0%,
    rgb(36, 6, 91) 46.2%,
    rgb(73, 20, 112) 90.1%
  );
  background-size: cover;
}

#app {
  font-family: "Josefin Sans", sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
