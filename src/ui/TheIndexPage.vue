<template>
  <form
    @submit.prevent="onSubmit"
    class="w-full md:w-[30rem] bg-gray-800 rounded-xl p-4 flex items-center justify-center flex-col"
  >
    <BaseTextInput
      label="Your email"
      v-model="email"
      name="email"
      type="email"
    />
    <BaseTextInput label="Your text" v-model="text" name="text" type="text" />
    <!-- <BaseFileInput label="Your text" v-model="text" name="text" type="text" /> -->

    <BaseCheckbox
      label="emoji"
      v-model="text"
      name="text"
      type="text"
      value="emoji"
    />

    <button
      type="submit"
      class="border-2 border-green-500 self-start mx-auto text-2xl font-bold rounded-xl text-green-500 px-4 py-2 hover:bg-green-500 active:bg-green-600 hover:text-white transition-all"
    >
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
import { watch } from "vue";
import BaseTextInput from "@/components/Inputs/BaseTextInput.vue";
import { useField, useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import { z } from "zod";

import { useToast } from "vue-toastification";
import BaseFileInput from "@/components/Inputs/BaseFileInput.vue";
import BaseCheckbox from "@/components/Inputs/BaseCheckbox.vue";
const toast = useToast();
const schemaObject = z.object({
  email: z.string().email().max(4),
  text: z.string().min(3),
});

const zodSchema = toFormValidator(schemaObject);

const { validate } = useForm({
  validationSchema: zodSchema,
  initialValues: {
    email: "",
    text: "",
  },
  validateOnMount: false,
});

const { value: email } = useField("email");
const { value: text } = useField("text");

const onSubmit = async () => {
  //@ts-ignore
  const { valid, errors } = await validate();
  console.log(valid, errors);
  if (!valid) {
    toast.clear();
    const errArr = Object.values(errors);
    for (const err of errArr) {
      toast.error(err);
    }
  } else {
    // props.submitFunction();
  }
};
</script>

<style scoped></style>
