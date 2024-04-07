<script setup lang="ts">
import Message from "@/components/Message.vue";
</script>

<template>
    <v-container>
        <v-row no-gutters>
            <v-col>
                <Message/>
                <Message continuation/>
                <Message continuation/>
                <Message/>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
