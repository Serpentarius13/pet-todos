<template>
  <div v-for="day in days" :key="day.id">
    {{ JSON.stringify(day) }}
  </div>
</template>

<script setup lang="ts">
import hashGenerator from "@/functions/hashGenerator";
import { daysRef } from "@/utils/collections";
import { getDaysForUser } from "@/utils/fetchFunctions";
import { onMounted, ref, Ref } from "vue";
import { useCollection, useCurrentUser } from "vuefire";

const user = useCurrentUser();

const days: Ref<any[]> = ref([]);

onMounted(async () => {
  if (user.value) days.value = await getDaysForUser(user.value.uid);
});
</script>

<style scoped></style>
