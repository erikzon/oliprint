<template>
  <div class="grid grid-cols-3 gap-3 headercolor">
    <img
      alt="oliprint logo"
      src="../assets/oliprint.svg"
      class="row-span-2 col-span-2 lg:w-80 lg:h-16 mx-auto cursor-pointer"
      @click="this.$router.push('/')"
    />
    <button @click="this.$router.push('About')" class="botonHeader">NOSOTROS</button>
    <button @click="this.$router.push('Cotizar')" class="botonHeader"   >COTIZAR</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.botonHeader {
  @apply text-purple-200
          pt-1
          lg:text-xl
          text-base
          rounded-full
          border border-purple-200
          hover:text-purple-900
          hover:bg-white
          lg:-my-1
          lg:mx-36         
}
.headercolor {
  background-color: rgb(33, 10, 54) !important;
}
</style>