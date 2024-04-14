<script setup lang="ts">
import Chat from "@/components/Chat.vue";
import MessageService from "@/services/MessageService";
import { ref } from "vue";

const messageService = MessageService.instance
const content = ref("")

function handleSubmit() {
    const trimmed: string = content.value.trim()
    if (trimmed === "") return

    messageService.addMessage({
        sender: {
            username: 'toto'
        },
        date: new Date(),
        content: trimmed
    })
    content.value = ""
}</script>

<template>
    <v-container fluid>
        <v-col>
            <Chat :messages="messageService.getMessages()"/>
            <form @submit.prevent="handleSubmit">
                <v-text-field
                        v-model="content"
                        class="w-full mt-2"
                        density="compact"
                        label="Envoyer un message"
                        placeholder="Envoyer un message"
                        variant="outlined"
                        hide-details
                        single-line
                ></v-text-field>
            </form>
        </v-col>
    </v-container>
</template>
