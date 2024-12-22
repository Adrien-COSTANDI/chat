<script setup lang="ts">
import { onMounted, onUpdated, ref, useTemplateRef } from 'vue';
import icon from "@/assets/logo.svg";
import Avatar from "primevue/avatar";
import MessageInput from "@/components/MessageInput.vue";

const messages = ref([
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
  {id: 1, text: "Hi there!", user: "other"},
  {id: 2, text: "Hello! How are you?", user: "self"},
  {id: 3, text: "I'm good, thanks for asking.", user: "other"},
]);

const bottom = useTemplateRef('bottomEl')

function sendMessage(newMessage: string) {
  newMessage = newMessage.trim();
  if (newMessage) {
    messages.value.push({id: Date.now(), text: newMessage, user: "self"});
    bottom.value?.scrollIntoView(true); // TODO améliorer le scroll, marche avec un cran de décalage
    // TODO quand on change de vue ça ne redescend pas
  }
}

onUpdated(() => {
  bottom.value?.scrollIntoView({block: "end", inline: "end"});
})

onMounted(() => {
  bottom.value?.scrollIntoView({block: "end", inline: "end"});
})
</script>

<template>
  <div class="chat-container">
    <h3 class="chat-name">
      {{ $route.params.userName }}
    </h3>
    <div class="messages">
      <div
          v-for="message in messages"
          :key="message.id"
          class="message"
          :class="{ self: message.user === 'self', other: message.user === 'other' }"
      >
        <Avatar :image="icon" class="avatar" shape="circle" />
        <div class="message-bubble">
          <span class="content">{{ message.text }}</span>
          <span class="time">14:35</span>
        </div>
      </div>
      <div ref="bottomEl"></div>
    </div>

    <MessageInput @sendMessage="sendMessage" />
  </div>
</template>

<style scoped>
.chat-name {
  text-align: center;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.messages {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  display: flex;
  max-width: 100%;
  align-items: start;
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
  //justify-content: flex-end;
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
