<template>
  <div class="grid grid-cols-3 gap-3">
    <img
      alt="oliprint logo"
      src="../assets/oliprint.svg"
      class="row-span-2 col-span-2 lg:w-80 lg:h-14 mx-auto"
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
  @apply text-purple-800
          font-light
          text-lg
          rounded-full
          border border-purple-800
          hover:text-white
          hover:bg-purple-800
          hover:border-transparent
          lg:-my-1
          lg:mx-36
          
}
</style>