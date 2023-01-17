<template>
  <BaseFormComponent :onSubmit="onSubmit" heading="Sign up">
    <BaseTextInput v-model="email" name="email" label="Your email" />
    <BaseTextInput
      v-model="password"
      name="password"
      type="password"
      label="Your password"
    />
  </BaseFormComponent>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import BaseTextInput from "../Inputs/BaseTextInput.vue";
import BaseFormComponent from "./BaseFormComponent.vue";

import signUp from "@/variables/zod/signUp";
import useToastedForm from "@/composables/useToastedForm";
import { register } from "@/utils/firebase";
import useLoadingStore from "@/store/useLoadingStore";

const loadStore = useLoadingStore();

const validate = useToastedForm(signUp, {
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    loadStore.load();
    const isValid = await validate();
    if (!isValid) return;

    const res = await register(email.value, password.value);
    console.log(res);
    loadStore.unload();
  } catch (error) {
    loadStore.unload();
    console.log(error);
    loadStore.error();
  }
};

const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");
</script>

<style scoped></style>
