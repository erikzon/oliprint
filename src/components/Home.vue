<template>
  <div class="flex-grow">
    <div class="text-5xl font-extrabold text-left mx-6 mb-4">
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
    <div class="h-24">
      <transition name="fade">
        <div class="text-5xl text-purple-600 mx-6 text-center" v-if="show">
          {{ text }}
        </div>
      </transition>
    </div>
    <div>
      <p class="text-purple-600 text-black text-left text-lg mx-6 my-8">
        Desde 2020 estamos renovando los servicios de personalizacion en
        Guatemala. Trayendo innovacion y creatividad. 🙌
      </p>
    </div>
    <div class="m-6  shadow-xl">
      <img
        src="../assets/groot3d.webp"
        alt=""
        class="rounded-xl border-white border-8"
      />
    </div>
    <div class="m-6  shadow-xl">
      <img
        src="../assets/sublimacion.webp"
        alt=""
        class="rounded-xl border-white border-8"
      />
    </div>
    <div class="m-6 shadow-xl">
      <img
        src="../assets/gaudylaser.webp"
        alt=""
        class="rounded-xl border-white border-8"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  setup() {
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
      text: "GRABADO LASER",
      textPool: ["SUBLIMACIÓN", "IMPRESIÓN 3D", "GRABADO LASER"],
      imagePool: ["../assets/groot3d.webp", "../assets/gaudylaser.webp", "../assets/sublimacion.webp"],
    });
    return { ...toRefs(state) };
  },
};
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