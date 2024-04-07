<script lang="ts">
    import Grid from "./Grid.svelte";
    import { Avatar } from "flowbite-svelte";
    import type { Message } from "$lib/messageService";

    export let message: Message | undefined = undefined;
    export let continuation: boolean = false;
    export let mb: number = 3;

    const padding = continuation ? 0.25 : mb
</script>

<div class=" {$$props.class} hover:bg-gray-200" style="padding-top: {padding*4}px; padding-bottom: {padding*2}px; padding-left: {mb*4}px">
    <Grid container alignItems="start">
        <Grid xs={0.5}>
            {#if !continuation}
                <Avatar class="h-10 w-10" src={message?.sender.avatar}/>
            {/if}
        </Grid>
        <Grid container xs={11.5} direction="col" alignItems="start">
            <Grid container>
                {#if !continuation}
                    <p><span class="font-semibold">{message?.sender.username}</span> <span
                            class="text-xs">{message?.date.toLocaleString().slice(0, -3)}</span></p>
                {/if}
            </Grid>
            <Grid>
                <p>{message?.content}</p>
            </Grid>
        </Grid>
    </Grid>
</div>
