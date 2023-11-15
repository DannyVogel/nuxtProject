<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

definePageMeta({
  layout: "custom",
});

const message = ref<string>();

const state = reactive({
  message: undefined,
});
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.message)
    errors.push({ path: "message", message: "Write something to say!" });
  return errors;
};
const { say } = useUtils();

const onSubmit = (event: FormSubmitEvent<any>) => {
  console.log(event.data);
  message.value = event.data.message;
  say();
};

const count = ref(0);
</script>
<template>
  <div class="mt-20 max-w-xl mx-auto px-4 flex flex-col gap-5">
    <h1>About Page</h1>
    <p>Count: {{ count }}</p>
    <UButton class="self-start" @click="count++">Increment</UButton>
    <UForm
      class="w-full flex flex-col items-start gap-2"
      :state="state"
      :validate="validate"
      @submit="onSubmit"
    >
      <UFormGroup label="Message" name="message">
        <UInput v-model="state.message" />
      </UFormGroup>
      <UButton type="submit">Log a message</UButton>
    </UForm>
    <p>{{ message }}</p>
  </div>
</template>
