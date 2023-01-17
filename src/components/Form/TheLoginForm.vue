<template>
  <BaseFormComponent :onSubmit="onSubmit" heading="Log in">
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
import { login } from "@/utils/firebase";
import { useCurrentUser } from "vuefire";
import useLoadingStore from "@/store/useLoadingStore";

const loadStore = useLoadingStore();

const validate = useToastedForm(signUp, {
  email: "",
  password: "",
});

const onSubmit = async () => {
  try {
    loadStore.load()
    const isValid = await validate();
    if (!isValid) return;

    const res = await login(email.value, password.value);
    console.log(res);

    const user = useCurrentUser();
    console.log(user);
    loadStore.unload()
  } catch (error) {
    loadStore.unload()
    loadStore.error()
  }
};

const { value: email } = useField<string>("email");
const { value: password } = useField<string>("password");
</script>

<style scoped></style>
