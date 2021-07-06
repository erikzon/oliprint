<template>
  <transition name="entradaContactanos">
    <div
      v-if="show"
      class="
        px-4
        mx-4
        py-2
        mb-4
        bottom-0
        right-0
        bg-white
        rounded-xl
        shadow-md
        flex
        items-center
        space-x-4
      "
    >
      <div
        class="
          font-medium
          text-base
          rounded-full
          bg-white
          text-purple-800
          border border-purple-800
          px-2
          mr-2
          -mt-2
          absolute
          top-0
          right-0
          equis
        "
        @click="show = false"
      >
        X
      </div>
      <div class="flex-shrink-0 bg-color-white">
        <img class="h-16 w-16" src="src\assets\oliprint2.svg" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">Contactanos</div>
        <p class="text-gray-500">Sera un gusto atenderte 😊</p>
      </div>
      <button
        class="
          px-2
          text-purple-800
          font-semibold
          rounded-full
          border border-purple-800
          hover:text-white
          hover:bg-purple-800
          hover:border-transparent
        "
        h
      >
        <a href="https://api.whatsapp.com/send?phone=50242112585&text=Hola"
          >Enviar Mensaje</a
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
      if (to.name == 'Home') {
        this.show= true;        
      }
    }
  }
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