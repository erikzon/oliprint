<template>
  <div class="flex-grow lg:grid lg:grid-cols-6 lg:mx-16">
    <div class="lg:col-span-3">
      <div class="text-5xl lg:text-7xl font-extrabold text-left mx-6 mb-2">
        <span
          class="
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-green-400
            to-blue-500
          "
        >
          Somos Expertos en</span
        >
      </div>
      <div class="h-16">
        <transition name="fade">
          <!--use decoration-clone to repeat the inner gradient for each line break-->
          <div
            class="
              text-5xl
              lg:text-7xl
              font-extrabold
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-green-400
              to-blue-500
              text-left
              mx-6
              lg:my-4
            "
            v-if="state.show"
          >
            {{ state.text }}
          </div>
        </transition>
      </div>
    </div>
    <div class="lg:col-span-3">
      <p
        class="text-white text-2xl text-left lg:text-4xl lg:font-bold mx-6 my-8"
      >
        Desde 2020 estamos renovando los servicios de personalizacion en
        Guatemala. Trayendo innovacion y creatividad. 🙌
      </p>
    </div>
  </div>
  <Servicios />
</template>

<script setup>
import { onMounted, reactive } from "vue";
import Servicios from "../components/Servicios.vue";
onMounted(() => {
  setInterval(() => {
    state.show = !state.show;
    state.count++;
    state.text = state.textPool[(state.count - 1) % state.textPool.length];
  }, 1200);
});
const state = reactive({
  count: 0,
  show: true,
  text: "Grabado Laser",
  textPool: ["Sublimación", "Impresión 3D", "Grabado Laser"],
  imagePool: [
    "../assets/groot3d.webp",
    "../assets/gaudylaser.webp",
    "../assets/sublimacion.webp",
  ],
});
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease;
  /*transition-duration: 500ms;
  transform: translateX(-10px);*/
}

.fade-leave-active {
  /*transform: translateX(10px);
  animation-duration: 2s;*/
  transition-duration: 500ms;
  transform: translateX(-10px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>