<template>
  <div class="minifiedWrap">
    <p class="textSpan">
      Day <span> {{ props.day.dayCount }} </span>
    </p>
    <p class="textSpan">
      Mood: <span> {{ props.day.mood }} </span>
    </p>

    <p class="textSpan">
      Images: <span> {{ props.day.images.length }} </span>
    </p>
    <p class="textSpan">
      Texts: <span> {{ props.day.texts.length }} </span>
    </p>
    <p class="textSpan">
      Todos: <span> {{ props.day.todos.length }} </span>
    </p>

    <BaseReusableButton
      class="mt-6"
      text="Look at the day!"
      @click="navigateToDay"
    />
  </div>
</template>

<script setup lang="ts">
// interface IMinifiedDayProps {
//     dayId: string | number,
//     mood: string,
//     todosArray: any[],
//     textsArray: any[],
//     imagesArray: any[],

import { IDay } from "@/types/dataTypes";
import { onMounted } from "vue";
import BaseReusableButton from "../Buttons/BaseReusableButton.vue";
import { useRouter } from "vue-router";

// }

interface IMinifiedDayProps {
  day: IDay;
}

const props = defineProps<IMinifiedDayProps>();
const router = useRouter();

const navigateToDay = () => {
  router.push(`/day/${props.day.dayId}`);
};
</script>

<style scoped>
.minifiedWrap {
  width: clamp(15rem, 45vw, 20rem);
  @apply border-4 border-orange-500 rounded-xl p-2 md:p-4 flex flex-col items-center justify-center gap-2 bg-gray-800;
}

.textSpan {
  @apply text-3xl text-green-500 font-bold;
}

.textSpan > span {
  @apply text-3xl text-orange-500 font-bold;
}
</style>
