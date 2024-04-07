<script setup lang="ts">
import Message from "@/components/Message.vue";
</script>

<template>
    <v-row class="fixed top-0 w-full">
        <v-col>
            <Message/>
            <Message continuation/>
            <Message continuation/>
            <Message/>
        </v-col>
    </v-row>
    <div class="fixed bottom-0 w-full">
        <v-text-field
                density="compact"
                label="Envoyer un message"
                variant="solo"
                hide-details
                single-line
        ></v-text-field>
    </div>
</template>
