<script setup lang="ts">

import { ref } from "vue";

export interface MessageData {
    sender: User,
    date: Date,
    content: string;
}

export interface User {
    username: string,
    avatar? : string
}

interface Props {
    continuation?: boolean,
    message: MessageData
}

const props = withDefaults(defineProps<Props>(), {
    continuation: false
})

let isHovered = ref(false);

function handleOver() {
    isHovered.value = true
}

function handleLeave() {
    isHovered.value = false
}

function parseMessageContent(content: string): string {
    const urlRegex = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*))/g;

    const matches = content.match(urlRegex);
    if (!matches) return content;

    let output = content;

    for(let match of matches){
        output = output.replace(match, `<a class="text-blue text-decoration-underline" target="_blank" href="${match}">${match}</a>`);
    }

    return output;
}

</script>

<template>
    <v-row :class="props.continuation ? 'mt-0' : 'mt-1'" class="hover:bg-gray-200" no-gutters align="start" @mouseover="handleOver" @mouseleave="handleLeave">
        <div class="ml-3 mr-1 mt-1">
            <v-avatar v-show="!props.continuation" class="hover:cursor-pointer">
                <v-img
                        v-if="message.sender.avatar"
                        alt="Avatar"
                        :src="message.sender.avatar"
                />
                <span
                        v-else
                        class="rounded text-center bg-blue-accent-3 pa-4 font-weight-bold">
                    {{message.sender.username.slice(0, 2)}}
                </span>
            </v-avatar>

            <div class="mr-10" v-show="props.continuation && !isHovered"></div>
            <div class="text-sm-caption font-weight-thin ml-[8px]" v-show="props.continuation && isHovered">
                {{ new Date(message.date).toLocaleTimeString().slice(0, -3) }}
            </div>
        </div>

        <div class="ml-3">
            <div v-show="!props.continuation">
                <p class="font-weight-medium">{{message.sender.username}} <span v-show="!props.continuation"
                                                           class="text-sm-caption font-weight-thin">{{
                        new Date(message.date).toLocaleString().slice(0, -3)
                    }}</span></p>
            </div>
            <div>
                <p class="-mt-0.5 mb-0.5" v-html="parseMessageContent(message.content)"></p>
            </div>
        </div>
    </v-row>
</template>

<style scoped>

</style>
