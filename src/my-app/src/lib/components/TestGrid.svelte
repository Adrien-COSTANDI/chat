<script>
    import Grid from "./Grid.svelte";
</script>

<Grid container spacing={2} direction="col" justifyContent="between">
    <Grid container direction="row" justifyContent="between">
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
        <Grid xs={8}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=8</div>
        </Grid>
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
    </Grid>

    <Grid container direction="row" justifyContent="start">
        <Grid xs={3}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=3</div>
        </Grid>
        <Grid xs={3}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=3</div>
        </Grid>
        <Grid xs={6}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=6</div>
        </Grid>
    </Grid>

    <Grid container direction="row" justifyContent="start">
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
        <Grid xs={2}>
            <div class="p-4 drop-shadow-lg rounded-lg bg-white">xs=2</div>
        </Grid>
    </Grid>
</Grid>
