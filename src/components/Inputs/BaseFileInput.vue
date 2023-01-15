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
      type="file"
      :value="props.modelValue"
      :id="props.name"
      class="w-full p-2 border-2 border-green-400 rounded-md focus:outline-none focus:ring-2 text-orange-500 focus:ring-green-400 file:border-2 file:border-green-500 file:text-1xl file:font-bold file:text-green-500"
    />
  </div>
</template>

<script setup lang="ts">
interface ITextInputProps {
  modelValue: string | any;
  name: string;
  label: string;
}
const emit = defineEmits(["update:modelValue"]);
const props = defineProps<ITextInputProps>();

const change = async (event: InputEvent | any) => {
  const file = event.target.files[0];

  //TODO Implement firebase file upload
  await new Promise((resolve, reject) => {
    return setTimeout(() => {
      console.log(file);
      return resolve;
    }, 1000);
  });
  emit("update:modelValue", file);
};
</script>

<style scoped></style>
