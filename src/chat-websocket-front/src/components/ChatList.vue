<script setup lang="ts">

import ChatItem from '@/components/ChatItem.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button';

import ScrollPanel from 'primevue/scrollpanel'
import type { ChatPreview } from '@/services/ChatService.ts'

defineProps<{
  chats: ChatPreview[]
}>()
</script>

<template>
  <ScrollPanel style="width: 100%; height: 100%" :dt="{
    bar: {
      background: 'var(--scrollbar-color)'
    }
  }">
    <Button as="router-link" unstyled class="buttonLink" :to="chat.user.name" v-for="(chat, index) in chats"
            :key="chat.user.name">
      <Divider style="margin: 0" v-if="index !== 0"/>
      <ChatItem class="buttonLink" :class="$route.params.userName === chat.user.name ? 'selected' : ''"
                :chatPreview="chat"/>
    </Button>

  </ScrollPanel>

</template>

<style scoped>
.buttonLink {
  color: inherit;
  text-decoration: inherit;
}

.buttonLink:active {
  background: var(--p-selected-background-color);
}

.selected {
  background: var(--p-selected-background-color);
}
</style>
