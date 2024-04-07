<script lang="ts">
    import {Input, ToolbarButton} from "flowbite-svelte";
    import {PaperPlaneOutline} from 'flowbite-svelte-icons';
    import { MessageService } from "$lib/messageService";
    import { getContext } from "svelte";


    const messageService = getContext<MessageService | undefined>("messageService");

    let text = "";

    function handleNewMessage() {
        if (messageService === undefined) {
            throw new Error("messageService is undefined")
        }
        console.log("new message : ", text)
        messageService.addMessage(text)
        text = ""
    }

</script>


<div class={$$props.class}>
    <form on:submit|preventDefault={handleNewMessage}>
        <Input autofocus bind:value={text} id="chat" rows="1" placeholder="Your message...">
            <ToolbarButton
                    slot="right"
                    type="submit"
                    color="primary"
                    class="rounded-full">
                <PaperPlaneOutline class="w-6 h-6 rotate-90"/>
                <span class="sr-only">Send message</span>
            </ToolbarButton>
        </Input>
    </form>
</div>
