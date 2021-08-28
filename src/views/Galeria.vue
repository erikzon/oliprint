<template>
  <div class="lg:flex lg:justify-left" v-if="currentFilterTag">
    <h1 class="text-white lg:mx-4 lg:mt-2">FILTRO APLICADO ACTUALMENTE:</h1>
    <div
      class="
        bg-white
        w-1/2
        m-auto
        lg:w-auto
        lg:m-0
        px-4
        rounded-tl-3xl rounded-br-3xl
        grid grid-cols-4
      "
    >
      <span class="col-span-3 text-xl lg:mt-1 lg:mx-1"
        >{{ currentFilterTag }}
      </span>
      <span class="font-bold text-xl cursor-pointer mt-1" @click="cleanFilter"
        >X</span
      >
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-4">
    <div v-for="doc in filter" :key="doc.id">
      <div class="producto">
        <div class="thumbnail">
          <img :src="doc.Foto" />
        </div>
        <div class="info">
          <h3 class="text-purple-900 font-bold uppercase">{{ doc.Name }}</h3>
          <p class="text-left">{{ doc.Description }}</p>
        </div>
        <div class="tags mt-3 grid grid-cols-5">
          <div class="text-blue-400 underline italic col-span-4">
            <span
              v-for="tag in doc.Tags"
              :key="tag"
              class="mr-2 cursor-pointer"
              @click="handleTagClick(tag)"
              >#{{ tag }}
            </span>
          </div>

          <span class="col-span-1 cursor-pointer text-2xl">❤</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { computed, onMounted } from "@vue/runtime-core";
import getDocuments from "../composables/getCollection";

const { docs, error, load } = getDocuments();
const currentFilterTag = ref("");
const firstLoad = ref(true);

const cleanFilter = () => {
  firstLoad.value = false;
  currentFilterTag.value = "";
  load("Producto");
};

const props = defineProps({
  filterTag: String,
});

const filter = computed(() => {
  if (props.filterTag && firstLoad.value) {
    currentFilterTag.value = props.filterTag;
    return docs.value.filter((producto) =>
      producto.Tags.includes(props.filterTag)
    );
  } else {
    return docs.value;
  }
});

onMounted(() => {
  load("Producto");
});

const handleTagClick = async (tag) => {
  currentFilterTag.value = tag;
  await load("Producto");
  docs.value = docs.value.filter((producto) => producto.Tags.includes(tag));
};
</script>

<style scoped>
.producto {
  @apply bg-white m-4 p-3 rounded-tl-3xl rounded-br-3xl;
}

.producto:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}
</style>