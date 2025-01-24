export type Id = string

export type User = {
  id: Id
  name: string
  avatar: string
}

export type ChatPreview = {
  lastMessage: string
  timestamp: Date
  user: User
}

export type Message = {
  id: number
  user: User
  content: string
  timestamp: Date
}

export type Chat = {
  messages: Message[]
}

export const myself: User = {
  name: 'myself',
  avatar: 'avatar',
  id: '1',
}
const bibi: User = {
  name: 'bibi',
  avatar: 'avatar',
  id: '2',
}
const azerty: User = {
  name: 'azerty',
  avatar: 'avatar',
  id: '3',
}

const users = new Map<Id, User>([
  [myself.id, myself],
  [bibi.id, bibi],
  [azerty.id, azerty],
])
export function getUsers(): User[] {
  return Array.from(users.values())
}
export function getUserById(userId: Id): User {
  return users.get(userId)!
}

export function userExists(userId: Id): boolean {
  return users.has(userId)
}

export function getChatPreviews(): Map<Id, ChatPreview> {
  return new Map(
    Array.from(chats.entries()).map<[Id, ChatPreview]>((entry) => [
      entry[0],
      {
        lastMessage: entry[1].messages[entry[1].messages.length - 1]?.content,
        timestamp: entry[1].messages[entry[1].messages.length - 1]?.timestamp || new Date(),
        user: getUserById(entry[0]),
      },
    ]),
  )
}

const chats = new Map<Id, Chat>()
chats.set(myself.id, { messages: [] })
chats.set(bibi.id, {
  messages: [
    {
      id: 1,
      user: myself,
      content: 'Salut !',
      timestamp: new Date(2025, 0, 12, 17, 24, 11, 31),
    },
  ],
})
chats.set(azerty.id, {
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

export function getChat(userId: Id): Chat {
  return chats.get(userId) || { messages: [] }
}

const drafts = new Map<Id, string>()
drafts.set(myself.id, '')
drafts.set(bibi.id, '')
drafts.set(azerty.id, '')

export function getDraftMessageForUser(userId: Id): string {
  return drafts.get(userId) || ''
}

export function setDraftMessageForUser(userId: Id, newDraft: string): void {
  if (drafts.has(userId)) {
    drafts.set(userId, newDraft || '')
  }
}
