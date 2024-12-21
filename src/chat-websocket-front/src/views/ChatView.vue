<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const messages = ref([
    {id: 1, text: "Hi there!", user: "other"},
    {id: 2, text: "Hello! How are you?", user: "self"},
    {id: 3, text: "I'm good, thanks for asking.", user: "other"},
]);

const newMessage = ref("");

function sendMessage() {
    if (newMessage.value.trim()) {
        messages.value.push({id: Date.now(), text: newMessage.value, user: "self"});
        newMessage.value = "";
    }
}
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
                <div class="message-bubble">{{ message.text }}</div>
            </div>
        </div>

        <form @submit.prevent="sendMessage" class="message-prompt">
            <InputText autofocus v-model="newMessage" placeholder="Type a message..." class="message-input"/>
            <Button label="Send" @click="sendMessage" class="send-button"/>
        </form>
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
}

.message.self {
    justify-content: flex-end;
}

.message.other {
    justify-content: flex-start;
}

.message-bubble {
    padding: 10px 15px;
    border-radius: 15px;
    background-color: var(--other-chat-color);
    color: white;
    font-size: 1rem;
}

.message.self .message-bubble {
    background-color: var(--self-chat-color);
}

.message-prompt {
    display: flex;
    gap: 10px;
    padding: 10px;
    background: var(--p-hover-background-color);
}

.message-input {
    flex-grow: 1;
}

.send-button {
    flex-shrink: 0;
}
</style>
