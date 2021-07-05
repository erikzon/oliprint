<template>
  <div class="grid grid-cols-3 m-4 gap-3 ">
    <img
      alt="oliprint logo"
      src="../assets/oliprint.svg"
      class="row-span-2 col-span-2"
      @click="this.$router.push('/')"
    />
    <span @click="this.$router.push('About')" class="botonHeader">Nosotros</span>
    <span @click="this.$router.push('Cotizar')" class="botonHeader"   >Cotizar</span
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.botonHeader {
  @apply text-purple-800
          font-bold
          text-xl
          rounded-full
          border border-purple-800
          hover:text-white
          hover:bg-purple-800
          hover:border-transparent
}
</style>