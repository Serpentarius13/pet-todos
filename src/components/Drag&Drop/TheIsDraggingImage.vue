<template>
  <div class="wrapper">
    <div class="drag" v-if="props.isDragging">
      <img src="/img/dropImage.svg" alt="drop" class="w-48 h-48" />
      <h3 class="text-green-500 text-3xl font-extrabold">Drop images here</h3>
    </div>
    <div class="imageGrid" v-else />
  </div>
</template>

<script setup lang="ts">
interface IDragProps {
  isDragging: boolean;
}

const props = defineProps<IDragProps>();
</script>

<style scoped lang="scss">
.wrapper {
  @apply w-[95vw] h-[30vh]  border-2  border-orange-500;
}

@mixin divi {
  @apply w-full h-full p-4;
  animation: appear ease-out 0.1s 1;
}
.imageGrid {
  @include divi;
  @apply grid p-4 gap-2  bg-gray-700;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

.drag {
  @include divi;

  @apply bg-gray-500 flex items-center flex-col justify-center;
}

@keyframes appear {
  from {
    @apply opacity-0;
  }
  to {
    @apply opacity-100;
  }
}
</style>
