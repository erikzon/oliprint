<template>
  <h1 class="text-white font-bold text-4xl">Bienvenido {{ user.email }}</h1>
  <div
    class="
      bg-white
      mx-auto
      px-4
      my-2
      rounded-tl-3xl rounded-br-3xl
      grid grid-cols-4
      cursor-pointer
    "
    @click="handleLogout"
  >
    <span class="col-span-3 text-xl mt-1 mx-1"> CERRAR SESION </span>
    <img
      alt="login"
      src="../assets/logout.svg"
      class="w-8 h-8 mx-auto lg:mx-0 cursor-pointer col-span-1"
    />
  </div>
  <br />
  <div class="text-white font-bold text-xl" v-if="filter.length == 0">
    😥 parece que aun no tienes productos favoritos...
    <router-link
      :to="{ name: 'Galeria' }"
      class="underline hover:text-purple-300"
    >
      VISITAR GALERIA
    </router-link>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-4" v-else>
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
          <img
            alt="login"
            src="../assets/favorite.svg"
            class="col-span-1 cursor-pointer ml-8"
            :class="{ favoritecolor: liked }"
            v-if="user"
            @click="handleLike(doc)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import useLogout from "../composables/useLogout";
import getDocuments from "../composables/getCollection";

const router = useRouter();
const { user } = getUser();
const { logout, error: errorLogout, isPending } = useLogout();
const { docs, error, load } = getDocuments();
const liked = ref(true);

const favorites = ref(false);

const filter = computed(() => {
  return docs.value.filter((favorite) => {
    if (favorite.Owner == user.value.uid) {
      return favorite;
    }
  });
});

onMounted(() => {
  load("favoritos");
  console.log(filter);
});

const handleLogout = async () => {
  await logout();
  router.push("/");
};
</script>

<style>
.producto {
  @apply bg-white m-4 p-3 rounded-tl-3xl rounded-br-3xl;
}

.producto:hover {
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  transform: scale(1.02);
  transition: all ease 0.2s;
}

.favoritecolor {
  filter: invert(24%) sepia(87%) saturate(7490%) hue-rotate(359deg)
    brightness(96%) contrast(116%);
}
</style>