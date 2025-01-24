<script setup lang="ts">
import { type Message, myself } from '@/services/ChatService.ts'
import icon from '@/assets/logo.svg'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import MessageBubble from '@/components/MessageBubble.vue'
import Tag from 'primevue/tag'

defineProps<{
  message: Message
  newDay: boolean
}>()
</script>

<template>
  <Divider v-if="newDay" align="center" style="margin: 0">
    <Tag rounded :value="message.timestamp.toLocaleDateString()" />
  </Divider>
  <div
    class="message"
    :class="{ self: message.user.id === myself.id, other: message.user.id !== myself.id }"
  >
    <Avatar :image="icon" class="avatar" shape="circle" />
    <MessageBubble :message="message" />
  </div>
</template>

<style scoped>
.message {
  display: flex;
  align-items: start;
  margin: 0 14px;
  gap: 14px;
}

.avatar {
  margin-top: 4px;
  border-radius: 50%;
  border: solid 1px var(--avatar-border-color);
  flex-shrink: 0;
}

.message.self {
  flex-direction: row-reverse;
}
</style>
