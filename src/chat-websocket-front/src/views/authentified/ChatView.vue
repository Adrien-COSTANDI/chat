<script setup lang="ts">
import { type ComponentPublicInstance, onMounted, ref, useTemplateRef, watch } from 'vue'
import MessageInput from '@/components/MessageInput.vue'
import { type Chat, getChat, getDraftMessageForUser, myself, setDraftMessageForUser } from '@/services/ChatService.ts'
import UserMessage from '@/components/UserMessage.vue'
import ScrollPanel from 'primevue/scrollpanel'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'

const chat = ref({ messages: [] } as Chat)
const draftMessage = ref('')
const nearBottom = ref(true)

const bottom = useTemplateRef<Element>('bottomEl')
const scrollPanelRef = useTemplateRef<ComponentPublicInstance>('scrollPanelRef')

const appStateStore = useAppStateStore()

watch(appStateStore.getSelectedUser, (newUser) => {
  chat.value = getChat(newUser.id)
  chat.value.messages.map(message => [message.content, message.timestamp.toLocaleString()]).forEach(e => console.log(e))
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
    if (nearBottom.value) {
      scrollToBottom()
    }
  }
}

function updateDraft(value: string) {
  setDraftMessageForUser(appStateStore.getSelectedUser().id, value)
  draftMessage.value = value
}

watch(
  chat,
  () => {
    if (nearBottom.value) {
      scrollToBottom()
    }
  },
  { deep: true, flush: 'post' }
)

onMounted(() => {
  chat.value = getChat(appStateStore.getSelectedUser().id)
  draftMessage.value = getDraftMessageForUser(appStateStore.getSelectedUser().id)
  scrollToBottom()
})

function scrollToBottom(smooth: boolean = false) {
  if (smooth) {
    bottom.value?.scrollIntoView({ block: 'end', inline: 'end', behavior: 'smooth' })
  } else {
    bottom.value?.scrollIntoView({ block: 'end', inline: 'end', behavior: 'instant' })
  }
}

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

function onScroll(event: Event) {
  const scrollContent = event.target as HTMLElement;
  nearBottom.value = scrollContent.scrollHeight - scrollContent.scrollTop - scrollContent.clientHeight < 350;
}
</script>

<template>
  <div class="chat-container">
    <ScrollPanel
      ref="scrollPanelRef"
      class="scrollPanel"
      pt:content:style="height: 100%; padding-bottom: 0"
      :pt:content:onscroll="onScroll"
    >
      <div class="chats">
        <UserMessage
          v-for="(message, index) in chat.messages"
          :key="message.id"
          :message="message"
          :newDay="shouldTriggerNewDay(message.timestamp, chat.messages[index - 1]?.timestamp)"
        />
        <div class="targetScrollBottom" ref="bottomEl"></div>
      </div>
    </ScrollPanel>

    <div v-show="!nearBottom" @click="scrollToBottom(true)" class="scrollToBottom">Scroll to bottom</div>
    <MessageInput
      :draft="draftMessage"
      @onSendMessage="sendMessage"
      @onValueChange="(value) => updateDraft(value)"
    />
  </div>
</template>

<style scoped>

.scrollToBottom {
  padding-left: 1rem;
  background: var(--p-surface-600);
  color: var(--p-secondary-100);
  padding-bottom: 7px;
  margin-bottom: -7px;
  cursor: pointer;
  border-radius: 7px 7px 2px 2px;
}

.scrollPanel {
  flex-grow: 1;
  overflow: hidden;
}

.chats {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.targetScrollBottom {
  margin-top: 4px;
}
</style>
