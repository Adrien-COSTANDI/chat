<script setup lang="ts">
import { type ComponentPublicInstance, onMounted, ref, useTemplateRef, watch } from 'vue'
import MessageInput from '@/components/MessageInput.vue'
import { type Chat, getDraftMessageForUser, setDraftMessageForUser } from '@/services/ChatService.ts'
import UserMessage from '@/components/UserMessage.vue'
import ScrollPanel from 'primevue/scrollpanel'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'
import { useChatStore } from '@/stores/chatStore.ts'

const chat = ref([] as Chat)
const draftMessage = ref('')
const nearBottom = ref(true)

const bottom = useTemplateRef<Element>('bottomEl')
const scrollPanelRef = useTemplateRef<ComponentPublicInstance>('scrollPanelRef')

const appStateStore = useAppStateStore()
const chatStore = useChatStore()

watch(appStateStore.getSelectedUser, (newUser) => {
  chat.value = chatStore.getChatByUserId(newUser.id)
  draftMessage.value = getDraftMessageForUser(newUser.id)
  nearBottom.value = true
})

function sendMessage(newMessage: string) {
  newMessage = newMessage.trim()
  if (newMessage) {
    chatStore.addNewMessageInChatByUserId(appStateStore.getSelectedUser().id, newMessage)
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
  chat.value = chatStore.getChatByUserId(appStateStore.getSelectedUser().id)
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
          v-for="(message, index) in chat"
          :key="message.id"
          :message="message"
          :newDay="shouldTriggerNewDay(message.timestamp, chat[index - 1]?.timestamp)"
        />
        <div class="targetScrollBottom" ref="bottomEl"></div>
      </div>
    </ScrollPanel>

    <Transition>
      <div v-if="!nearBottom" @click="scrollToBottom(true)" class="scrollToBottom">Scroll to bottom</div>
    </Transition>
    <MessageInput
      :draft="draftMessage"
      @onSendMessage="sendMessage"
      @onValueChange="updateDraft"
      style="z-index: 1"
    />
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.2s cubic-bezier(.33,-0.50,.66,1.5);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(50px);
}

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
