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
        <a href="https://api.whatsapp.com/send?phone=50242112585&text=Hola">Enviar Mensaje</a>
      </button>
    </div>
  </transition>
</template>

<script>
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
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
};
</script>

<style scoped>
.entradaContactanos-enter-active {
  transition-duration: 2000ms;
  transform: translateY(0px);
  /*transition-duration: 500ms;
  transform: translateX(-10px);*/
}

.entradaContactanos-leave-active {
  /*transform: translateX(10px);
  animation-duration: 2s;*/
  transition-duration: 2000ms;
  transform: translateY(0px);
}

.entradaContactanos-enter-from,
.entradaContactanos-leave-to {
  opacity: 0;
  
}
</style>