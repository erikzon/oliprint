<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div
    class="
      p-6
      max-w-sm
      mx-auto
      my-14
      bg-white
      rounded-xl
      shadow-md
      flex
      items-center
      space-x-4
    "
  >
    <div class="flex-shrink-0">
      <img class="h-12 w-12" src="src\assets\logo.png" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
    <button
      class="
        px-2
        text-green-600
        font-semibold
        rounded-full
        border border-green-600
        hover:text-white
        hover:bg-green-600
        hover:border-transparent
      "
      @click="reaccionBtn"
    >
      Let's Chat
    </button>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
const state = reactive({ count: 0 });

defineProps({
  msg: String,
});

export default {
  setup() {
    const event = reactive({
      capacity: 4,
      attending: ["Tim", "Bob", "Joe"],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      }),
    });
    function increaseCapacity() {
      event.capacity++;
    }
    return { ...toRefs(event), increaseCapacity };
  },
};
</script>

<style scoped>
</style>
