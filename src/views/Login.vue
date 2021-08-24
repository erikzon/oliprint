<template>
  <div class="leading-loose px-6 lg:mx-auto lg:px-10 lg:w-1/3">
    <form
      class="max-w-xl py-10 px-4 w-full bg-white rounded shadow-xl"
      @submit.prevent="handleSubmit"
    >
      <p
        class="
          text-4xl
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
        <span v-if="state.loginMode">Inicia Sesion</span>
        <span v-else> Registrate </span>
      </p>
      <div class="mt-2">
        <label class="block text-xl text-purple-800" for="cus_email"
          >Email</label
        >
        <input
          class="inputs"
          id="email"
          name="email"
          type="email"
          required=""
          placeholder="Escribe tu correo"
          aria-label="Email"
          v-model="state.email"
        />
      </div>
      <div class="">
        <label class="block text-xl text-purple-800" for="cus_name"
          >Contraseña</label
        >
        <input
          class="inputs"
          id="password"
          name="password"
          type="password"
          required=""
          placeholder="Escribe tu contraseña"
          aria-label="Name"
          v-model="state.password"
        />
      </div>
      <div v-if="!state.loginMode">
        <label class="block text-xl text-purple-800" for="cus_name">
          Confirma tu Contraseña</label
        >
        <input
          class="inputs"
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          required=""
          placeholder="Escribe la contraseña de nuevo"
          aria-label="Name"
          v-model="state.passwordConfirm"
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
          <span v-if="state.loginMode">INGRESAR</span>
          <span v-else>REGISTRARME</span>
        </button>
        <h1
          class="rounded bg-red-200 my-3 mx-4 text-xl"
          v-if="!state.passwordMatch"
        >
          Contraseñas no coinciden.
        </h1>
        <h1 class="rounded bg-red-200 my-3 mx-4 text-xl" v-if="error">
          {{ error }}
        </h1>
        <h1
          class="mt-4 text-lg text-purple-600 cursor-pointer font-bold"
          @click="toggleMode"
        >
          <span v-if="state.loginMode">
            ¿aun no tienes cuenta?
            <span class="underline"> REGISTRATE </span></span
          >
          <span v-else>
            ¿Ya tienes una cuenta?
            <span class="underline"> INICIA SESION </span>
          </span>
        </h1>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

const state = reactive({
  email: "",
  password: "",
  passwordConfirm: "",
  status: false,
  loginMode: true,
  passwordMatch: true,
});

const { error, login } = useLogin();
const { signup } = useSignup();
const router = useRouter();

const toggleMode = () => {
  state.loginMode = !state.loginMode;
};

const handleSubmit = () => {
  if (state.loginMode) {
    TriggerLogin();
  } else {
    if (state.password === state.passwordConfirm) {
      TrigeerSignup();
    } else {
      state.passwordMatch = false;
      state.password = "";
      state.passwordConfirm = "";
      setTimeout(() => {
        state.passwordMatch = true;
      }, 3000);
    }
  }
};

const TriggerLogin = async () => {
  const loginAttemp = await login(state.email, state.password);
  if (!error.value) {
    router.push({ name: "Favorites" });
  }
};

const TrigeerSignup = async () => {
  signup(state.email, state.password);
  router.push({ name: "Favorites" });
};
</script>

<style>
.inputs {
  @apply shadow-inner 
        rounded-tl-2xl 
        rounded-br-2xl 
        border-2 
        border-opacity-0
        w-full 
        px-2 
        py-2 
        text-gray-900 
        bg-gray-200
        text-lg;
}
.inputs:focus {
  @apply border-2 border-purple-600 outline-none;
  /* outline:none!important; */
}
</style>