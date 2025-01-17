export type User = {
    id: number;
    name: string;
    avatar: string;
}

export type ChatPreview = {
    lastMessage: string,
    user: User,
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
    },
    {
        user: bibi,
        lastMessage: 'blablou',
    },
    {
        user: azerty,
        lastMessage: "bla bla bla",
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
            timestamp: new Date(Date.now()),
        },
        {
            id: 2,
            user: azerty,
            content: "Salut !",
            timestamp: new Date(Date.now()),
        },
        {
            id: 3,
            user: myself,
            content: "Test bla bla bla",
            timestamp: new Date(Date.now()),
        },
        {
            id: 4,
            user: myself,
            content: "Et encore un test",
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
