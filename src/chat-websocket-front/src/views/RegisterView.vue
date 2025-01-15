<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import Divider from 'primevue/divider'
import Message from 'primevue/message'

// Define reactive variables
const username = ref('');
const password = ref('');
const repeatPassword = ref('');

const oneLowercase = ref(false);
const oneUppercase = ref(false);
const oneNumber = ref(false);
const minLen = ref(false);

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

function updatePasswordRequirements() {
  if (password.value.match(/[a-z]+/)) {
    oneLowercase.value = true;
  } else {
    oneLowercase.value = false;
  }
  if (password.value.match(/[A-Z]+/)) {
    oneUppercase.value = true;
  } else {
    oneUppercase.value = false;
  }
  if (password.value.match(/[0-9]+/)) {
    oneNumber.value = true;
  } else {
    oneNumber.value = false;
  }
  if (password.value.match(/.{8,}/)) {
    minLen.value = true;
  } else {
    minLen.value = false;
  }
}

function createDisabled() {
  return !username.value || repeatPassword.value !== password.value || !oneNumber.value || !oneUppercase.value || !oneLowercase.value || !minLen.value
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
          @change="updatePasswordRequirements"
        >
          <template #footer>
            <Divider />
            <ul class="password-requirements">
              <li><i :class="{ 'valid': oneLowercase, 'invalid': !oneLowercase }" /><span>At least one lowercase</span></li>
              <li><i :class="{ 'valid': oneUppercase, 'invalid': !oneUppercase }" /><span>At least one uppercase</span></li>
              <li><i :class="{ 'valid': oneNumber, 'invalid': !oneNumber }" /><span>At least one numeric</span></li>
              <li><i :class="{ 'valid': minLen, 'invalid': !minLen }" /><span>Minimum 8 characters</span></li>
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

      <Button :disabled="createDisabled()" label="Create account" type="submit" />
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
  padding-left: 0.5rem;
  font-size: 0.9rem;
  align-items: center;
}

.password-requirements li {
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin-left: 0;
}

.valid::after {
  content: url('@/assets/valid.svg');
}

.invalid::after {
  content: url('@/assets/invalid.svg');
}

.valid, .invalid {
  margin-right: 0.5rem;
  height: 0.9rem;
}
</style>
