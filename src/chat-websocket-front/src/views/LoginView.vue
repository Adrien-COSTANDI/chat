<script setup lang="ts">
import Button from 'primevue/button'
import { userAuthStore } from "@/stores/userAuth.ts";
import { useRouter } from "vue-router";

const userStore = userAuthStore();
const router = useRouter();

function login() {
  userStore.login({
    id: 0,
    name: "Adrien",
    avatar: "AvatarAdrien",
  })
  router.push("/");
}
</script>

<template>
  <h1>Login</h1>
  <Button @click="login">Login</Button>
</template>

<style scoped>

</style>