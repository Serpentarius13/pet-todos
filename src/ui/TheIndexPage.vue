<template>
<TheDaysComponent/>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { getCurrentUser } from "vuefire";

import useLoadingStore from "@/store/useLoadingStore";
import { onMounted, Ref, ref } from "vue";
import TheDaysComponent from "@/components/Day/TheDaysComponent.vue";

const router = useRouter();

const store = useLoadingStore();

const isAuth: Ref<boolean> = ref(false);

onMounted(async () => {
  try {
    store.load();
    const user = await getCurrentUser();
    if (!user) {
      router.push("/login");
    } else {
      isAuth.value = true;
      store.unload();
    }
  } catch (error) {
    store.error();
    console.log(error);
  }
});
</script>

<style scoped></style>
