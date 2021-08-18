<template>
  <div class="leading-loose px-6 lg:mx-auto lg:px-10 lg:w-1/3">
    <form class="max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl">
      <p
        class="
          text-4xl
          font-bold
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-green-400
          to-blue-500
          -mt-2
          mb-4
        "
      >
        ¿Algún proyecto en mente?
      </p>
      <div class="">
        <label class="block text-xl text-purple-800" for="cus_name"
          >Nombre</label
        >
        <input
          class="inputs"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Escribe tu nombre"
          aria-label="Name"
        />
      </div>
      <div class="mt-2">
        <label class="block text-xl text-purple-800" for="cus_email"
          >Email</label
        >
        <input
          class="inputs"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Escribe tu correo"
          aria-label="Email"
        />
      </div>
      <div class="mt-2">
        <label class="block text-xl text-purple-800" for="cus_email"
          >Mensaje</label
        >
        <textarea
          class="inputs"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Escribe tu mensaje aqui."
          aria-label="Email"
          rows="3"
        />
      </div>
      <div class="mt-4">
        <button
          class="
            px-4
            py-1
            text-purple-800
            font-light
            tracking-wider
            rounded-full
            border border-purple-800
            hover:text-white
            hover:bg-purple-800
          "
          type="submit"
        >
          ENVIAR
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.inputs {
  @apply shadow-inner 
        rounded-tl-2xl 
        rounded-br-2xl 
        border-2 
        border-opacity-0
        w-full 
        px-2 
        py-2 
        text-gray-900 
        bg-gray-200
        text-lg;
}
.inputs:focus {
  @apply border-2 border-purple-600 outline-none;
  /* outline:none!important; */
}
</style>