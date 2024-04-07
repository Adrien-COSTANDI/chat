<script setup lang="ts">
import Message from "@/components/Message.vue";
</script>

<template>
    <v-row>
        <v-col>
            <Message/>
            <Message continuation/>
            <Message continuation/>
            <Message/>
        </v-col>
    </v-row>
</template>

<style scoped></style>
