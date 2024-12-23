<script setup lang="ts">
import { onMounted, onUpdated, ref, useTemplateRef, watch } from 'vue';
import MessageInput from "@/components/MessageInput.vue";
import { type Chat, getChat, myself } from "@/services/ChatService.ts";
import { useRoute } from "vue-router";
import MessageBubble from "@/views/MessageBubble.vue";

const chat = ref({messages: []} as Chat);

const route = useRoute();

watch(
    () => route.params.userName,
    (newUserName, oldUserName) => {
      console.log(newUserName);
      chat.value = getChat(newUserName as string)
    }
)

const bottom = useTemplateRef('bottomEl')

function sendMessage(newMessage: string) {
  newMessage = newMessage.trim();
  if (newMessage) {
    chat.value.messages.push({id: Date.now(), timestamp: new Date(Date.now()), content: newMessage, user: myself});
    bottom.value?.scrollIntoView(false);
  }
}

onUpdated(() => {
  bottom.value?.scrollIntoView({block: "end", inline: "end"});
})

onMounted(() => {
  chat.value = getChat(route.params.userName as string)
  bottom.value?.scrollIntoView({block: "end", inline: "end"});
})
</script>

<template>
  <div class="chat-container">
    <!--    <header>-->
    <!--      <p class="chat-name">{{ $route.params.userName }}</p>-->
    <!--      <Button rounded variant="text" raised size="small">-->
    <!--        <i :class="{ 'lens-dark': darkModeStore.darkMode, 'lens-light': !darkModeStore.darkMode }" />-->
    <!--      </Button>-->
    <!--    </header>-->
    <main class="messages">
      <MessageBubble
          v-for="message in chat.messages"
          :key="message.id"
          :message="message"
      />
      <div ref="bottomEl"></div>
    </main>

    <MessageInput @sendMessage="sendMessage"/>
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

.messages {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
