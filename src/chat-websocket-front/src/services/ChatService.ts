export type User = {
    id: number;
    name: string;
    avatar: string;
}

export type ChatPreview = {
    lastMessage: string,
    user: User,
    timestamp: Date,
}

export type Message = {
    id: number,
    user: User,
    content: string,
    timestamp: Date,
}

export type Chat = {
    messages: Message[],
}

export const myself: User = {
    name: "myself",
    avatar: "avatar",
    id: 1
}

const bibi: User = {
    name: "bibi",
    avatar: "avatar",
    id: 2
}

const azerty: User = {
    name: "azerty",
    avatar: "avatar",
    id: 3
}

export const chatPreviews: ChatPreview[] = [
    {
        user: myself,
        lastMessage: 'Preview of the last message',
        timestamp: new Date(Date.now()),
    },
    {
        user: bibi,
        lastMessage: 'blablou',
        timestamp: new Date(Date.now()),
    },
    {
        user: azerty,
        lastMessage: "bla bla bla",
        timestamp: new Date(Date.now()),
    }
]

const chats = new Map<string, Chat>();
chats.set(bibi.name, {
    messages: [
        {
            id: 1,
            user: myself,
            content: "Salut !",
            timestamp: new Date(Date.now()),
        },
    ]
});
chats.set(azerty.name, {
    messages: [
        {
            id: 1,
            user: myself,
            content: "Salut !",
            timestamp: new Date(2024, 11, 24, 17, 24, 11, 31),
        },
        {
            id: 2,
            user: azerty,
            content: "Salut !",
            timestamp: new Date(2024, 11, 24, 17, 26, 18, 6),
        },
        {
            id: 3,
            user: myself,
            content: "Test bla bla bla",
            timestamp: new Date(new Date(2024, 11, 24, 18, 3, 48, 65)),
        },
        {
            id: 4,
            user: myself,
            content: "Et bonne année !",
            timestamp: new Date(2025, 0, 1, 0, 1, 12, 48),
        },
        {
          id: 5,
          user: azerty,
          content: "Bonne année !",
          timestamp: new Date(Date.now()),
        },
    ]
});

export function getChat(user: string): Chat {
    return chats.get(user) || {messages: []};
}

export function getDefaultMessage(user: string): string {
  return "";
}
