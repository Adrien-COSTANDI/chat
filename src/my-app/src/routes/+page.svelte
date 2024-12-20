<script>
import Minesweeper from "$lib/components/Minesweeper.svelte";
</script>

<main>
    <h1>Minesweeper</h1>
    <Minesweeper />
</main>

<style>
    main {
        text-align: center;
    }
</style>
<!--<script lang="ts">-->
<!--    import Grid from "$lib/components/Grid.svelte";-->
<!--    import NewMessage from "$lib/components/NewMessage.svelte";-->
<!--    import { getContext, onMount, setContext } from "svelte";-->
<!--    import { MessageService, User, user1 } from "$lib/messageService";-->
<!--    import Message from "$lib/components/Message.svelte";-->
<!--    import { messages } from "$lib/messageStore";-->

<!--    let messageService = getContext<MessageService | undefined>("messageService");-->
<!--    if (!messageService) {-->
<!--        messageService = new MessageService(user1);-->
<!--        setContext("messageService", messageService)-->
<!--    }-->

<!--    onMount(() => {-->
<!--        window.scrollTo({-->
<!--            top: document.body.scrollHeight,-->
<!--            behavior: 'smooth' // Smooth scroll behavior-->
<!--        });-->
<!--    });-->
<!--</script>-->

<!--<div class="flex flex-col justify-between">-->
<!--    <div class="content flex-grow flex items-center justify-center bg-gray-50">-->
<!--        <Grid container direction="col" spacing={3} class="w-full p-8 shadow-md overflow-y-auto">-->
<!--            {#each $messages as message}-->
<!--                &lt;!&ndash;{@const lastUser = message.sender}&ndash;&gt;-->
<!--                <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>-->

<!--                &lt;!&ndash;{#if message.sender.username === lastUser.username}&ndash;&gt;-->
<!--                &lt;!&ndash;    <Message continuation class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>&ndash;&gt;-->
<!--                &lt;!&ndash;{:else}&ndash;&gt;-->
<!--                &lt;!&ndash;    <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>&ndash;&gt;-->
<!--                &lt;!&ndash;{/if}&ndash;&gt;-->
<!--            {/each}-->
<!--        </Grid>-->
<!--    </div>-->
<!--    <div class="flex justify-center w-full gap-10 sticky bottom-0">-->
<!--        <NewMessage onMessage={onMount} class="bg-gray-200  w-full py-4 "/>-->
<!--    </div>-->
<!--</div>-->

<!--&lt;!&ndash;<Grid container direction="col" justifyContent="between">&ndash;&gt;-->
<!--&lt;!&ndash;    <Grid container direction="col" spacing={3} class="w-full p-8 shadow-md overflow-y-auto">&ndash;&gt;-->
<!--&lt;!&ndash;        {#each $messages as message}&ndash;&gt;-->
<!--&lt;!&ndash;            <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>&ndash;&gt;-->
<!--&lt;!&ndash;        {/each}&ndash;&gt;-->
<!--&lt;!&ndash;    </Grid>&ndash;&gt;-->
<!--&lt;!&ndash;    <Grid>&ndash;&gt;-->
<!--&lt;!&ndash;        <NewMessage class="bg-gray-200  w-full py-4 "/>&ndash;&gt;-->
<!--&lt;!&ndash;    </Grid>&ndash;&gt;-->
<!--&lt;!&ndash;</Grid>&ndash;&gt;-->

<!--&lt;!&ndash;<div class="flex flex-col h-full">&ndash;&gt;-->
<!--&lt;!&ndash;    &lt;!&ndash; Content Area (scrollable) &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="flex-1 flex justify-center items-center overflow-y-auto bg-gray-100">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="container mx-auto py-8">&ndash;&gt;-->
<!--&lt;!&ndash;            <Grid container direction="col" spacing={3} class="w-full p-8 shadow-md overflow-y-auto">&ndash;&gt;-->
<!--&lt;!&ndash;                {#each $messages as message}&ndash;&gt;-->
<!--&lt;!&ndash;                    <Message class={messageService.isSameUser(user1, message) ? 'bg-gray-100' : ''} message={message}/>&ndash;&gt;-->
<!--&lt;!&ndash;                {/each}&ndash;&gt;-->
<!--&lt;!&ndash;            </Grid>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--&lt;!&ndash;    &lt;!&ndash; Footer &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;    <footer class="bg-gray-800 text-white p-4">&ndash;&gt;-->
<!--&lt;!&ndash;        Footer&ndash;&gt;-->
<!--&lt;!&ndash;    </footer>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->