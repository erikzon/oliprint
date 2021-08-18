<template>
  <transition name="entradaContactanos">
    <div
      v-if="show"
      class="
        px-2
        mx-3
        py-3
        lg:py-1
        mb-6
        bottom-0
        right-0
        bg-white
        lg:w-96
        rounded-xl
        shadow-lg
        items-center
        flex
        lg:fixed
        space-x-2
      "
    >
      <button
        class="
          font-extrabold
          rounded-full
          bg-white
          text-purple-800
          border border-purple-800
          hover:text-white
          hover:bg-purple-800
          px-2
          mr-2
          -mt-2
          absolute
          lg:relative
          top-0
          right-0
          equis
        "
        @click="show = false"
      >
        X
      </button>
      <div class="flex-shrink-0 bg-color-white">
        <img class="h-16 w-16" src="../assets/oliprint2.svg" />
      </div>
      <div>
        <span class="text-xl font-bold text-black">Contactanos</span>
        <p class="text-gray-600 text-lg">Sera un gusto atenderte 😊</p>
      </div>
      <button
        class="
          px-2
          text-purple-800
          font-medium
          rounded-full
          border border-purple-800
          hover:text-white
          hover:bg-purple-800
          hover:border-transparent
        "
        h
      >
        <a href="https://api.whatsapp.com/send?phone=50242112585&text=Hola"
          >ENVIAR MENSAJE</a
        >
      </button>
    </div>
  </transition>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "@vue/runtime-core";
import router from "@/router";
export default {
  setup() {
    onMounted(() => {
      setTimeout(() => {
        state.show = true;
      }, 2500);
    });
    //https://api.whatsapp.com/send?phone=50242112585&text=Hola
    const state = reactive({
      show: false,
    });

    return { ...toRefs(state) };
  },
  watch: {
    $route(to, from) {
      if (to.name == "Home") {
        this.show = true;
      } else if (to.name == "Cotizar") {
        this.show = false;
      }

    },
  },
};
</script>

<style scoped>
.entradaContactanos-enter-active {
  transition-duration: 1000ms;
  /*transform: translateY(0px);*/
  /*transition-duration: 500ms;
  transform: translateX(-10px);*/
}

/* .entradaContactanos-leave-active {
  /*transform: translateX(10px);
  animation-duration: 2s;
  transition-duration: 2000ms;
  transform: translateY(0px);
} */

.entradaContactanos-enter-from {
  opacity: 0;
}
</style>