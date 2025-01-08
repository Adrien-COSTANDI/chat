import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/authentified/ChatView.vue'
import DefaultView from '@/views/authentified/DefaultView.vue'
import LoginView from "@/views/LoginView.vue";
import { userAuthStore } from '@/stores/userAuth.ts'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultView,
      name: 'Root'
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
    {
      path: '/register',
      component: RegisterView,
      name: 'Register',
    },
  ]
})

router.beforeEach(async (to, from) => {
  const userStore = userAuthStore();
  if (!userStore.isAuthenticated() && to.name !== 'Login' && to.name !== 'Register') {
    // redirect the user to the login page
    return {name: 'Login'}
  }

  if (userStore.isAuthenticated() && (to.name === 'Login' || to.name === 'Register')) {
    return {name: 'Root'}
  }
})

export default router
