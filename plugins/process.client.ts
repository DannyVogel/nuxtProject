// plugins/process.client.js

import { defineNuxtPlugin } from "nuxt/app";
import process from "process";

export default defineNuxtPlugin(() => {
  if (typeof window !== "undefined") {
    window.process = process;
  }
});
