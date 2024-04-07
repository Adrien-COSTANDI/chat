<Grid container direction="col" justifyContent="between">
    <Grid>
        <Navbar class="z-50">
            <NavBrand href="/">
                <img src="/logo.webp" class="me-3 h-4 sm:h-9" alt="App logo"/>
                <span class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Snoopshit</span>
            </NavBrand>
            <ul class="flex justify-center items-center gap-3">
                <li>
                    <Avatar src=""/>
                </li>
                <li>
                    <P>Username</P>
                </li>
            </ul>
        </Navbar>
    </Grid>
    <Grid>
        <slot/>
    </Grid>
    <Grid>
        <div>footer</div>
    </Grid>
</Grid>


<script lang="ts">
    import "../app.pcss"
    import Grid from "$lib/components/Grid.svelte";
    import { Avatar, Navbar, NavBrand, P } from "flowbite-svelte";
</script>

<!--<header class="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4 z-50">-->
<!--    Header-->
<!--</header>-->
<!--<main class="flex flex-col overflow-auto min-h-screen p-0 m-0">-->
<!--    <p>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum lacus scelerisque ex pulvinar, et mollis-->
<!--        elit laoreet. In purus nisi, interdum id gravida eget, efficitur laoreet arcu. Fusce diam est, feugiat eget-->
<!--        pulvinar eget, imperdiet condimentum arcu. Suspendisse quis mi maximus, volutpat elit in, molestie tortor. Proin-->
<!--        ut ornare velit, id dictum lectus. Morbi nec mattis elit, sit amet convallis dui. Phasellus blandit risus quis-->
<!--        sodales sagittis.Proin ultricies gravida vulputate. Curabitur aliquet feugiat nibh. Pellentesque quam velit,-->
<!--        facilisis ac massa eu, vulputate finibus magna. Aliquam porta vulputate diam ac porta. Sed pulvinar lorem ac est-->
<!--        sodales suscipit. Aliquam vel bibendum tortor. Aliquam quis velit non urna gravida consequat sit amet ac arcu.-->
<!--        Praesent pretium enim eros, a pulvinar tellus semper vel. Interdum et malesuada fames ac ante ipsum primis in-->
<!--        faucibus.Proin rhoncus vel lectus sed facilisis. Mauris et feugiat enim. Donec vitae tellus ut quam lobortis-->
<!--        mattis vel vitae augue. Fusce erat tortor, sodales vitae tortor vel, tincidunt pretium tellus. Maecenas eleifend-->
<!--        tortor ut sodales aliquet. Aliquam efficitur porta massa, quis lobortis lacus vehicula ut. In in lectus ante.Sed-->
<!--        imperdiet ac felis id cursus. Mauris mattis turpis sed leo euismod, eget hendrerit dui varius. Vestibulum-->
<!--        ultrices, dolor ac ultrices mattis, dolor dui finibus purus, nec ultrices odio quam id nisi. Integer rhoncus-->
<!--        nunc nec massa rutrum, eget pharetra tellus hendrerit. Curabitur at enim sed arcu rutrum tempus. Cras in mauris-->
<!--        augue. Nunc eget risus odio.Etiam posuere eget dui quis vestibulum. Donec mollis mattis turpis ac pretium. Nulla-->
<!--        in pretium mi. Aliquam lacinia, est sit amet sollicitudin varius, arcu quam interdum odio, sed pretium metus-->
<!--        tortor a nisl. Aenean consectetur quis felis sit amet varius. Fusce mollis, dui vitae lobortis fringilla, mi-->
<!--        orci eleifend lorem, at tincidunt quam justo rutrum leo. Morbi ac convallis urna. Vestibulum molestie vulputate-->
<!--        arcu in ullamcorper. Cras dictum vel justo nec viverra. Donec a ante tempus, ultrices lorem sed, elementum dui.-->
<!--        Pellentesque volutpat molestie mauris, eget hendrerit velit dictum eu. Sed sit amet magna eget justo sodales-->
<!--        vulputate. Sed dui urna, luctus malesuada feugiat a, luctus at dui. Nam ullamcorper neque sapien. Mauris sit-->
<!--        amet mi at arcu molestie iaculis.Maecenas a eleifend velit. Duis in viverra lorem, non molestie sapien. Praesent-->
<!--        viverra viverra metus at fermentum. Integer molestie dapibus urna, at facilisis lacus condimentum eget. Vivamus-->
<!--        scelerisque neque sed sapien porta vulputate dapibus id massa. Suspendisse gravida suscipit elit, sit amet-->
<!--        iaculis turpis dapibus vel. Ut in luctus urna, et feugiat ante. Sed lobortis massa risus, ac tempus sapien-->
<!--        elementum nec. Curabitur gravida nunc nec mattis congue.Nam lobortis hendrerit libero. Nunc non pharetra tortor.-->
<!--        Nam pulvinar ultrices nunc eu dapibus. Quisque ultrices ipsum in tortor accumsan, sed pulvinar lacus auctor. Ut-->
<!--        ac sodales risus. Duis vehicula sapien interdum ipsum mattis aliquam. Interdum et malesuada fames ac ante ipsum-->
<!--        primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea-->
<!--        dictumst. Maecenas fringilla metus non nunc fermentum, at scelerisque enim pellentesque. Quisque sed maximus-->
<!--        est. Sed blandit malesuada odio ut ultrices. Nunc ultrices et tortor vel porttitor. Cras luctus mi a sapien-->
<!--        fermentum molestie nec ac ipsum. Donec et dui metus.Pellentesque ut facilisis quam, eget efficitur nisi. Vivamus-->
<!--        ut mi mauris. Integer dictum auctor lobortis. Morbi quis tellus vehicula, scelerisque urna eget, elementum-->
<!--        turpis. Proin erat tortor, venenatis id venenatis sit amet, pulvinar in sapien. Nunc sodales sodales nisl eget-->
<!--        mollis. Curabitur in felis ac mauris blandit rutrum. Vestibulum a tristique nisl. Vivamus est risus, lacinia id-->
<!--        dapibus id, ornare id ligula. Donec commodo venenatis libero ac laoreet. Mauris finibus convallis nunc vitae-->
<!--        commodo. Quisque tempus mauris nunc, in lacinia eros aliquet malesuada. Donec ligula turpis, elementum in felis-->
<!--        lacinia, hendrerit ornare dui.Nunc eu velit tincidunt tortor egestas auctor. Nunc eleifend, dui ut mollis-->
<!--        maximus, dui arcu malesuada sem, vel interdum magna nibh eu risus. Duis vitae feugiat massa, quis iaculis ante.-->
<!--        Maecenas iaculis neque id ex eleifend, id semper elit viverra. Cras in tincidunt lacus, dictum faucibus nisi.-->
<!--        Donec a tellus ut ligula commodo ornare. Vivamus pulvinar magna quis ligula consequat, et viverra lectus ornare.-->
<!--        Ut consequat iaculis neque, a convallis leo posuere a. In justo tellus, tristique sed nulla ut, viverra-->
<!--        tristique massa. Cras ullamcorper sed nunc in tempor.Quisque eget aliquet est. Curabitur ut augue posuere,-->
<!--        pulvinar est at, porttitor lorem. Fusce consequat ante non tincidunt malesuada. Maecenas at urna eu sapien-->
<!--        consequat ullamcorper at ac nisi. Quisque et congue mi. Duis vestibulum sed erat at rhoncus. Nulla tincidunt eu-->
<!--        ex non lacinia. In eu porta eros. Pellentesque pulvinar, odio id hendrerit sodales, eros arcu lacinia mi, a-->
<!--        ornare elit massa ac ligula.Donec pharetra id erat in laoreet. Aenean eu purus eu mauris laoreet egestas vitae-->
<!--        in lacus. Proin mollis, diam id aliquam malesuada, felis lorem tempor justo, et eleifend orci augue vitae mi.-->
<!--        Sed pretium ex a arcu vestibulum egestas. Pellentesque varius feugiat odio, eu porttitor augue tempor id.-->
<!--        Phasellus consectetur diam quis mauris condimentum, id pulvinar felis laoreet. Phasellus consequat, felis a-->
<!--        molestie congue, augue est malesuada mauris, ut interdum augue quam semper ligula. Quisque sit amet eleifend-->
<!--        enim, id consectetur elit. Donec bibendum ligula volutpat, tempor felis et, ultrices mauris. Etiam a tincidunt-->
<!--        metus. Cras lacus mauris, porttitor ac velit eget, efficitur viverra nulla. Phasellus nec eros molestie,-->
<!--        consequat ligula id, ultricies tortor.Morbi nunc lacus, viverra nec dui vel, tincidunt sollicitudin felis.-->
<!--        Quisque sagittis tempus dui, quis semper augue elementum in. Nunc maximus mauris eu bibendum laoreet. In sit-->
<!--        amet condimentum sem, aliquam vestibulum lorem. Fusce vitae auctor mauris, et egestas nulla. Duis vel sagittis-->
<!--        urna, ac interdum metus. Praesent condimentum vitae mauris et ornare. Integer nec tortor blandit, aliquet ipsum-->
<!--        in, volutpat nunc. Nam vitae odio at dolor molestie fermentum id in lorem. Phasellus lobortis semper lectus.-->
<!--        Integer dignissim vehicula tincidunt. Vivamus accumsan volutpat dui, id feugiat mi tincidunt eu. Mauris ultrices-->
<!--        mollis justo, et bibendum nibh sagittis non. Integer ac rhoncus justo, eget vehicula odio. Phasellus aliquet-->
<!--        odio non orci malesuada, in faucibus elit interdum.Nulla lacinia efficitur congue. Etiam iaculis, eros non-->
<!--        vehicula ultrices, purus elit molestie urna, vitae hendrerit urna odio nec libero. Vivamus dui nisi, vestibulum-->
<!--        in erat a, sodales hendrerit orci. Aenean tempor erat hendrerit sapien finibus rutrum quis eu massa. Sed semper-->
<!--        rutrum commodo. Etiam volutpat urna vel lorem semper, a pretium magna ultricies. Ut nisi tortor, dapibus et-->
<!--        consequat sit amet, vehicula sit amet lectus. Fusce risus urna, vehicula sit amet dapibus vel, sollicitudin et-->
<!--        leo. Integer vitae libero eget turpis ultricies sagittis ac vitae dui. In porttitor lorem ante, quis pretium-->
<!--        ipsum vulputate non. Praesent pulvinar imperdiet commodo. Vestibulum lectus quam, elementum ac blandit ac,-->
<!--        cursus vel diam. Nunc ut pretium erat, id efficitur nisi. Cras posuere feugiat hendrerit. Maecenas quis erat at-->
<!--        mauris tempus congue sed vitae nisi. Aenean pulvinar euismod leo id auctor.Suspendisse vel odio suscipit, rutrum-->
<!--        elit vel, imperdiet ligula. Sed quis enim mauris. Mauris non aliquam eros. Nulla convallis vulputate massa, vel-->
<!--        blandit purus egestas sit amet. Ut convallis eget elit a viverra. Donec at elit urna. Cras ornare aliquam-->
<!--        ultrices. Cras vitae elit sollicitudin, scelerisque ex ac, pharetra nunc. Nulla finibus nibh ac ipsum semper-->
<!--        volutpat. Vivamus erat justo, vestibulum sit amet mauris ac, vehicula gravida felis. Aliquam sed varius urna.-->
<!--        Etiam ullamcorper lacus vitae tortor facilisis, nec tincidunt felis sollicitudin. Etiam cursus erat ac velit-->
<!--        pulvinar feugiat. Sed tempus ac neque vitae posuere. Donec fringilla pretium nulla quis elementum. Nunc-->
<!--        porttitor accumsan urna vel cursus.Aliquam fermentum, turpis a condimentum vehicula, sapien nibh efficitur mi,-->
<!--        accumsan pretium nisl urna id arcu. Morbi accumsan nisi ac tempor eleifend. Suspendisse potenti. Sed eget sapien-->
<!--        interdum, imperdiet velit non, porta eros. Aliquam consequat varius aliquam. Ut suscipit ante ac tellus posuere-->
<!--        tempus. Mauris eget odio a justo finibus tristique. Etiam et dolor nec nulla dignissim porta. Maecenas a velit-->
<!--        et ex tincidunt maximus nec nec lorem. Nunc sit amet tellus mi. Maecenas aliquam nunc velit.Cras at ultricies-->
<!--        sapien, nec lacinia ligula. Curabitur tortor ligula, convallis at finibus et, tincidunt sit amet odio. Cras-->
<!--        convallis diam ullamcorper neque vestibulum vestibulum. Donec aliquet vehicula congue. Morbi eu ligula eget-->
<!--        felis accumsan facilisis non ac elit. Vivamus varius arcu non nisl tincidunt, vel consequat nisl lacinia.-->
<!--        Phasellus vel sollicitudin nibh. Sed eros quam, semper sit amet hendrerit ac, convallis at justo. Nam eget dui-->
<!--        nec magna consequat cursus. Aenean aliquam malesuada arcu quis commodo. Duis egestas magna vel magna dignissim-->
<!--        facilisis. Etiam efficitur congue dignissim. Donec rutrum mi lorem, nec tristique purus venenatis efficitur.-->
<!--        Etiam eget euismod enim, hendrerit aliquet enim.Phasellus ac sodales elit, id maximus tortor. Nullam ac-->
<!--        tristique sapien, sed pulvinar ligula. Nulla bibendum, nunc sit amet accumsan ullamcorper, dui ipsum condimentum-->
<!--        leo, at porta felis lacus quis urna. Cras dapibus diam et suscipit malesuada. Morbi id finibus magna. Ut nulla-->
<!--        sem, vehicula ut dapibus euismod, efficitur vitae dui. Vivamus mollis facilisis tempor. Ut pretium gravida-->
<!--        tempus. Praesent quis lobortis justo, eget finibus eros. Fusce vitae enim lobortis urna accumsan eleifend. Ut-->
<!--        lorem nibh, cursus nec auctor a, tincidunt sit amet diam. Cras justo mi, condimentum vel ultricies in, lacinia-->
<!--        sed urna. Sed porttitor justo eu sem ultricies porta.In rhoncus, tortor nec imperdiet varius, libero nisi dictum-->
<!--        sapien, vel consectetur quam velit sed elit. Fusce molestie tortor auctor pulvinar egestas. Donec nisi lectus,-->
<!--        vehicula non venenatis et, lacinia non ipsum. Nulla lacinia purus a turpis rutrum, vel ullamcorper nunc cursus.-->
<!--        Sed commodo lectus eu ligula lacinia sollicitudin. Donec eleifend massa magna, et fermentum ex pharetra sed.-->
<!--        Curabitur tristique gravida risus non accumsan.Maecenas auctor neque ut maximus bibendum. Fusce posuere justo-->
<!--        eget libero rutrum, iaculis suscipit ligula consequat. Aenean tempus scelerisque felis. Aenean sed lacus lectus.-->
<!--        Aliquam erat purus, ullamcorper elementum congue sit amet, vehicula non tortor. Sed bibendum erat vitae augue-->
<!--        rhoncus porttitor. Aliquam erat volutpat. Ut id condimentum lorem, vitae varius ligula. In a pellentesque ex.-->
<!--        Donec vel elit vel sapien tempus feugiat. Ut blandit accumsan neque vel gravida. Nam varius at dui vel finibus.-->
<!--        Fusce tempor congue enim nec consequat.Quisque efficitur, quam id hendrerit commodo, nunc metus egestas ipsum,-->
<!--        in luctus dui neque nec ante. Sed egestas ipsum ac ante condimentum, eget maximus augue rhoncus. Etiam vel-->
<!--        congue sapien. Curabitur pellentesque massa lacinia, tristique ligula sit amet, finibus urna. Sed lobortis-->
<!--        egestas aliquet. Curabitur nunc mauris, elementum et efficitur sit amet, pulvinar vel velit. Morbi auctor et-->
<!--        augue eu aliquet. Nam dictum tempus nulla ut porttitor.Integer vel purus accumsan, porttitor tortor ac,-->
<!--        tristique justo. Morbi faucibus magna eu turpis sagittis, id pulvinar leo aliquet. Aliquam lectus quam, lobortis-->
<!--        ac magna quis, euismod porttitor risus. Curabitur et dolor at leo dignissim feugiat. Nam eget sem id velit-->
<!--        laoreet suscipit nec ac diam. Proin elementum ex ac ultricies iaculis. Proin commodo vitae ex in pharetra.-->
<!--        Quisque at venenatis urna. Proin scelerisque tincidunt lectus ac ultricies.Aliquam sapien lorem, porttitor a ex-->
<!--        eu, tincidunt facilisis neque. Maecenas semper risus et mattis tempor. Donec placerat nunc id neque tempor-->
<!--        mollis. Vivamus vel erat laoreet dolor rutrum lobortis id vel ligula. In sed nisl libero. Proin ultrices sem vel-->
<!--        dictum fringilla. Sed tempor lacus nulla, vitae interdum lectus lacinia at. Ut arcu odio, tristique id erat sed,-->
<!--        posuere commodo ante. Integer mollis, felis sit amet facilisis volutpat, ante ante imperdiet ligula, non-->
<!--        placerat magna lorem eget enim.In vestibulum, magna in condimentum consequat, nibh massa hendrerit nunc, eu-->
<!--        molestie neque neque sit amet sem. Nunc dictum imperdiet odio, id accumsan nisl mollis facilisis. Praesent-->
<!--        tristique tortor eu sapien lobortis, vel egestas massa ultricies. Nam ornare cursus nulla id eleifend.-->
<!--        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur-->
<!--        consectetur quis augue ac commodo. Fusce ornare quis mauris a semper.Nulla justo augue, dapibus non bibendum eu,-->
<!--        commodo non purus. Curabitur rhoncus risus vitae cursus mattis. In hac habitasse platea dictumst. Donec ac nulla-->
<!--        vitae sapien viverra dictum a vel turpis. Nunc maximus feugiat nulla laoreet iaculis. Proin dui libero,-->
<!--        ullamcorper a tortor et, fermentum mollis dolor. Sed sollicitudin condimentum varius.Donec eros metus, hendrerit-->
<!--        non lectus ut, suscipit scelerisque odio. Quisque ac eros molestie, convallis sem non, ultrices arcu. Nulla-->
<!--        aliquam vitae dolor sit amet posuere. Curabitur ornare at lectus nec gravida. Morbi quis erat in lorem lobortis-->
<!--        aliquam vel non diam. Praesent id sem eu elit volutpat aliquet ut vel leo. Sed egestas vulputate metus. Ut-->
<!--        ultrices urna rutrum vehicula gravida. Sed nec egestas ex.Etiam id vehicula risus, vitae condimentum erat. Sed-->
<!--        lacinia efficitur dolor ac interdum. Curabitur at rhoncus massa. Nulla facilisis, sem nec viverra iaculis, est-->
<!--        libero tristique risus, sit amet molestie augue tortor ut mauris. Nulla odio quam, commodo at ornare vestibulum,-->
<!--        sollicitudin at libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis-->
<!--        egestas. Ut imperdiet risus eu enim dictum varius. Vivamus at augue sit amet dolor lacinia convallis. Quisque-->
<!--        rutrum dui et risus consectetur egestas. Maecenas ac interdum massa. Integer id feugiat dolor.Ut tempus commodo-->
<!--        orci eget viverra. Duis laoreet lorem eu placerat mollis. Phasellus a nisi ultrices, blandit diam nec,-->
<!--        ullamcorper lectus. Sed sodales elit et pellentesque tempus. Sed felis sem, luctus dictum commodo eget, eleifend-->
<!--        varius massa. Fusce tincidunt urna in accumsan semper. Fusce eget felis vitae nisi accumsan sodales at ac massa.-->
<!--        Duis pulvinar lacus ultrices posuere sollicitudin. In non volutpat tellus, cursus accumsan diam. Etiam bibendum-->
<!--        pulvinar lectus, pulvinar congue ipsum laoreet in. Vivamus ultrices sapien eget nibh dignissim molestie.Donec at-->
<!--        orci ut erat maximus volutpat. Mauris sodales sed magna et pharetra. Morbi ultrices condimentum eros sed-->
<!--        egestas. Sed gravida tellus elit, ac vestibulum diam tempus non. Curabitur blandit elementum lacus, sed commodo-->
<!--        augue vestibulum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
<!--        Aliquam risus massa, consequat et lacinia eget, eleifend vel purus.In eleifend non neque et luctus. Nulla-->
<!--        facilisi. Quisque rutrum scelerisque metus, sed volutpat leo mollis fringilla. Duis vel erat pellentesque,-->
<!--        tincidunt nulla ac, feugiat dui. Mauris ut libero sed massa pharetra venenatis non et mauris. Duis ornare nisl-->
<!--        ut efficitur iaculis. Nam mollis at justo non ornare. Ut imperdiet condimentum bibendum. Morbi non sem purus.-->
<!--        Nunc pretium tincidunt sodales.Etiam sed elit blandit, fermentum tellus vitae, vehicula tortor. Integer nec-->
<!--        consectetur purus, vel consequat nisl. Integer eu dapibus diam. Duis in lacus nisi. Sed varius accumsan magna-->
<!--        vitae lobortis. Donec blandit lacinia suscipit. Maecenas accumsan interdum finibus. Vivamus eget consectetur-->
<!--        augue. Mauris justo massa, consectetur quis metus vel, mattis luctus diam. Donec nec gravida nisi. Curabitur nec-->
<!--        dolor at lorem pretium pulvinar a nec ante. Sed neque risus, vestibulum eget tempus nec, porta at ex. Cras-->
<!--        tempus rhoncus arcu sit amet pharetra. Vivamus sagittis in leo nec lacinia.-->
<!--    </p>-->
<!--</main>-->

<!--<footer class="fixed bottom-0 left-0 w-full h-16 bg-gray-800 text-white flex items-center justify-center z-50">-->
<!--    Footer-->
<!--</footer>-->

