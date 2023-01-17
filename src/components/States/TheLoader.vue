<template>
  <span class="loader"></span>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: inline-block;
  @apply border-t-green-500 border-t-[4px] border-solid;

  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  @apply border-l-orange-500 border-l-[4px] border-solid;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
