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
                        class="rounded bg-blue-accent-3 pa-4 font-weight-bold">
                    {{message.sender.username.slice(0, 2)}}
                </span>
            </v-avatar>

            <div class="mr-10" v-show="props.continuation && !isHovered"></div>
            <div class="text-sm-caption font-weight-thin ml-[9px]" v-show="props.continuation && isHovered">
                {{ message.date.toLocaleTimeString().slice(0, -3) }}
            </div>
        </div>

        <div class="ml-3">
            <div v-show="!props.continuation">
                <p class="font-weight-medium">{{message.sender.username}} <span v-show="!props.continuation"
                                                           class="text-sm-caption font-weight-thin">{{
                        message.date.toLocaleString().slice(0, -3)
                    }}</span></p>
            </div>
            <div>
                <p class="-mt-0.5 mb-0.5">{{message.content}}</p>
            </div>
        </div>
    </v-row>
</template>

<style scoped>

</style>
