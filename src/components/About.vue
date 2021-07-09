<template>
  <div class="lg:w-1/2 lg:mx-auto">
    <div class="redes grid grid-cols-3 gap-2 justify-items-center tarjetas">
      <span
        class="
          col-span-3
          font-bold
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-green-400
          to-blue-500
        "
        >SIGUENOS EN NUESTRAS REDES SOCIALES</span
      >
      <a href="https://www.facebook.com/oliprintgt" target="_blank">
        <img
          alt="facebook oliprint"
          src="../assets/iconmonstr-facebook-4.svg"
          class="col-span-1 h-10"
        />
      </a>
      <a href="https://instagram.com/oliprintgt" target="_blank">
        <img
          alt="instagram oliprint"
          src="../assets/iconmonstr-instagram-11.svg"
          class="col-span-1 h-10"
        />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=50242112585&text=Hola"
        target="_blank"
      >
        <img
          alt="whatsapp oliprint"
          src="../assets/iconmonstr-whatsapp-1.svg"
          class="col-span-1 h-10"
        />
      </a>
    </div>
    <div class="tarjetas">
      <span class="titulos-Nosotros">✔ Nuestra Mision</span>
      <p class="text-Nosotros">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo.
      </p>
    </div>
    <div class="tarjetas">
      <span class="titulos-Nosotros">✔ Nuestra Vision</span>
      <p class="text-Nosotros">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies. <br />
        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
        enim. Donec pede justo.
      </p>
    </div>
    <div class="tarjetas">
      <span class="titulos-Nosotros">✔ Objetivo</span>
      <p class="text-Nosotros">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes pede justo.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.titulos-Nosotros {
  @apply text-4xl
            font-bold
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-green-400
            to-blue-500
            text-left
            -m-4;
}

.text-Nosotros {
  @apply text-left mx-3;
}

.tarjetas {
  @apply shadow-inner bg-gray-50 rounded-tl-3xl rounded-br-3xl p-3 m-3 text-gray-800 font-light;
}
</style>