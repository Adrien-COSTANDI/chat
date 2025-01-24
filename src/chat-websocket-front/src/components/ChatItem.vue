<script setup lang="ts">
import Avatar from 'primevue/avatar'
import icon from '@/assets/logo.svg'

import type { ChatPreview, User } from '@/services/ChatService.ts'

defineProps<{
  userChatPair: [User, ChatPreview]
}>()
</script>

<template>
  <div class="chat-preview">
    <Avatar :image="icon" class="avatar" shape="circle" />
    <div class="content">
      <div class="header">
        <span class="username">{{ userChatPair[0].name }}</span>
        <span class="date crop">{{ userChatPair[1].timestamp.toLocaleDateString() }}</span>
      </div>
      <div class="last-message crop">{{ userChatPair[1].lastMessage }}</div>
    </div>
  </div>
</template>

<style scoped>

.chat-preview {
  display: flex;
  align-items: center;
  padding: 13px 10px 13px 10px;
}

.chat-preview:hover {
  background: var(--p-hover-background-color);
}

.avatar {
  width: 40px; /* Adjust size of avatar */
  height: 40px;
  flex-shrink: 0;
  margin-right: 10px;
  border: solid 1px var(--avatar-border-color);
  border-radius: 50%;
}

.content {
  display: flex;
  flex-direction: column;
  width: calc(100% - 50px);
}

.header {
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.username {
  font-weight: bold;
  margin-right: 10px;
}

.date {
  margin-right: 0.2rem;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-style: italic;
}

.last-message {
  font-size: 1rem;
}

.crop {
  white-space: nowrap; /* Prevent wrapping */
  overflow: hidden; /* Hide overflow content */
  text-overflow: ellipsis; /* Add ellipsis for cropped text */
  box-sizing: border-box; /* Include padding in width calculation */
}

</style>
