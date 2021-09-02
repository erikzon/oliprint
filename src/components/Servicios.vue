<template>
  <div class="lg:w-3/5 lg:mx-auto lg:my-8">
    <div class="tarjetas">
      <span class="titulos-Nosotros">Impresion 3D</span>
      <div class="flex-grow lg:grid lg:grid-cols-6 justify-items-center">
        <div class="lg:col-span-4">
          <p class="text-Nosotros">
            Con la capacidad te traer a la realidad virtualmente cualquier
            objeto que podamos imaginar, esta tecnica mediante el derretimiento
            de plastico bio-degradable lo coloca de manera sincronizada el cual
            puede imprimir objetos de hasta 40cm de altura. Entre las ideas para
            su utlizacion son las macetas, figuras, stands, letreros y un largo
            etc.
          </p>
          <router-link :to="{ name: 'Galeria', params: { filterTag: '3D' } }" class="botonGaleria"
            >VISITAR GALERIA #3D</router-link
          >
        </div>
        <div class="contenedor-imagen-servicios">
          <img src="../assets/groot3d.webp" alt="" class="imagen-servicios" />
        </div>
      </div>
    </div>
    <div class="tarjetas">
      <span class="titulos-Nosotros">Sublimación</span>
      <div class="flex-grow lg:grid lg:grid-cols-6 justify-items-center">
        <div class="lg:col-span-4">
          <p class="text-Nosotros">
            La Sublimación es una tecnica que permite la insercion de imagenes,
            fotografias y logotipos en vestimentas, este incluye desde gorras,
            tazas y pines hasta playeras, sudaderas y blusas. Estas pueden ser
            de algodon y poliester. <br />
            Tambien colocamos vinil textil para una mayor definicion.
          </p>
          <router-link :to="{ name: 'Galeria', params: { filterTag: 'sublimacion' } }" class="botonGaleria"
            >VISITAR GALERIA #SUBLIMACION</router-link
          >
        </div>
        <div class="contenedor-imagen-servicios">
          <img
            src="../assets/sublimacion.webp"
            alt=""
            class="imagen-servicios"
          />
        </div>
      </div>
    </div>
    <div class="tarjetas">
      <span class="titulos-Nosotros">Grabado Laser</span>
      <div class="flex-grow lg:grid lg:grid-cols-6 justify-items-center">
        <div class="lg:col-span-4">
          <p class="text-Nosotros">
            Mediante un laser de gran potencia y altisima precision podemos
            generar imagenes sobre caucho, madera, papel, aceto. Esta tecnica
            permite incluso grabar fotografias dando un toque unico a nuestros
            productos. Debido a que la tecnica graba directamente el material este efecto perdura indefinidamente sobre el material lo que crea un recuerdo de larguisima duracion.
          </p>
          <router-link :to="{ name: 'Galeria', params: { filterTag: 'laser' } }" class="botonGaleria"
            >VISITAR GALERIA #LASER</router-link
          >
        </div>
        <div class="contenedor-imagen-servicios">
          <img
            src="../assets/gaudyLaser.webp"
            alt=""
            class="imagen-servicios"
          />
        </div>
      </div>
    </div>
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
          text-2xl
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
  </div>
</template>

<script setup>
</script>

<style scoped>
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
  @apply text-left mx-3 text-xl;
}

.tarjetas {
  @apply shadow-inner bg-gray-50 rounded-tl-3xl rounded-br-3xl p-3 m-4;
}

.imagen-servicios {
  transform: rotate(2deg);
  @apply rounded border-purple-900 border-8 shadow-xl mx-auto;
}

.contenedor-imagen-servicios {
  @apply m-6 lg:mt-0 lg:w-48 lg:col-span-2;
}

.botonGaleria {
  @apply text-purple-900
          lg:text-lg
          rounded-full
          py-2
          px-4          
          border border-purple-900
          hover:text-white
          hover:bg-purple-900
}
</style>