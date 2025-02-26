<script setup lang="ts">
import { onBeforeMount, onMounted, ref, useTemplateRef, watch } from 'vue'
import MessageInput from '@/components/MessageInput.vue'
import { type Chat, getDraftMessageForUser, setDraftMessageForUser } from '@/services/ChatService.ts'
import UserMessage from '@/components/UserMessage.vue'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'
import { useChatStore } from '@/stores/chatStore.ts'
import LazyScrollPannel from '@/components/common/LazyScrollPannel.vue'

const appStateStore = useAppStateStore()
const chatStore = useChatStore()

const chat = ref([] as Chat)
const draftMessage = ref('')
const page = ref(0)
const pageOffset = ref(0)
const maxPage = ref(0)

const bottom = useTemplateRef<Element>('bottomEl')

function initChatView() {
  maxPage.value = chatStore.getMaxPage(appStateStore.getSelectedUser().id)
  page.value = 0
  console.log(maxPage.value)

  if (maxPage.value == 0) {
    pageOffset.value = 0
    chat.value = chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value)
  }
  if (maxPage.value >= 1) {
    pageOffset.value = 1
    chat.value = [
      ...chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value + 1),
      ...chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value),
    ]
  }
  console.log("offset", pageOffset.value)

  draftMessage.value = getDraftMessageForUser(appStateStore.getSelectedUser().id)
}

onBeforeMount(initChatView)
onMounted(scrollToBottom)

watch(appStateStore.getSelectedUser, initChatView, { flush: 'pre' })
watch(appStateStore.getSelectedUser, () => scrollToBottom(), { flush: 'post' })

watch(
  chat,
  (c) => {
    // if (page.value == 0) {
    //   scrollToBottom()
    // }
    console.log("chat length", c.length)
  },
  { flush: 'post' }
)

watch(page, p => console.log("page", p))

function sendMessage(newMessage: string) {
  newMessage = newMessage.trim()
  if (newMessage) {
    chatStore.addNewMessageInChatByUserId(appStateStore.getSelectedUser().id, newMessage)
    setDraftMessageForUser(appStateStore.getSelectedUser().id, '')
    if (page.value == 0) {
      scrollToBottom()
    }
  }
}

function updateDraft(value: string) {
  setDraftMessageForUser(appStateStore.getSelectedUser().id, value)
  draftMessage.value = value
}

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

function onScrollDown(scrollRatio: number) {
  if (scrollRatio < 0.9) {
    return
  }
  if (page.value > 0) {
    page.value--
    // chat.value = [...chat.value.slice(chatStore.pageSize), ...chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value)]
    const tmp = chat.value
    tmp.push(...chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value))
    chat.value = tmp.slice(tmp.length - (2 * chatStore.pageSize))
  } else {
    console.log("min page atteinte", chat.value.length)
  }
}

function onScrollUp(scrollRatio: number) {
  if (scrollRatio > 0.1) {
    return
  }
  if (page.value + pageOffset.value < maxPage.value) {
    page.value++
    // chat.value = [...chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value + pageOffset.value), ...chat.value.slice(0, chatStore.pageSize)]
    const tmp = chat.value
    tmp.unshift(...chatStore.getChatByUserId(appStateStore.getSelectedUser().id, page.value + pageOffset.value))
    chat.value = tmp.slice(0, 2 * chatStore.pageSize)
  } else {
    console.log("max page atteinte")
  }
}
</script>

<template>
  <div class="chat-container">
    <LazyScrollPannel
    @onLoadUp="onScrollUp"
    @onLoadDown="onScrollDown"
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
    </LazyScrollPannel>

    <Transition>
      <div v-if="page !== 0" @click="scrollToBottom(true)" class="scrollToBottom">Scroll to bottom</div>
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
