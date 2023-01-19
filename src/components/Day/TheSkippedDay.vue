<template>
  <div class="minifiedWrap !gap-8">
    <span class="text-4xl text-green-500 font-extrabold">
      You have skipped the day of <br />
      <span class="text-orange-500"> {{ getDate(props.day) }} </span>
    </span>
    <p class="flex gap-2 items-center justify-center text-[10rem]">😾</p>
  </div>
</template>

<script setup lang="ts">
import getDate from "@/functions/getDate";
const props = defineProps<{ day: string | Date }>();
</script>

<style scoped></style>
