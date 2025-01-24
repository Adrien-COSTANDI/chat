<script setup lang="ts">

import ChatItem from '@/components/ChatItem.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

import ScrollPanel from 'primevue/scrollpanel'
import type { ChatPreview, User } from '@/services/ChatService.ts'

defineProps<{
  chats: Map<User, ChatPreview>
}>()
</script>

<template>
  <ScrollPanel style="width: 100%; height: 100%" :dt="{
    bar: {
      background: 'var(--scrollbar-color)'
    }
  }">
    <Button as="router-link" unstyled class="buttonLink" :to="userChatPair[0].name" v-for="(userChatPair, index) in chats"
            :key="userChatPair[0].name">
      <ChatItem class="buttonLink" :class="$route.params.userName === userChatPair[0].name ? 'selected' : ''"
                :userChatPair="userChatPair"/>
      <Divider style="margin: 0"/>
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
