<template>
  <TheStartDayButton />

  <TheMinifiedDay :day="newDay" />

  <BaseReusableButton color="blue" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import isTodaysDate from "@/functions/isTodaysDate";
import TheStartDayButton from "@/components/Buttons/TheStartDayButton.vue";
import TheMinifiedDay from "@/components/Day/TheMinifiedDay.vue";

import { IDay } from "@/types/dataTypes";
import BaseReusableButton from "@/components/Buttons/BaseReusableButton.vue";

console.log(isTodaysDate("Tue, 17 Jan 2023 21:43:21 GMT"));

const newDay = {
  date: new Date().toUTCString(),
  mood: "😸",
  todos: [],
  texts: [],
  images: [],
  isCompleted: false,
  authorId: 1,
  dayCount: 1,
  dayId: "11",
};
</script>

<style scoped></style>
