<script setup lang="ts">
import { type Message, myself } from "@/services/ChatService.js";
import icon from '@/assets/logo.svg'
import Avatar from 'primevue/avatar'

defineProps<{
  message: Message
}>()
</script>

<template>
  <div
      class="message"
      :class="{ 'self': message.user.id === myself.id, 'other': message.user.id !== myself.id }"
  >
    <Avatar :image="icon" class="avatar" shape="circle"/>
    <div class="message-bubble">
      <span class="content">{{ message.content }}</span>
      <span class="time">{{ message.timestamp.toLocaleTimeString().slice(0, 5) }}</span>
    </div>
  </div>
</template>


<style scoped>

header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: antiquewhite;
}

.message {
  display: flex;
  max-width: 100%;
  align-items: start;
  margin: 0 10px;
}

.avatar {
  margin-top: 5px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
  border: solid 1px var(--avatar-border-color);
}

.message.self {
  flex-direction: row-reverse;
}

.message.other {
  justify-content: flex-start;
}

.message-bubble {
  padding: 10px 15px;
  border-radius: 15px;
  background-color: var(--other-chat-color);
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}

.message-bubble .time {
  font-size: 0.7rem;
  text-align: end;
  margin-top: 0;
  margin-bottom: 0;
  font-style: italic;
}

.message.self .message-bubble {
  background-color: var(--self-chat-color);
}

</style>