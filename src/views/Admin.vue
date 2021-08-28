<template>
  <div class="lg:flex lg:justify-center lg:gap-4">
    <h2 class="text-white text-2xl font-bold mt-1">TABLERO ADMINISTRATIVO</h2>
    <div
      class="
        bg-white
        px-4
        mx-2
        mb-3
        rounded-tl-3xl rounded-br-3xl
        grid grid-cols-4
        cursor-pointer

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
  </div>
  <div class="lg:grid lg:grid-cols-2">
    <FormularioAgregarContenido />
    <UltimasCotizaciones />
  </div>
</template>

<script setup>
import FormularioAgregarContenido from "../components/FormularioAgregarContenido.vue";
import UltimasCotizaciones from "../components/UltimasCotizaciones.vue";
import useLogout from "../composables/useLogout";
import { useRouter } from "vue-router";


const router = useRouter();
const { logout, error, isPending } = useLogout();

const handleLogout = async () => {
  await logout();
  router.push("/");
};
</script>

<style>
</style>