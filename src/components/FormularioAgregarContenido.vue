<template>
  <div class="leading-loose px-6 lg:mx-12 lg:px-0">
    <form
      class="max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl"
      @submit.prevent="handleSubmit"
    >
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
        Agregar contenido a la galeria
      </p>
      <div class="">
        <label class="block text-sm text-purple-800" for="cus_name"
          >Nombre Del Producto</label
        >
        <input
          class="w-full px-2 py-2 text-gray-600 bg-gray-200 inputs"
          type="text"
          required=""
          placeholder="Escribe tu nombre"
          v-model="name"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-purple-800" for="cus_email"
          >Etiquetas</label
        >
        <input
          class="w-full px-2 py-2 text-gray-600 bg-gray-200 inputs"
          type="text"
          required=""
          placeholder="Separa cada etiqueta con una coma"
          v-model="tags"
        />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-purple-800" for="cus_email"
          >Foto</label
        >
        <input type="file" @change="handleChange" />
      </div>
      <div class="mt-2">
        <label class="block text-sm text-purple-800" for="cus_email"
          >Descripcion</label
        >
        <textarea
          class="inputs"
          required
          placeholder="Descripcion del producto"
          v-model="description"
        ></textarea>
      </div>
      <div class="mt-1">
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
          AGREGAR
        </button>
        <h2 class="bg-green-300 rounded mt-4" v-if="uploadSuccess">AGREGADO EXITOSAMENTE A LA GALERIA</h2>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useStorage from "../composables/useStorage";
import useCollection from "../composables/useCollection";
import { serverTimestamp } from "@firebase/firestore";

const { filePath, url, uploadImage } = useStorage();
const { error, addDocu } = useCollection("Producto");

const types = ["image/png", "image/jpeg"];
const name = ref("");
const tags = ref([]);
const description = ref("");
const file = ref(null);
const fileError = ref(null);
const isPending = ref(false);

const uploadSuccess = ref(false);

const handleChange = (e) => {
  const selected = e.target.files[0];
  if (selected && types.includes(selected.type)) {
    file.value = selected;
    fileError.value = null;
  } else {
    file.value = null;
    fileError.value = "Please select an image file (png or jpg)";
  }
};

const handleSubmit = async () => {
  if (file.value) {
    isPending.value = true;
    await uploadImage(file.value);
    const res = await addDocu({
      Name: name.value,
      Description: description.value,
      Tags: tags.value,
      Foto: url.value,
      filePath: filePath.value,
      createdAt: serverTimestamp(),
    });
    //end
    isPending.value = false;
    uploadSuccess.value = true;
    name.value = "";
    description.value = "";
    tags.value = "";
    url.value = "";
    setTimeout(() => {
      uploadSuccess.value = false;
    }, 3000);
  }
};
</script>

<style>
</style>