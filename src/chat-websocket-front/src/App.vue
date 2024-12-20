<script setup lang="ts">
import Button from 'primevue/button'
import SplitterPanel from 'primevue/splitterpanel'
import Splitter from 'primevue/splitter'
import ChatList from '@/components/ChatList.vue'
import type { ChatPreview } from '@/services/ChatService.ts'
import { useDarkModeStore } from '@/stores/darkMode'

const darkModeStore = useDarkModeStore()

if (darkModeStore.darkMode) {
  document.documentElement.classList.toggle('my-app-dark')
}

function toggleDarkMode() {
  console.log(darkModeStore.darkMode)
  darkModeStore.toggleDarkMode()
  document.documentElement.classList.toggle('my-app-dark')
}

const chats: ChatPreview[] = [
  {
    userName: 'Username',
    lastMessage: 'Preview of the last message',
    avatar: 'icon'
  },
  {
    userName: 'zefzef',
    lastMessage: 'lorem djz eoijzoe fij oezijf ozjfz oejif ozejf o foz fzojiz odaoi izzd o ozdiazi i zi sda az dazd dz d d a aazd  adzdzaz dadz azd adzazda',
    avatar: 'icon'
  },
  {
    userName: 'Username',
    lastMessage: 'Preview of the last message',
    avatar: 'icon'
  },
  {
    userName: 'Toto',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'zefzef',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'fhrj',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'Toto',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'zefzef',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'fhrj',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'Toto',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'zefzef',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  },
  {
    userName: 'fhrj',
    lastMessage: 'Ceci est le dernier message de la conv',
    avatar: 'icon'
  }
]
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
      <Splitter style="height: 100%">
        <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10">
          <ChatList :chats="chats" />
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

.dark-mode::after {
  content: url('https://api.iconify.design/emojione/smiling-face.svg');
}

.light-mode::after {
  content: url('https://api.iconify.design/emojione/smiling-face-with-sunglasses.svg');
}

</style>
