<script setup lang="ts">
import { CatController } from "../../services/controllers/cat.controller";
import { useCatsStore } from "../../stores/cat.store";
import { type CatsArray } from "../../types/interfaces/common.interfaces";

const catsStore = useCatsStore();
const isLoading = ref(false);
const catsArray = ref<CatsArray>(catsStore.cats);

const getCats = async () => {
  isLoading.value = true;
  await CatController.getCats(10);
  catsArray.value = catsStore.cats;
  isLoading.value = false;
};
</script>
<template>
  <div class="mt-5 mx-auto w-full max-w-xl flex flex-col items-center gap-5">
    <UButton v-if="!isLoading" @click="getCats" class="mt-20">Get Cats</UButton>
    <UProgress v-if="isLoading" animation="swing" />
    <div v-else class="flex flex-col items-center gap-5 mx-auto">
      <h1 class="text-green-500">Cats</h1>
      <div
        v-if="catsArray.length > 0"
        v-auto-animate
        class="gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div v-for="(robo, index) in catsArray" :key="index">
          <NuxtImg
            format="webp"
            :src="robo"
            :alt="robo"
            :placeholder="[150, 150]"
          />
        </div>
      </div>
      <div v-else>
        <h1 class="text-red-500">No cats</h1>
      </div>
    </div>
  </div>
</template>
