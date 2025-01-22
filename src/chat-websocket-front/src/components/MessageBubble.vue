<script setup lang="ts">
import { type Message, myself } from "@/services/ChatService.ts";
import icon from '@/assets/logo.svg'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'

defineProps<{
  message: Message,
  newDay: boolean,
}>()
</script>

<template>
  <Divider v-if="newDay" align="center" style="margin: 0" >
    <span class="date">{{message.timestamp.toLocaleDateString()}}</span>
  </Divider>
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

.message-bubble {
  padding: 7px 15px;
  border-radius: 15px;
  background-color: var(--other-chat-color);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.message-bubble:hover, .message.self .message-bubble:hover {
  box-shadow: 3px 3px 10px var(--p-hover-background-color);
}

.message-bubble .time {
  font-size: 0.7rem;
  text-align: end;
  font-style: italic;
}

.message.self .message-bubble {
  background-color: var(--self-chat-color);
}

.date {
  font-size: 0.8rem;
  margin: 0 8px;
}

</style>
