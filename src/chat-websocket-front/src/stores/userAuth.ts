import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/services/ChatService.ts'

const noUser: User = {
  id: -1,
  name: 'noUser',
  avatar: 'noUserAvatar',
}

export const userAuthStore = defineStore('userAuth', () => {
  const userAuth = ref(
    JSON.parse(localStorage.getItem('userAuth') || JSON.stringify(noUser)) as User,
  )

  function isAuthenticated(): boolean {
    return userAuth.value.id !== -1
  }

  function getUser(): User | null {
    if (userAuth.value.id === -1) {
      return null
    }
    return userAuth.value
  }

  function login(user: User) {
    localStorage.setItem('userAuth', JSON.stringify(user))
    return (userAuth.value = user)
  }

  function logout() {
    localStorage.removeItem('userAuth')
    userAuth.value = noUser
  }

  return { login, getUser, isAuthenticated, logout }
})
