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
export const bibi: User = {
  name: 'bibi',
  avatar: 'avatar',
  id: '2',
}
export const azerty: User = {
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
