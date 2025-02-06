<script setup lang="ts">
import ChatList from '@/components/ChatList.vue'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import { useChatStore } from '@/stores/chatStore.ts'

const chatStore = useChatStore()
</script>

<template>
  <Splitter
    :gutter-size="6"
    state-key="splitter-position"
    state-storage="local"
    style="height: 100%"
  >
    <SplitterPanel :size="20" :minSize="10">
      <ChatList :chats="chatStore.getChatPreviews()" />
    </SplitterPanel>
    <SplitterPanel :size="80" :minSize="50">
      <RouterView />
    </SplitterPanel>
  </Splitter>
</template>
