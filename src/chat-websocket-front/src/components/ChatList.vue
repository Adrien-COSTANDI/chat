<script setup lang="ts">
import ChatItem from '@/components/ChatItem.vue'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

import ScrollPanel from 'primevue/scrollpanel'
import type { ChatPreview, Id } from '@/services/ChatService.ts'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'

const appStateStore = useAppStateStore()
defineProps<{
  chats: Map<Id, ChatPreview>
}>()
</script>

<template>
  <ScrollPanel style="width: 100%; height: 100%">
    <Button
      as="router-link"
      unstyled
      class="buttonLink"
      :to="userChatPair[0]"
      v-for="userChatPair in chats"
      :key="userChatPair[0]"
    >
      <ChatItem
        class="buttonLink"
        :class="{selected: $route.params.userId === userChatPair[0]}"
        :chatPreview="userChatPair[1]"
      />
      <Divider style="margin: 0" />
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
