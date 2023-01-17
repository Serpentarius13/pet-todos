<template>
  <div
    class="flex flex-col gap-4 w-full p-4 items-center justify-center relative"
  >
    <label
      :for="generatedHash"
      class="text-2xl font-bold cursor-pointer text-green-400 self-start"
    >
      {{ props.label }}</label
    >
    <input
      :name="props.name"
      @input="change"
      :id="generatedHash"
      :type="typeRef"
      class="w-full p-2 border-2 border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <button
      v-if="props.type === 'password'"
      @click="showPassword"
      class="absolute right-5 top-[58%]"
      type="button"
    >
      <img :src="eyeState" alt="Eye for seeing password" class="w-6 h-8" />
    </button>
  </div>
</template>

<script setup lang="ts">
import makeId from "@/functions/hashGenerator";
import { ref, computed } from "vue";

export interface ITextProps {
  modelValue: string | boolean | undefined | unknown;
  name: string;
  label: string;
  type?: string;
}

const emit = defineEmits(["update:modelValue"]);
const props = defineProps<ITextProps>();

const typeRef = ref(props.type || "text");

const change = (event: InputEvent | any) => {
  const { value } = event.target;
  emit("update:modelValue", value);
};

const generatedHash = makeId(16);

const showPassword = () => {
  if (typeRef.value === "password") typeRef.value = "text";
  else typeRef.value = "password";
};

const eyeState = computed(() => {
  if (typeRef.value === "password") return "/img/eye.svg";
  else return "/img/eye-off.svg";
});
</script>

<style scoped></style>
