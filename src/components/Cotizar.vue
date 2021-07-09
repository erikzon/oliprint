<template>
  <div class="leading-loose px-6 lg:mx-auto lg:px-0">
    <form class="max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl">
      <p
        class="
          text-xl
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
        ¿Algun proyecto en mente?
      </p>
      <div class="">
        <label class="block text-sm text-purple-800" for="cus_name">Nombre</label>
        <input
          class="w-full px-2 py-2 text-gray-600 bg-gray-200 inputs"
          id="cus_name"
          name="cus_name"
          type="text"
          required=""
          placeholder="Escribe tu nombre"
          aria-label="Name"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-purple-800" for="cus_email">Email</label>
        <input
          class="w-full px-2 py-2 text-gray-600 bg-gray-200 inputs"
          id="cus_email"
          name="cus_email"
          type="text"
          required=""
          placeholder="Escribe tu correo"
          aria-label="Email"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-purple-800" for="cus_email"
          >Mensaje</label
        >
        <textarea
          class="inputs w-full px-2 py-2 text-gray-600 bg-gray-200"
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
  @apply shadow-inner rounded-tl-3xl rounded-br-3xl;
}
</style>