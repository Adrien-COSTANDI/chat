<script setup lang="ts">

import ChatItem from '@/components/ChatItem.vue'
import Divider from 'primevue/divider'

import ScrollPanel from 'primevue/scrollpanel'
import type { ChatPreview } from '@/services/ChatService.ts'

defineProps<{
  chats: ChatPreview[]
}>()
</script>

<template>
  <ScrollPanel style="width: 100%; height: 100%" :dt="{
    bar: {
      background: 'var(--scrollbar-background)'
    }
  }">
    <RouterLink class="buttonLink" :to="chat.userName" v-for="(chat, index) in chats" :key="chat.userName">
      <Divider style="margin: 0" v-if="index !== 0" />
      <ChatItem :chat="chat"/>
    </RouterLink>

  </ScrollPanel>

</template>

<style scoped>
  .buttonLink {
    color: inherit;
    text-decoration: inherit;
  }
</style>
