<template>
  <button
    class="border-2 border-green-500 mx-auto text-2xl font-bold rounded-xl text-green-500 px-4 py-2 hover:bg-green-500 active:bg-green-600 hover:text-white transition-all"
  >
    {{ props.text || 'Submit' }}
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{ text?: string }>();
</script>

<style scoped lang="scss"></style>
