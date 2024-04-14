import type { MessageData } from "@/components/Message.vue";
import { type Ref, ref } from "vue";

class MessageService {

    private constructor() {
    }

    private static INSTANCE : MessageService;

    public static get instance(): MessageService {
        if (!MessageService.INSTANCE) {
            MessageService.INSTANCE = new MessageService();
        }
        return MessageService.INSTANCE;
    }

    private messages: Ref<MessageData[]>= ref([
        {
            date: new Date(2024, 4, 14, 11, 32, 12),
            sender: {
                username: "CelestBoy",
                avatar: "https://cdn.discordapp.com/avatars/395566448761896972/5583b37e012cfb70ba82720dfa108197.webp?size=512"
            },
            content: "Yo tout le monde"
        },
        {
            date: new Date(2024, 4, 14, 11, 32, 17),
            sender: {
                username: "CelestBoy",
                avatar: "https://cdn.discordapp.com/avatars/395566448761896972/5583b37e012cfb70ba82720dfa108197.webp?size=512"
            },
            content: "Comment ça va ?"
        },
        {
            date: new Date(2024, 4, 14, 11, 33, 17),
            sender: {
                username: "Cornichon",
            },
            content: "Nickel."
        },
        {
            date: new Date(2024, 4, 14, 11, 33, 48),
            sender: {
                username: "CelestBoy",
                avatar: "https://cdn.discordapp.com/avatars/395566448761896972/5583b37e012cfb70ba82720dfa108197.webp?size=512"
            },
            content: "tg"
        },
    ])

    public addMessage(message: MessageData): void {
        this.messages.value = [...this.messages.value, message]
    }

    public getMessages(): MessageData[] {
        return this.messages.value;
    }
}

export default MessageService;