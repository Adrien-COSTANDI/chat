<script setup lang="ts">
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import MessageInput from '@/components/MessageInput.vue'
import { type Chat, getChat, getDraftMessageForUser, myself, setDraftMessageForUser } from '@/services/ChatService.ts'
import { useRoute } from 'vue-router'
import MessageBubble from '@/components/Message.vue'
import ScrollPanel from 'primevue/scrollpanel'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'

const chat = ref({messages: []} as Chat);
const draftMessage = ref("");

const route = useRoute();
const bottom = useTemplateRef<Element>('bottomEl');

const appStateStore = useAppStateStore();

// TODO : refacto appState selectedUser
watch(
    appStateStore.getSelectedUser,
    newUser => {
      chat.value = getChat(newUser.id);
      draftMessage.value = getDraftMessageForUser(newUser.id);
    },
)

function sendMessage(newMessage: string) {
  newMessage = newMessage.trim();
  if (newMessage) {
    chat.value.messages.push({id: Date.now(), timestamp: new Date(Date.now()), content: newMessage, user: myself});
    setDraftMessageForUser(appStateStore.getSelectedUser().id, "");
    bottom.value?.scrollIntoView(false);
  }
}

function updateDraft(value: string) {
  setDraftMessageForUser(appStateStore.getSelectedUser().id, value);
  draftMessage.value = value;
}

watch(chat, () => {
  bottom.value?.scrollIntoView({block: "end", inline: "end"});
}, {deep: true, flush: "post"});

onMounted(() => {
  chat.value = getChat(appStateStore.getSelectedUser().id);
  draftMessage.value = getDraftMessageForUser(appStateStore.getSelectedUser().id);
  bottom.value?.scrollIntoView({block: "end", inline: "end"});
})

function shouldTriggerNewDay(date1: Date, date2: Date | undefined): boolean {
  if (date2 === undefined) {
    return true;
  }

  return (
    date1.getFullYear() !== date2.getFullYear() ||
    date1.getMonth() !== date2.getMonth() ||
    date1.getDate() !== date2.getDate()
  );
}
</script>

<template>
  <div class="chat-container">
    <ScrollPanel style="flex-grow: 1; overflow: hidden" :pt="{
      content: {
        style: `
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-bottom: 0;
          height: 100%;
          `,
      }
    }" :dt="{
      bar: {
        background: 'var(--scrollbar-color)'
      }
    }">
      <MessageBubble
          v-for="(message, index) in chat.messages"
          :key="message.id"
          :message="message"
          :newDay="shouldTriggerNewDay(message.timestamp, chat.messages[index - 1]?.timestamp)"
      />
      <div ref="bottomEl"></div>
    </ScrollPanel>

    <MessageInput :draft="draftMessage" @sendMessage="sendMessage" @onValueChange="value => updateDraft(value)"/>
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

.chat-name {
  text-align: center;
  font-size: 2rem;
  flex-grow: 1;
}

.lens-dark::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14'/%3E%3C/svg%3E");
}

.lens-light::after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14'/%3E%3C/svg%3E");
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

</style>
