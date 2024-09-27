<script setup lang="ts">
import Message, { type MessageData, type User } from "@/components/Message.vue";
import MessageService from "@/services/MessageService";
import { ref } from "vue";

const messageService = MessageService.instance
// const messages = await messageService.getMessages()

function computeContinuation(messages: MessageData[], sender: User, index: number) {
    if (index === 0) return false;
    return messages[index - 1].sender.username === sender.username;
}

const messages = ref<MessageData[] | null>(null)
const error = ref(null)

fetch("http://localhost:8080/api/messages")
        .then((res) => res.json())
        .then((json) => (messages.value = json as MessageData[]))
        .catch((err) => (error.value = err))
</script>

<template>
    <div v-if="error">Oops! Error encountered: {{ error }}</div>
    <v-row v-else-if="messages" class="w-full overflow-y-auto" style="height: 90vh">
        <v-col>
            <Message
                    v-for="(message, index) in messages"
                    :message="message"
                    :continuation="computeContinuation(messages, message.sender, index)"
            />
        </v-col>
    </v-row>
    <div v-else>Loading...</div>

</template>
