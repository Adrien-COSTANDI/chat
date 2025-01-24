<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import { userAuthStore } from '@/stores/userAuth.ts'
import Message from 'primevue/message'
import { useRouter } from 'vue-router'

// Define reactive variables
const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const badLogin = ref(false)
const router = useRouter()

// Handle form submission
const handleLogin = () => {
  if (username.value === 'a' && password.value === 'a') {
    userAuthStore().login({
      id: 0,
      name: 'Adrien',
      avatar: 'AvatarAdrien',
    })
    router.push({ name: 'Root' })
  } else {
    badLogin.value = true
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="handleLogin">
      <h1>Login</h1>
      <!-- Username Field -->
      <FloatLabel class="form-group" variant="on">
        <InputText
          v-model="username"
          inputId="username"
          required
          :invalid="badLogin"
          class="credential"
        />
        <label for="username">Username</label>
      </FloatLabel>

      <!-- Password Field -->
      <FloatLabel class="form-group" variant="on">
        <Password
          v-model="password"
          inputId="password"
          :feedback="false"
          required
          :invalid="badLogin"
          toggleMask
          class="credential"
        />
        <label for="password">Password</label>
      </FloatLabel>

      <!-- Remember Me Checkbox -->
      <div class="form-group remember-me">
        <Checkbox v-model="rememberMe" inputId="rememberMe" :binary="true" label="Remember me" />
        <label for="rememberMe" class="ml-2">Remember me</label>
      </div>

      <!-- Submit Button -->
      <Button label="Login" type="submit" />
      <Message class="bottom-text" severity="error" size="small" variant="simple" v-if="badLogin"
        >Login or password incorrect.</Message
      >
      <p class="bottom-text">
        Don't have an account? <RouterLink :to="{ name: 'Register' }">Create one</RouterLink>!
      </p>
    </form>
  </main>
</template>

<style scoped>
form {
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

/* Form Group Styling */
.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
}

/* Checkbox Styling */
.remember-me {
  display: flex;
  align-items: center;
}

.remember-me label {
  padding-left: 8px;
}
</style>
