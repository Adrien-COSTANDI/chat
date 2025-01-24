import { defineStore } from 'pinia'
import type { User } from '@/services/ChatService.ts'
import { ref } from 'vue'

export const useAppStateStore = defineStore('appStateStore', () => {
        const selectedUser = ref<User | null>(null);

        function setSelectedUser(user: User): void {
          selectedUser.value = user;
        }

        function getSelectedUser(): User {
          if (selectedUser.value === null) {
            throw new Error('No user selected');
          }
          return selectedUser.value;
        }

        return {setSelectedUser, getSelectedUser}
    }
)
