<template>
  <form
    @submit.prevent="props.onSubmit"
    :class="`w-full max-w-[40rem] bg-gray-800 rounded-xl md:p-4 p-2 flex items-center justify-center border-2 border-orange-500 ${
      props.isRow ? ' gap-4' : 'flex-col'
    }`"
  >
    <h3
      v-if="props.heading"
      class="text-3xl text-orange-500 font-bold self-start p-4"
    >
      {{ props.heading }}
    </h3>
    <slot />
    <button
      type="submit"
      class="border-2 border-green-500 mx-auto text-2xl font-bold rounded-xl text-green-500 px-4 py-2 hover:bg-green-500 active:bg-green-600 hover:text-white transition-all"
    >
      Submit
    </button>
  </form>
</template>

<script setup lang="ts">
interface IFormProps {
  onSubmit: () => any;
  isRow?: boolean;
  heading?: string;
}
const props = defineProps<IFormProps>();
</script>

<style scoped></style>
