<script setup lang="ts">
import Button from 'primevue/button'
import SplitterPanel from 'primevue/splitterpanel'
import Splitter from 'primevue/splitter'
import ChatList from '@/components/ChatList.vue'
import { chatPreviews } from '@/services/ChatService.ts'
import { useDarkModeStore } from '@/stores/darkMode'

const darkModeStore = useDarkModeStore();

if (darkModeStore.darkMode) {
  document.documentElement.classList.toggle('my-app-dark');
}

function toggleDarkMode() {
  darkModeStore.toggleDarkMode();
  document.documentElement.classList.toggle('my-app-dark');
}

</script>

<template>
  <div style="height: 100vh">
    <header>
      <h2>Chat</h2>
      <Button class="dark-mode-toggle" @click="toggleDarkMode()">
        <i :class="{ 'dark-mode': darkModeStore.darkMode, 'light-mode': !darkModeStore.darkMode }" />
      </Button>
    </header>
    <main>
      <Splitter :gutter-size="6" state-key="splitter-position" state-storage="local" style="height: 100%">
        <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10">
          <ChatList :chats="chatPreviews"/>
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center" :size="80" :minSize="50">
          <RouterView />
        </SplitterPanel>
      </Splitter>
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
}

.dark-mode-toggle {
  background: var(--dark-mode-button-color);
  padding: 10px 9px;
}

.dark-mode::after {
  content: url('https://api.iconify.design/emojione/smiling-face.svg');
}

.light-mode::after {
  content: url('https://api.iconify.design/emojione/smiling-face-with-sunglasses.svg');
}

</style>
