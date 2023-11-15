<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import { CatController } from "../../services/controllers/cat.controller";

const isLoading = ref(false);
const roboArray = ref([]);

const getCats = async () => {
  const cats = await CatController.getCats(20);
  roboArray.value = [...roboArray.value, ...cats];
};

onMounted(async () => {
  isLoading.value = true;
  const cats = await CatController.getCats(20);
  roboArray.value = [...roboArray.value, ...cats];
  isLoading.value = false;
});
</script>
<template>
  <div class="mt-5 mx-auto w-full max-w-xl flex flex-col items-center gap-5">
    <UButton @click="getCats">Get Cats</UButton>
    <div v-if="isLoading">
      <UProgress animation="carousel" />
    </div>
    <div v-else class="flex flex-col items-center gap-5 mx-auto">
      <h1 class="text-green-500">Cats</h1>
      <div
        v-if="roboArray.length > 0"
        v-auto-animate
        class="gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="(robo, index) in roboArray" :key="index">
          <img :src="robo" :alt="robo" />
        </div>
      </div>
      <div v-else>
        <h1 class="text-red-500">No cats</h1>
      </div>
    </div>
  </div>
</template>
