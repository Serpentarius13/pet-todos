<template>
  <div
    class="grid overflow-y-hidden grid-flow-col h-[100vh] p-2 md:p-4 gap-4 bg-gray-800"
    ref="boxRef"
  >
    <TheStartDayButton class="max-h-[150px] w-[300px]" />
    <TheMinifiedDay v-for="day in daysRef" :key="day.id" :day="day" />
  </div>
</template>

<script setup lang="ts">
//@ts-nocheck
import useLoadingStore from "@/store/useLoadingStore";
import { IDay } from "@/types/dataTypes";
import { getDaysForUser } from "@/utils/fetchFunctions";
import { ref, onMounted, Ref, onBeforeUnmount } from "vue";
import { getCurrentUser } from "vuefire";
import TheMinifiedDay from "./TheMinifiedDay.vue";
import TheStartDayButton from "../Buttons/TheStartDayButton.vue";

const daysRef: Ref<IDay[]> = ref([]);
const loadStore = useLoadingStore();

const boxRef: Ref<HTMLDivElement | null> = ref(null);

let interval: ReturnType<typeof setInterval>;
type TInterval = "left" | "right";
const currentInterval: Ref<TInterval> = ref("left");

const scroll = function (event: MouseEvent | any) {
  event.preventDefault();
  const initialValue = boxRef.value.scrollLeft;
  const scrollIncrease = 100;
  const scrollInterval = 1;

  if (!boxRef.value) return;

  if (event.deltaY < 0) {
    clearInterval(interval);
    interval = setInterval(() => {
      if (boxRef.value.scrollLeft == initialValue - scrollIncrease) {
        clearInterval(interval);
      }
      boxRef.value.scrollLeft--;
    }, scrollInterval / scrollIncrease);
  } else {
    clearInterval(interval);
    interval = setInterval(() => {
      if (boxRef.value.scrollLeft == initialValue + scrollIncrease) {
        clearInterval(interval);
      }
      boxRef.value.scrollLeft++;
    }, scrollInterval / scrollIncrease);
  }
};
function enableHorizontalScroll() {
  boxRef.value.addEventListener("mousewheel", scroll);
}

function disableHorizontalScroll() {
  boxRef.value.removeEventListener("mousewheel", scroll);
}
onMounted(async () => {
  enableHorizontalScroll();
  try {
    loadStore.load();
    const user = await getCurrentUser();

    const days = await getDaysForUser(user?.uid);

    daysRef.value = days;

    console.log(days, daysRef.value);
  } catch (error) {
    console.log(error);
    loadStore.unload();
    loadStore.error();
  }
});

onBeforeUnmount(() => {
  disableHorizontalScroll();
});
</script>

<style scoped></style>
