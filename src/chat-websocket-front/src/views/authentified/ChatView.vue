<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import MessageInput from '@/components/MessageInput.vue'
import { type Chat, getChat, getDraftMessageForUser, myself, setDraftMessageForUser } from '@/services/ChatService.ts'
import UserMessage from '@/components/UserMessage.vue'
import ScrollPanel from 'primevue/scrollpanel'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'

const chat = ref({ messages: [] } as Chat)
const draftMessage = ref('')

const bottom = useTemplateRef<Element>('bottomEl')

const appStateStore = useAppStateStore()

watch(appStateStore.getSelectedUser, (newUser) => {
  chat.value = getChat(newUser.id)
  draftMessage.value = getDraftMessageForUser(newUser.id)
})

function sendMessage(newMessage: string) {
  newMessage = newMessage.trim()
  if (newMessage) {
    chat.value.messages.push({
      id: Date.now(),
      timestamp: new Date(Date.now()),
      content: newMessage,
      user: myself,
    })
    setDraftMessageForUser(appStateStore.getSelectedUser().id, '')
    bottom.value?.scrollIntoView(false)
  }
}

function updateDraft(value: string) {
  setDraftMessageForUser(appStateStore.getSelectedUser().id, value)
  draftMessage.value = value
}

watch(
  chat,
  () => {
    bottom.value?.scrollIntoView({ block: 'end', inline: 'end' })
  },
  { deep: true, flush: 'post' },
)

onMounted(() => {
  chat.value = getChat(appStateStore.getSelectedUser().id)
  draftMessage.value = getDraftMessageForUser(appStateStore.getSelectedUser().id)
  bottom.value?.scrollIntoView({ block: 'end', inline: 'end' })
})

function shouldTriggerNewDay(date1: Date, date2: Date | undefined): boolean {
  if (date2 === undefined) {
    return true
  }

  return (
    date1.getFullYear() !== date2.getFullYear() ||
    date1.getMonth() !== date2.getMonth() ||
    date1.getDate() !== date2.getDate()
  )
}
</script>

<template>
  <div class="chat-container">
    <ScrollPanel class="scrollPanel" pt:content:style="height: 100%; padding-bottom: 0">
      <div class="chats">
        <UserMessage
          v-for="(message, index) in chat.messages"
          :key="message.id"
          :message="message"
          :newDay="shouldTriggerNewDay(message.timestamp, chat.messages[index - 1]?.timestamp)"
        />
        <div ref="bottomEl"></div>
      </div>
    </ScrollPanel>

    <MessageInput
      :draft="draftMessage"
      @sendMessage="sendMessage"
      @onValueChange="(value) => updateDraft(value)"
    />
  </div>
</template>

<style scoped>
.scrollPanel {
  flex-grow: 1;
  overflow: hidden;
}

.chats {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
