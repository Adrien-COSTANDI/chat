<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import Divider from 'primevue/divider'
import Message from 'primevue/message'

// Define reactive variables
const username = ref('')
const password = ref('')
const repeatPassword = ref('')

// Handle form submission
const handleRegister = () => {
  console.log({
    username: username.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
  })
  alert(JSON.stringify({
    username: username.value,
    password: password.value,
    repeatPassword: repeatPassword.value,
  }))
}
</script>

<template>
  <main>
    <form @submit.prevent="handleRegister">
      <h1>Register</h1>

      <FloatLabel class="form-group" variant="on">
        <InputText
          v-model="username"
          inputId="username"
          class="credential"
          required
        />
        <label for="username">Username</label>
      </FloatLabel>

      <FloatLabel class="form-group" variant="on">
        <Password
          v-model="password"
          inputId="password"
          :feedback="true"
          required
          toggle-mask
          class="credential"
        >
          <template #footer>
            <Divider />
            <ul class="password-requirements">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
            </ul>
          </template>
        </Password>

        <label for="password">Password</label>
      </FloatLabel>

      <div>
        <FloatLabel class="form-group" variant="on">
          <Password
            v-model="repeatPassword"
            inputId="repeat-password"
            :feedback="false"
            required
            class="credential"
            toggle-mask
          />
          <label for="repeat-password">Repeat password</label>
        </FloatLabel>
        <Message class="bottom-text" severity="error" size="small" variant="simple" v-if="repeatPassword !== password">Password must match.</Message>
      </div>

      <Button label="Create account" type="submit" />
      <p class="bottom-text">Already have an account? <RouterLink to="/login">Login</RouterLink>!</p>
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

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
}

.password-requirements {
  font-size: 0.9rem;
}
</style>
