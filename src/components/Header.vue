<template>
  <div class="grid grid-cols-3 lg:grid-cols-8 gap-2 lg:gap-3 headercolor">
    <img
      alt="oliprint logo"
      src="../assets/oliprint.svg"
      class="
        lg:row-span-1
        lg:col-span-5
        row-span-1
        col-span-3
        lg:w-80
        lg:h-16
        w-4/5
        mx-auto
        lg:mx-0
        cursor-pointer
      "
      @click="$router.push('/')"
    />
    <button @click="$router.push('Galeria')" class="botonHeader">
      GALERIA
    </button>
    <button @click="$router.push('Cotizar')" class="botonHeader">
      COTIZAR
    </button>
    <div class="lg:border-0 border rounded-full my-auto" @click="handleClick">
      <img
        alt="login"
        src="../assets/account_circle.svg"
        class="lg:w-14 lg:h-14 mx-auto lg:mx-0 cursor-pointer logincolor"
      />
      <span class="text-white lg:hidden">CUENTA</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";

const router = useRouter();
const { user } = getUser();

const handleClick = async () => {
  if (!user) {
    router.push("Login");
  } else {
    router.push("Favorites");
  }
};
</script>

<style>
.botonHeader {
  @apply text-purple-200
          lg:text-lg
          rounded-full
          border border-purple-200
          hover:text-purple-900
          hover:bg-white
          col-span-1 
          lg:h-1/2
          h-2/3 
          lg:w-4/5
          lg:mx-auto
          my-auto;
}
.headercolor {
  background-color: rgb(33, 10, 54) !important;
}
.logincolor:hover {
  filter: invert(18%) sepia(60%) saturate(2252%) hue-rotate(249deg)
    brightness(91%) contrast(111%);
}
</style>