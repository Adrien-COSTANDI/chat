<script lang="ts">
    import Grid from "$lib/components/Grid.svelte";
    import NewMessage from "$lib/components/NewMessage.svelte";
    import { getContext, onMount, setContext } from "svelte";
    import { MessageService, User, user1 } from "$lib/messageService";
    import Message from "$lib/components/Message.svelte";
    import { messages } from "$lib/messageStore";

    let messageService = getContext<MessageService | undefined>("messageService");
    if (!messageService) {
        messageService = new MessageService(user1);
        setContext("messageService", messageService)
    }

    onMount(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scroll behavior
        });
    });
</script>

<div class="flex flex-col justify-between">
    <div class="content flex-grow flex items-center justify-center bg-gray-50">
        <Grid container direction="col" spacing={3} class="w-full p-8 shadow-md overflow-y-auto">
            {#each $messages as message}
                <!--{@const lastUser = message.sender}-->
                <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>

                <!--{#if message.sender.username === lastUser.username}-->
                <!--    <Message continuation class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>-->
                <!--{:else}-->
                <!--    <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>-->
                <!--{/if}-->
            {/each}
        </Grid>
    </div>
    <div class="flex justify-center w-full gap-10 sticky bottom-0">
        <NewMessage onMessage={onMount} class="bg-gray-200  w-full py-4 "/>
    </div>
</div>

<!--<Grid container direction="col" justifyContent="between">-->
<!--    <Grid container direction="col" spacing={3} class="w-full p-8 shadow-md overflow-y-auto">-->
<!--        {#each $messages as message}-->
<!--            <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>-->
<!--        {/each}-->
<!--    </Grid>-->
<!--    <Grid>-->
<!--        <NewMessage class="bg-gray-200  w-full py-4 "/>-->
<!--    </Grid>-->
<!--</Grid>-->

<!--<div class="flex flex-col h-full">-->
<!--    &lt;!&ndash; Content Area (scrollable) &ndash;&gt;-->
<!--    <div class="flex-1 flex justify-center items-center overflow-y-auto bg-gray-100">-->
<!--        <div class="container mx-auto py-8">-->
<!--            <Grid container direction="col" spacing={3} class="w-full p-8 shadow-md overflow-y-auto">-->
<!--                {#each $messages as message}-->
<!--                    <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>-->
<!--                {/each}-->
<!--            </Grid>-->
<!--        </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Footer &ndash;&gt;-->
<!--    <footer class="bg-gray-800 text-white p-4">-->
<!--        Footer-->
<!--    </footer>-->
<!--</div>-->