import { messages } from "$lib/messageStore";

export class User {
    private readonly _username: string;
    private readonly _avatar: string

    constructor(username: string, avatar: string) {
        this._username = username;
        this._avatar = avatar;
    }

    get username(): string {
        return this._username;
    }

    get avatar(): string {
        return this._avatar;
    }
}

export class Message {
    private readonly _sender: User;
    private readonly _date: Date;
    private readonly _content: string;

    public constructor(sender: User, date: Date, content: string) {
        this._sender = sender;
        this._date = date;
        this._content = content;
    }

    get sender(): User {
        return this._sender;
    }

    get date(): Date {
        return this._date;
    }

    get content(): string {
        return this._content;
    }
}

export const user1 = new User("CelestBoy", "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp")
export const user2 = new User("Toto", "https://cdn.iconscout.com/icon/free/png-256/free-avatar-380-456332.png")
export const user3 = new User("Micheline", "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png")

export const messagesInit = [
    new Message(user1, new Date(2024, 3, 23, 14, 35, 54), "Coucou !"),
    new Message(user2, new Date(2024, 3, 23, 14, 47, 32), "yo !"),
    new Message(user2, new Date(2024, 3, 23, 14, 47, 39), "ça va ?"),
    new Message(user1, new Date(2024, 3, 23, 14, 49, 50), "Oui et toi ?"),
    new Message(user3, new Date(2024, 3, 23, 14, 58, 12), "Salut ! vous êtes dispos ce soir ?"),
    new Message(user3, new Date(2024, 3, 23, 14, 59, 5), "For the king ?"),
]

export class MessageService {

    private readonly currentUser: User;

    constructor(currentUser: User) {
        this.currentUser = currentUser;
    }

    private readonly messages = messages

    public addMessage(content: string): void {
        this.messages.update(a => [...a, new Message(this.currentUser, new Date(), content)]);
    }

    public isSameUser(user: User, message: Message): boolean {
        return message.sender.username === user.username;
    }
}
