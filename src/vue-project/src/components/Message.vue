<script setup lang="ts">

import { ref } from "vue";

interface Props {
    continuation?: boolean
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
    <v-row class="hover:bg-gray-200" no-gutters align="center" @mouseover="handleOver" @mouseleave="handleLeave">
        <div class="ml-3">
            <v-avatar v-show="!props.continuation">
                <v-img
                        v-if="true"
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                />
                <span
                        v-else
                        class="rounded bg-blue-accent-3 pa-4 font-weight-bold">
                    Ce
                </span>
            </v-avatar>

            <div class="mr-10" v-show="!isHovered && props.continuation"></div>
            <div class="text-sm-caption mr-2" v-show="isHovered && props.continuation">
                {{ new Date().toLocaleTimeString().slice(0, -3) }}
            </div>
        </div>


        <div class="ml-3">
            <div v-show="!props.continuation">
                <p class="font-weight-bold">Username <span v-show="!props.continuation"
                                                           class="text-sm-caption">{{
                        new Date().toLocaleString().slice(0, -3)
                    }}</span></p>
            </div>
            <div>
                <p>Message content</p>
            </div>
        </div>
    </v-row>
</template>

<style scoped>

</style>
