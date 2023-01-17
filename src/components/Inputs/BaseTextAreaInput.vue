<template>
  <div class="flex flex-col gap-4 w-full p-4 items-center justify-center">
    <label
      :for="generatedHash"
      class="text-2xl font-bold cursor-pointer text-green-400 self-start"
    >
      {{ props.label }}</label
    >
    <textarea
      :name="props.name"
      @input="change"
      type="textarea"
      :id="generatedHash"
      class="p-4 border-2 h-64 w-full bg-white border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>
</template>

<script setup lang="ts">
import makeid from '@/functions/hashGenerator';

export interface ITextProps {
  modelValue: string | boolean | undefined | unknown;
  name: string | undefined;
  label: string | undefined;
}

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<ITextProps>();

const change = (event: InputEvent | any) => {
  const { value } = event.target;
  emit("update:modelValue", value);
};

const generatedHash = makeid(16)
</script>

<style scoped></style>
