import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/ChatView.vue'
import DefaultView from '@/views/DefaultView.vue'
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultView
    },
    {
      path: '/:userName',
      component: ChatView
    },
    {
      path: '/login',
      component: LoginView,
      name: 'Login',
    },
  ]
})

export default router
