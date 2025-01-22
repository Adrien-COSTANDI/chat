<script setup lang="ts">

import type { Message } from '@/services/ChatService.ts'

defineProps<{
  message: Message,
}>()
</script>

<template>
  <div class="message-bubble">
    <span class="content">{{ message.content }}</span>
    <span class="time">{{ message.timestamp.toLocaleTimeString().slice(0, 5) }}</span>
  </div>
</template>

<style scoped>

.content {
  word-wrap: anywhere;
  overflow-wrap: anywhere;
}

.message-bubble {
  padding: 7px 15px;
  border-radius: 15px;
  background-color: var(--other-chat-color);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.message.self .message-bubble {
  background-color: var(--self-chat-color);
}

.message-bubble:hover, .message.self .message-bubble:hover {
  box-shadow: 3px 3px 10px var(--p-hover-background-color);
}

.message-bubble .time {
  font-size: 0.7rem;
  text-align: end;
  font-style: italic;
}

</style>
