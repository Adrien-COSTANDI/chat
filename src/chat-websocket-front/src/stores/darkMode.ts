import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
  const darkMode = ref(localStorage.getItem('darkMode') === 'true')

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
    localStorage.setItem('darkMode', darkMode.value + '')
  }

  return { darkMode, toggleDarkMode }
})
