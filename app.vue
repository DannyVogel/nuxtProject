<script setup lang="ts">
const nuxtApp = useNuxtApp();
const init = async () => {
  try {
    await nuxtApp.$web3auth.init();
    nuxtApp.$provider.value = nuxtApp.$web3auth.provider;
    console.log("init", nuxtApp.$provider.value);
  } catch (error) {
    console.error(error);
  }
};
onMounted(async () => {
  console.log("app provider", nuxtApp.$provider);
  console.log("app web3auth", nuxtApp.$web3auth);
  await init();
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
