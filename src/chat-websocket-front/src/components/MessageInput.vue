<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const props = defineProps({
  defaultMessage: { type: String, default: "" }
})

const newMessage = ref(props.defaultMessage);
const emit = defineEmits(['sendMessage']);

watch(props.defaultMessage, (newDefaultMessage: string) => {
  newMessage.value = newDefaultMessage;
})

function submit(): void {
  emit("sendMessage", newMessage.value);
  newMessage.value = "";
}

</script>

<template>
  <form  @submit.prevent="submit" class="message-prompt">
    <InputText autofocus v-model="newMessage" placeholder="Type a message..." class="message-input"/>
    <Button @click="submit" label="Send" class="send-button"/>
  </form>
</template>

<style scoped>

.message-prompt {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: var(--p-surface);
}

.message-input {
  flex-grow: 1;
}

.send-button {
  flex-shrink: 0;
}
</style>
