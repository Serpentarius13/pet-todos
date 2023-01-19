<template>
  <button
    class="px-8 py-4 bg-green-500 hover:bg-green-600 active:bg-green-700 transition-colors font-extrabold text-white text-4xl rounded-xl"
    @click="open"
  >
    Start the day!
  </button>
</template>

<script setup lang="ts">
import useModalStore from "@/store/useModalStore";

const store = useModalStore();

const open = () => {
  store.openModalWithStartDayForm();
};
</script>

<style scoped></style>
