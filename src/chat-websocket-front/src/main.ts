import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'
import { definePreset } from '@primevue/themes'


const app = createApp(App)
const pinia = createPinia();
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}'
    },
    secondary: {
      50: '{stone.50}',
      100: '{stone.100}',
      200: '{stone.200}',
      300: '{stone.300}',
      400: '{stone.400}',
      500: '{stone.500}',
      600: '{stone.600}',
      700: '{stone.700}',
      800: '{stone.800}',
      900: '{stone.900}',
      950: '{stone.950}'
    },
    colorScheme: {
      light: {
        active: {
          backgroundColor: '{surface.200}',
          borderColor: '{surface.100}',
        },
        hover: {
          backgroundColor: '{secondary.100}',
          borderColor: '{secondary.200}',
        },
        selected: {
          backgroundColor: '{surface.200}',
          borderColor: '{surface.100}',
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
      },
      dark: {
        selected: {
          backgroundColor: '{surface.700}',
          borderColor: '{surface.900}',
        },
        active: {
          backgroundColor: '{surface.700}',
          borderColor: '{surface.900}',
        },
        hover: {
          backgroundColor: '{primary.800}',
          borderColor: '{primary.600}',
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
      }
    }
  },
});



app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.my-app-dark',
    },
  },
})

app.use(pinia)
app.use(router)

app.mount('#app')
