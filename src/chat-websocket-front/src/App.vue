<script setup lang="ts">
import Button from 'primevue/button';
import SplitterPanel from 'primevue/splitterpanel'
import Splitter from 'primevue/splitter'
import ChatList from '@/components/ChatList.vue'
import type { ChatPreview } from '@/services/ChatService.ts'

function toggleDarkMode() {
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
  <Button @click="toggleDarkMode()" label="Dark Mode"></Button>

  <main>
    <Splitter style="height: 93vh">
      <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10">
        <ChatList :chats="chats" />
      </SplitterPanel>
      <SplitterPanel class="flex items-center justify-center" :size="80" :minSize="50">
        <RouterView />
      </SplitterPanel>
    </Splitter>
  </main>
</template>
