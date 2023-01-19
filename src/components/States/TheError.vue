<template>
  <div
    class="flex flex-col gap-6 bg-white rounded-xl items-center justify-center p-4 rounded-xl"
  >
    <img src="/img/error.svg" alt="Error sign" class="w-12 h-12" />
    <h3 class="text-3xl font-bold text-red-600">Sorry, there was an error</h3>
    <button
      class="px-6 py-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-2xl font-bold rounded-xl text-white"
      @click="goBack"
    >
      Refresh
    </button>
  </div>
</template>

<script setup lang="ts">
import useLoadingStore from "@/store/useLoadingStore";
import useModalStore from "@/store/useModalStore";
import { useRouter } from "vue-router";
const store = useLoadingStore();
const router = useRouter();

const goBack = () => {
  store.unError();
  store.unload();
  router.push("/");
};
</script>

<style scoped></style>
