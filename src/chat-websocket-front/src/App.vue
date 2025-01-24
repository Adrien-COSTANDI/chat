<script setup lang="ts">
import Button from 'primevue/button'
import { useDarkModeStore } from '@/stores/darkMode'
import HomePage from '@/views/authentified/HomePage.vue'
import { userAuthStore } from '@/stores/userAuth.ts'
import { useRouter } from 'vue-router'

const darkModeStore = useDarkModeStore()
const router = useRouter()
const authStore = userAuthStore()

if (darkModeStore.darkMode) {
  document.documentElement.classList.toggle('my-app-dark')
}

function toggleDarkMode() {
  darkModeStore.toggleDarkMode()
  document.documentElement.classList.toggle('my-app-dark')
}

function logout() {
  authStore.logout()
  router.push({ name: 'Login' })
}
</script>

<template>
  <div style="height: 100vh">
    <header>
      <h2>Chat</h2>
      <Button class="dark-mode-toggle" @click="toggleDarkMode()">
        <i
          :class="{ 'dark-mode': darkModeStore.darkMode, 'light-mode': !darkModeStore.darkMode }"
        />
      </Button>
      <Button v-if="authStore.isAuthenticated()" class="logout-button" @click="logout()">
        <i
          :class="{
            'dark-logout': darkModeStore.darkMode,
            'light-logout': !darkModeStore.darkMode,
          }"
        />
      </Button>
    </header>
    <main>
      <HomePage v-if="userAuthStore().isAuthenticated()" />
      <RouterView v-else />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  height: var(--header-size);
  padding: 4px;
  background-color: var(--p-content-background);
}

header h2 {
  flex: 1;
  text-align: center;
}

main {
  height: calc(100vh - var(--header-size));
  background-color: var(--p-content-background);
}

.dark-mode-toggle {
  background: var(--dark-mode-button-color);
  padding: 10px 9px;
}

.dark-mode::after {
  content: url('@/assets/smiling-face.svg');
}

.light-mode::after {
  content: url('@/assets/smiling-face-with-sunglasses.svg');
}

.light-logout::after {
  content: url('@/assets/dark-logout.svg');
}
.dark-logout::after {
  content: url('@/assets/light-logout.svg');
}
</style>
