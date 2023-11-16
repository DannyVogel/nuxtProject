<script setup lang="ts">
import Web3AuthController from "../services/controllers/web3Auth.controller";

const nuxtApp = useNuxtApp();

const value = ref(0);

watchEffect(() => {
  if (value.value > 100) {
    value.value = 100;
  } else if (value.value < 0) {
    value.value = 0;
  }
});
const logIn = async () => {
  console.log("logIn");
  try {
    await Web3AuthController.connect(nuxtApp.$web3auth, nuxtApp.$provider);
  } catch (error) {
    console.log(error);
  }
};
const logOut = async () => {
  console.log("logOut");
  try {
    await Web3AuthController.disconnect(nuxtApp.$web3auth);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="px-4 mt-20 flex flex-col items-center gap-5 max-w-md mx-auto">
    <h1 class="text-green-500">Progress</h1>
    <UProgress :value="value" />
    <div v-auto-animate class="flex flex-col items-center gap-4">
      <UButton @click="value += 25" icon="i-heroicons-arrow-up">Add</UButton>
      <UButton color="red" @click="value -= 25" icon="i-heroicons-arrow-down"
        >Subtract</UButton
      >
      <UButton
        v-if="value === 100"
        color="yellow"
        @click="value = 0"
        icon="i-heroicons-arrow-path"
        >Reset</UButton
      >
    </div>
    <UButton color="blue" @click="logIn">Log In</UButton>
    <UButton color="red" @click="logOut">Log Out</UButton>
  </div>
</template>
