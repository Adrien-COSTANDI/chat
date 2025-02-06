import { defineStore } from 'pinia'
import { azerty, bibi, type Chat, type ChatPreview, getUserById, type Id, myself } from '@/services/ChatService.ts'
import { ref } from 'vue'
import { userAuthStore } from '@/stores/userAuth.ts'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref(new Map<Id, Chat>())

  chats.value.set(myself.id, { messages: [] })
  chats.value.set(bibi.id, {
    messages: [
      {
        id: 1,
        user: myself,
        content: 'Salut !',
        timestamp: new Date(2025, 0, 12, 17, 24, 11, 31),
      },
      {
        id: 2,
        user: bibi,
        content: 'yo',
        timestamp: new Date(2025, 0, 12, 17, 29, 11, 31),
      },
      {
        id: 3,
        user: bibi,
        content: 'ça va ?',
        timestamp: new Date(2025, 0, 12, 17, 29, 35, 31),
      },
    ],
  })
  chats.value.set(azerty.id, {
    messages: [
      {
        id: 1,
        user: myself,
        content: 'Salut !',
        timestamp: new Date(2024, 11, 24, 17, 24, 11, 31),
      },
      {
        id: 2,
        user: azerty,
        content: 'Salut !',
        timestamp: new Date(2024, 11, 24, 17, 26, 18, 6),
      },
      {
        id: 3,
        user: myself,
        content: 'Test bla bla bla',
        timestamp: new Date(new Date(2024, 11, 24, 18, 3, 48, 65)),
      },
      {
        id: 4,
        user: myself,
        content: 'Et bonne année !',
        timestamp: new Date(2025, 0, 1, 0, 1, 12, 48),
      },
      {
        id: 5,
        user: azerty,
        content: 'Bonne année !',
        timestamp: new Date(Date.now()),
      },
    ],
  })

  function getChatByUserId(userId: Id): Chat {
    if (!chats.value.has(userId)) {
      throw new Error('Invalid user Id')
    }
    return chats.value.get(userId)!
  }

  function addNewMessageInChatByUserId(userId: Id, message: string) {
    if (!chats.value.has(userId)) {
      throw new Error('Invalid user Id')
    }
    chats.value.get(userId)!.messages.push({
      id: Date.now(),
      timestamp: new Date(Date.now()),
      content: message,
      user: userAuthStore().getUser()!,
    })
  }

  function getChatPreviews(): Map<Id, ChatPreview> {
    return new Map(
      Array.from(chats.value.entries()).map<[Id, ChatPreview]>((entry) => [
        entry[0],
        {
          lastMessage: entry[1].messages[entry[1].messages.length - 1]?.content,
          timestamp: entry[1].messages[entry[1].messages.length - 1]?.timestamp || new Date(),
          user: getUserById(entry[0]),
        },
      ]),
    )
  }

  return { getChatByUserId, addNewMessageInChatByUserId, getChatPreviews }
})
