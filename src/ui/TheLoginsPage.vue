<template>
  <div
    class="w-[95vw] md:h-[100vh] h-[130vh] md:p-8 sm:p-4 p-2 flex items-center justify-center md:gap-12 gap-4 flex-col md:flex-row overflow-x-hidden"
  >
    <TheSignUpForm />
    <TheLoginForm />
  </div>
</template>

<script setup lang="ts">
import TheLoginForm from "@/components/Form/TheLoginForm.vue";
import TheSignUpForm from "@/components/Form/TheSignUpForm.vue";
</script>

<style scoped></style>
