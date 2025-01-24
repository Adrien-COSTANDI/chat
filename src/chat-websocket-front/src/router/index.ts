import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '@/views/authentified/ChatView.vue'
import DefaultView from '@/views/authentified/DefaultView.vue'
import LoginView from '@/views/LoginView.vue'
import { userAuthStore } from '@/stores/userAuth.ts'
import RegisterView from '@/views/RegisterView.vue'
import { getUserByName, usernameExists } from '@/services/ChatService.ts'
import { useAppStateStore } from '@/stores/useAppStateStore.ts'

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

router.beforeEach((to, from) => {
  const userStore = userAuthStore();
  const appState = useAppStateStore();
  if (!userStore.isAuthenticated() && to.name !== 'Login' && to.name !== 'Register') {
    // redirect the user to the login page
    return {name: 'Login'}
  }

  if (userStore.isAuthenticated() && (to.name === 'Login' || to.name === 'Register')) {
    return {name: 'Root'}
  }

  if (usernameExists(to.params.userName as string)) {
    console.warn("new user selected")
    appState.setSelectedUser(getUserByName(to.params.userName as string));
  } else {
    console.error("bad user selected")

    if (to.name !== 'Root') {
      console.error("TODO REDIRECT ERROR PAGE"); // TODO
    }
  }
})

export default router
