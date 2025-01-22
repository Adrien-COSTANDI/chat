<script setup lang="ts">
import { type ComponentPublicInstance, onMounted, onUpdated, ref, toRef, useTemplateRef, watch } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const props = defineProps({
  draft: { type: String, default: "" }
})
const myPropRef = toRef(props, "draft");

const newMessage = ref(props.draft);
const emit = defineEmits(['sendMessage', 'onValueChange']);

const inputRef = useTemplateRef<ComponentPublicInstance>("input");
inputRef.value?.$el?.focus()

watch(myPropRef, (newDefaultMessage: string) => {
  newMessage.value = newDefaultMessage;
})

function submit(): void {
  emit("sendMessage", newMessage.value);
  newMessage.value = "";
}

function test(): void {
  inputRef.value?.$el?.focus()
  console.log(inputRef.value)
}

function onValueChange(): void {
  emit("onValueChange", newMessage.value);
}

</script>

<template>
  <form  @submit.prevent="submit" class="message-prompt">
    <InputText ref="input" autofocus @valueChange="onValueChange()" v-model="newMessage" placeholder="Type a message..." class="message-input"/>
    <Button @click="submit" label="Send" class="send-button"/>
    <Button @click="test" label="test" class="send-button"/>
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
