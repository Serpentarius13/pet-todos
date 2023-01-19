<template>
  <div
    class="flex flex-col items-center gap-4 md:p-8 p-4 rounded-xl bg-gray-800 max-w-[95vw] lg:max-w-[70vw] min-h-[60vh] select-none"
  >
    <img
      alt="Image"
      ref="imgRef"
      class="rounded-xl max-w-[300px] max-h-[300px] object-contain"
    />

    <div class="flex flex-col items-center p-2 gap-4 justify-center">
      <TheDragDropForm :image="props.image" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";

import TheDragDropForm from "../Form/TheDragDropForm.vue";

interface IDragImageProps {
  image: File;
}
const props = defineProps<IDragImageProps>();

const imgRef: Ref<HTMLImageElement | null> = ref(null);

const setImgSrc = () => {
  const reader = new FileReader();
  reader.readAsDataURL(props.image);
  reader.onload = () => {
    //@ts-ignore
    imgRef.value.src = reader.result.toString();
  };
};

onMounted(() => {
  setImgSrc();
});
</script>

<style lang="scss" scoped>
.img {
  width: clamp(15rem, 90vw, 30rem);
  height: clamp(15rem, 90vw, 30rem);

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
