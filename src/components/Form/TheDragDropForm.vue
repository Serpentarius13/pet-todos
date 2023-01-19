<template>
  <BaseFormComponent
    title="Some descriptions for your image!"
    :onSubmit="onSubmit"
  >
    <BaseTextInput label="Title of this image" name="title" v-model="title" />
    <BaseTextAreaInput label="Text to the image" name="text" v-model="text" />
  </BaseFormComponent>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import BaseFormComponent from "./BaseFormComponent.vue";
import BaseTextAreaInput from "../Inputs/BaseTextAreaInput.vue";
import BaseTextInput from "../Inputs/BaseTextInput.vue";

import { useField } from "vee-validate";
import uploadImage from "@/variables/zod/uploadImage";
import useToastedForm from "@/composables/useToastedForm";
import useLoadingStore from "@/store/useLoadingStore";
import { IImage } from "@/types/dataTypes";
import { addDoc } from "@firebase/firestore";
import { imagesRef } from "@/utils/collections";
import { uploadFileWithLink } from "@/utils/firebase";

const validate = useToastedForm(uploadImage, {
  text: "",
  title: "",
});

const loadingStore = useLoadingStore();
const props = defineProps<{ image: File }>();

const route = useRoute();

const dayId: string | any = route?.params?.id;

const { value: title } = useField<string>("title");
const { value: text } = useField<string>("text");

const onSubmit = async () => {
  try {
    const isValid = await validate();
    if (!isValid || !dayId) return;

    loadingStore.load();
    const url = await uploadFileWithLink(props.image);

    const imageToUpload: IImage = {
      dayId,
      imageUrl: url,
      text: text.value,
      title: title.value,
    };

    await addDoc(imagesRef, imageToUpload);
    loadingStore.unload();
    location.reload();
  } catch (error) {
    console.log(error);
    loadingStore.error();
  }
  console.log("submitted");
  //Todo add image to this day
};
</script>

<style scoped></style>
