import { defineStore } from 'pinia'
import { azerty, bibi, type Chat, type ChatPreview, getUserById, type Id, myself } from '@/services/ChatService.ts'
import { ref } from 'vue'
import { userAuthStore } from '@/stores/userAuth.ts'

export const useChatStore = defineStore('chatStore', () => {
  const chats = ref(new Map<Id, Chat>())
  const pageSize = 30

  chats.value.set(myself.id, Array.from({ length: 400 }).map((_, i) => ({
        id: i,
        user: Math.random() < .5 ? myself : azerty,
        content: 'Message ' + i,
        timestamp: new Date(2024, 8, 12, i, 14, 11, 31)
      })))
  chats.value.set(bibi.id, [
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
    ])
  chats.value.set(azerty.id, [
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
    ])

  function getChatByUserId(userId: Id, page: number = 0): Chat {
    if (!chats.value.has(userId)) {
      throw new Error('Invalid user Id')
    }
    const messages = chats.value.get(userId)!
    const maxPage = _getMaxPage(userId)

    if (page === Math.ceil(maxPage)) page = maxPage
    if (page > Math.ceil(maxPage)) {
      throw new Error('Invalid page : ' + page + ". Max page is : " + maxPage) // TODO
    }
    if (page < 0) page = 0

    if (page === maxPage) { // take only the rest, do not duplicate
      const leftOver = messages.length % pageSize
      return messages.slice((maxPage - page) * pageSize, leftOver)!
    } else {
      return messages.slice((maxPage - page) * pageSize, (maxPage - page + 1) * pageSize)!
    }
  }

  function _getMaxPage(userId: Id) {
    if (!chats.value.has(userId)) {
      throw new Error('Invalid user Id')
    }
    const messages = chats.value.get(userId)!
    return messages.length / pageSize - 1
  }

  function getMaxPage(userId: Id) {
    return Math.ceil(_getMaxPage(userId))
  }

  function addNewMessageInChatByUserId(userId: Id, message: string) {
    if (!chats.value.has(userId)) {
      throw new Error('Invalid user Id')
    }
    chats.value.get(userId)!.push({
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
          lastMessage: entry[1][entry[1].length - 1]?.content,
          timestamp: entry[1][entry[1].length - 1]?.timestamp || new Date(),
          user: getUserById(entry[0]),
        },
      ]),
    )
  }

  return { getChatByUserId, addNewMessageInChatByUserId, getChatPreviews, pageSize, getMaxPage }
})
