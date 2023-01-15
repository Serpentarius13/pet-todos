<template>
  <div class="flex flex-col gap-4 w-full p-4 items-center justify-center">
    <label
      :for="props.name"
      class="text-2xl font-bold cursor-pointer text-green-400 self-start"
    >
      {{ props.label }}</label
    >
    <input
      :name="props.name"
      @input="change"
      :type="props.type"
      :value="props.modelValue"
      :id="props.name"
      class="w-full p-2 border-2 border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>
</template>

<script setup lang="ts">
interface ITextInputProps {
  type: string;
  modelValue: string | any;
  name: string;
  label: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = defineProps<ITextInputProps>();

const change = (event: InputEvent | any) => {
  const { value } = event.target;
  emit("update:modelValue", value);
};
</script>

<style scoped></style>
