<script setup lang="ts">
import { type ComponentPublicInstance, onMounted, ref, toRef, useTemplateRef, watch } from 'vue'
import Button from 'primevue/button'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'
import Textarea from 'primevue/textarea'

const appState = useAppStateStore()

const props = defineProps({
  draft: { type: String, default: '' },
})
const myPropRef = toRef(props, 'draft')

const newMessage = ref(props.draft)
const emit = defineEmits(['onSendMessage', 'onValueChange'])

const inputRef = useTemplateRef<ComponentPublicInstance>('input')

watch(myPropRef, (newDefaultMessage: string) => {
  newMessage.value = newDefaultMessage
})

watch(appState.getSelectedUser, () => {
  inputRef.value?.$el?.focus()
})

onMounted(() => {
  inputRef.value?.$el?.focus()
})

function submit(): void {
  emit('onSendMessage', newMessage.value)
  newMessage.value = ''
}

function onValueChange(): void {
  emit('onValueChange', newMessage.value)
}
</script>

<template>
  <div class="message-prompt">
    <Textarea
      ref="input"
      rows="1"
      @keydown.enter.exact.prevent="submit"
      @valueChange="onValueChange()"
      v-model="newMessage"
      placeholder="Type a message..."
      class="textArea"
    />
    <Button @click="submit" label="Send" class="send-button" />
  </div>
</template>

<style scoped>
.message-prompt {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: var(--p-surface);
  border-radius: 7px 7px 0 0;
  max-height: 40%; /* Limit textarea growth */
}

.textArea {
  flex-grow: 1;
  resize: none;
  field-sizing: content;
}

.send-button {
  flex-shrink: 0;
}
</style>
