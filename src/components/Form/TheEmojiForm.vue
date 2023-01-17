<template>
  <BaseFormComponent :onSubmit="onSubmit" isRow>
    <BaseRadioButton
      v-for="emoji in emojis"
      :value="emoji"
      v-model="emojiValue"
      :key="emoji"
    />
  </BaseFormComponent>
</template>

<script setup lang="ts">
import BaseFormComponent from "@/components/Form/BaseFormComponent.vue";
import BaseRadioButton from "@/components/Inputs/BaseRadioButton.vue";
import useToastedForm from "@/composables/useToastedForm";
import startDay from "@/variables/zod/startDay";
import { useField } from "vee-validate";
const emojis = ["😸", "😼", "🙀", "😿", "😾"];

const validate = useToastedForm(startDay, {
  mood: emojis[0],
});

const { value: emojiValue } = useField("mood");

const onSubmit = async () => {
  console.log(emojiValue.value);
};
</script>

<style scoped></style>
