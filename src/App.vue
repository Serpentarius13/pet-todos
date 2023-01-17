<template>
  <router-view />
  <TheModalWindow />
</template>

<script setup lang="ts">
import TheModalWindow from "./components/Modals/TheModalWindow.vue";
</script>

<style scoped>
@import "@/assets/scss/animations.scss";
</style>
