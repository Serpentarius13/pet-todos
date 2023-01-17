<template>
  <router-view />
  <TheModalWindow />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import TheModalWindow from "./components/Modals/TheModalWindow.vue";
import useLoadingStore from "./store/useLoadingStore";
import useModalStore from "./store/useModalStore";

const store = useLoadingStore();
const modalStore = useModalStore();

onMounted(() => {
  store.$subscribe(() => {
    if (store.$state.isLoading) modalStore.openModalWithLoader();
    if (store.$state.isError) modalStore.openModalWithError();
    if(store.$state.loaded) modalStore.closeModal()
  });
});
</script>

<style scoped>
@import "@/assets/scss/animations.scss";
</style>
