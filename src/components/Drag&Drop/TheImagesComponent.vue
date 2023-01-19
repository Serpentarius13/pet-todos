<template>
  <div
    @dragenter="setIsDraggin"
    @dragleave="leaveIsDraggin"
    @drop.capture.prevent.stop="handleFileDrop"
    @dragover.capture.prevent.stop
    @drag.capture.prevent.stop
  >
    <TheIsDraggingImage :is-dragging="dragging" />
  </div>
</template>

<script setup lang="ts">
import useModalStore from "@/store/useModalStore";
import { Ref, ref } from "vue";
import TheDragImageForm from "./TheDragImageForm.vue";
import TheIsDraggingImage from "./TheIsDraggingImage.vue";

const modalStore = useModalStore();

const dragging: Ref<boolean> = ref(false);
const setIsDraggin = () => {
  dragging.value = true;
  console.log("dragging");
};

const dragDiv: Ref<null | HTMLDivElement> = ref(null);

const leaveIsDraggin = () => {
  dragging.value = false;
  console.log("not dragging");
};

const handleFileDrop = (event: DragEvent) => {
  const files: any = event.dataTransfer?.files;
  const image = files[0];

  modalStore.openModal({
    component: TheDragImageForm,
    props: {
      image,
    },
  });

  dragging.value = false;
};
</script>

<style scoped></style>
