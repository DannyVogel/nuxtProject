<script setup lang="ts">
const value = ref(0);

watchEffect(() => {
  if (value.value > 100) {
    value.value = 100;
  } else if (value.value < 0) {
    value.value = 0;
  }
});
</script>

<template>
  <div class="mt-20 flex flex-col items-center gap-5 max-w-md mx-auto">
    <h1 class="text-green-500">How dope is this</h1>
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
  </div>
</template>
