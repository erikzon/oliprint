<template>
  <h1 class="text-white font-bold text-4xl">Bienvenido {{ user.email }}</h1>
  <div
    class="
      bg-white
      mx-auto
      px-4
      my-2
      rounded-tl-3xl rounded-br-3xl
      grid grid-cols-4
    "
    @click="handleLogout"
  >
    <span class="col-span-3 text-xl mt-1 mx-1"> CERRAR SESION </span>
    <img
      alt="login"
      src="../assets/logout.svg"
      class="w-8 h-8 mx-auto lg:mx-0 cursor-pointer col-span-1"
    />
  </div>
  <br />
  <h2 class="text-white font-bold text-xl">
    😥 parece que aun no tienes productos favoritos...
    <router-link
      :to="{ name: 'Galeria' }"
      class="underline hover:text-purple-300"
    >
      VISITAR GALERIA
    </router-link>
  </h2>
</template>

<script setup>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";

const router = useRouter();
const { user } = getUser();
const { logout, error, isPending } = useLogout();

const handleLogout = async () => {
  await logout();
  router.push("/");
};
</script>

<style>
</style>