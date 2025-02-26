<script setup lang="ts">

import ScrollPanel from 'primevue/scrollpanel'
import { ref } from 'vue'

const emit = defineEmits(['onLoadUp', 'onLoadDown'])

const lastScrollTop = ref(0);
const isScrollingUp = ref(false);

function onScroll(event: Event) {
  const scrollContent = event.target as HTMLElement
  const ratio = scrollContent.scrollTop / (scrollContent.scrollHeight - scrollContent.clientHeight)

  const currentScroll = scrollContent.scrollTop
  isScrollingUp.value = currentScroll < lastScrollTop.value;
  lastScrollTop.value = currentScroll <= 0 ? 0 : currentScroll

  if (isScrollingUp.value) {
    emit('onLoadUp', ratio)
  }
  if (!isScrollingUp.value) {
    emit('onLoadDown', ratio)
  }
}
</script>

<template>
  <ScrollPanel
    class="scrollPanel"
    pt:content:style="height: 100%; padding-bottom: 0"
    :pt:content:onscroll="onScroll"
  >
    <slot></slot>
  </ScrollPanel>
</template>

<style scoped>
.scrollPanel {
  flex-grow: 1;
  overflow: hidden;
}
</style>
