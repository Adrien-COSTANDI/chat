<script setup lang="ts">
import Message, { type MessageData, type User } from "@/components/Message.vue";

const props = defineProps<{
    messages: MessageData[]
}>()


function computeContinuation(messages: MessageData[], sender: User, index: number) {
    if (index === 0) return false;
    return messages[index - 1].sender.username === sender.username;
}
</script>

<template>
    <v-row class="w-full overflow-y-auto" style="height: 90vh">
        <v-col>
            <Message
                    v-for="(message, index) in props.messages"
                    :message="message"
                    :continuation="computeContinuation(props.messages, message.sender, index)"
            />
        </v-col>
    </v-row>
</template>
