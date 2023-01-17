<template>
  <TheSignUpForm />
  <TheLoginForm />
</template>

<script setup lang="ts">
import TheLoginForm from "@/components/Form/TheLoginForm.vue";
import TheSignUpForm from "@/components/Form/TheSignUpForm.vue";
import { todosRef } from "@/utils/firebase";
import { addDoc } from "@firebase/firestore";
import { useRoute, useRouter } from "vue-router";
import {
  useCollection,
  useCurrentUser,
  useDocument,
  useFirebaseAuth,
} from "vuefire";

import useModalStore from "@/store/useModalStore";
import { onMounted } from "vue";

const router = useRouter();
const auth = useFirebaseAuth();

const store = useModalStore();

onMounted(() => {
  store.openModalWithLoader();
});

const timeout = setTimeout(() => router.push("/login"), 2000);

auth?.onAuthStateChanged((user) => {
  clearTimeout(timeout);
  store.closeModal();
  console.log("changed");
});

const collec = useCollection(todosRef);
console.log(collec.value);
</script>

<style scoped></style>
