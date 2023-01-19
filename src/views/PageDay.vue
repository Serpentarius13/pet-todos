<template>
  <TheImagesComponent />
</template>

<script setup lang="ts">
import TheImagesComponent from "@/components/Drag&Drop/TheImagesComponent.vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.id);
</script>

<style scoped></style>
