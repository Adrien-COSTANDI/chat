import { writable } from "svelte/store";
import { Message } from "$lib/messageService";

export const messages = writable<Message[]>([])