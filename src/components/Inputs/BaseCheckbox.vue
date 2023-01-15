<template>
  <div class="flex gap-4 w-full p-4 items-center justify-center">
    <label :for="props.name" class="radio-label" @click="change">
      <span class="mark" />
      {{ props.value }}</label
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
interface ITextInputProps {
  modelValue: string | any;
  value: string;
  name: string;
  label: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = defineProps<ITextInputProps>();

const change = async () => {
  emit("update:modelValue", props.value);
};

const computedChecked = computed(() => {
  const isChecked = props.modelValue === props.value;
  return isChecked ? 1 : 0;
});
</script>

<style scoped lang="scss">
.radio-label {
  @apply relative text-2xl font-bold cursor-pointer text-green-400 self-start;
}

.mark {
  @apply absolute top-1/2 -translate-y-1/2 -left-7 bg-white border-2 border-green-500 w-6 h-6 rounded-full;
}

.radio-label::after {
  @apply absolute top-1/2 -translate-y-1/2 -left-6 bg-green-400 w-4 h-4 rounded-full;
  content: "";
  transition: 0.2s all ease-out;

  opacity: v-bind(computedChecked);
}

.radio-label::before:hover {
  @apply bg-green-400;
}
</style>
