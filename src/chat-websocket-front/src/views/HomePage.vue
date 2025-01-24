<script setup lang="ts">
import { getChatPreviews } from '@/services/ChatService.js'
import ChatList from '@/components/ChatList.vue'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
</script>

<template>
  <Splitter :gutter-size="6" state-key="splitter-position" state-storage="local" style="height: 100%">
    <SplitterPanel class="flex items-center justify-center" :size="20" :minSize="10">
      <ChatList :chats="getChatPreviews()" />
    </SplitterPanel>
    <SplitterPanel class="flex items-center justify-center" :size="80" :minSize="50">
      <RouterView />
    </SplitterPanel>
  </Splitter>
</template>
