<template>
  <form
    @submit.prevent="props.onSubmit"
    :class="`forma bg-gray-800 rounded-xl md:p-4 p-2 flex items-center justify-center border-2 border-orange-500  ${
      props.isRow ? ' gap-4' : 'flex-col'
    }`"
  >
    <div />

    <h3
      v-if="props.heading"
      class="text-3xl text-orange-500 font-bold self-start p-4"
    >
      {{ props.heading }}
    </h3>

    <slot />

    <BaseReusableButton text="Submit" />
  </form>
</template>

<script setup lang="ts">
import BaseReusableButton from "../Buttons/BaseReusableButton.vue";

interface IFormProps {
  onSubmit: () => any;
  isRow?: boolean;
  heading?: string;
}
const props = defineProps<IFormProps>();
</script>

<style scoped>
.forma {
  width: clamp(20rem, 75vw, 40rem);
}
</style>
