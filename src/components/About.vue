<template>
  <span class="titulos-Nosotros">Nuestra Mision</span>
  <p class="text-Nosotros">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
    pede justo.
  </p>
  <span class="titulos-Nosotros">Nuestra Vision</span>
  <p class="text-Nosotros">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
    pede justo.
  </p>
  <span class="titulos-Nosotros">Objetivo</span>
  <p class="text-Nosotros">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
    pede justo.
  </p>
</template>

<script>
export default {};
</script>

<style>
.titulos-Nosotros {
  @apply text-5xl
            font-extrabold
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-green-400
            to-blue-500
            text-left
            mx-6;
            
}

.text-Nosotros {
  @apply text-left mx-6 my-4
}
</style>