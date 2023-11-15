<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const count = ref(0);
</script>
<template>
  <div>
    <h1>About Page</h1>
    <p>Count: {{ count }}</p>
    <UButton @click="count++">Increment</UButton>
  </div>
</template>
