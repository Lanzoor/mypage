<script lang="ts">
    import { onMount } from "svelte";

    let hasRefreshed = $state(false);
    let answerPromptShown = $state(false);

    onMount(() => {
        hasRefreshed =
            sessionStorage.getItem("doNot.hasDiaryRefreshed") === "true";
        sessionStorage.setItem("doNot.hasDiaryRefreshed", "true");

        answerPromptShown =
            sessionStorage.getItem("doNot.answerPromptShown") === "true";
    });
</script>

{#if answerPromptShown}
    <section>
        <h1>Temptation</h1>

        <p>
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="green" href="https://www.lanzoor.dev/it-all-stops">link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="green" href="https://www.lanzoor.dev/it-all-stops">link</a
            >
            <a class="pink" href="https://www.lanzoor.dev/it-all-japanese"
                >link</a
            >
            <a class="blue" href="https://www.lanzoor.dev/it-all-begins">link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="green" href="https://www.lanzoor.dev/it-all-stops">link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="pink" href="https://www.lanzoor.dev/it-all-japanese"
                >link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="green" href="https://www.lanzoor.dev/it-all-stops">link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="green" href="https://www.lanzoor.dev/it-all-stops">link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="pink" href="https://www.lanzoor.dev/it-all-japanese"
                >link</a
            >
            <a class="pink" href="https://www.lanzoor.dev/it-all-japanese"
                >link</a
            >
            <a class="green" href="https://www.lanzoor.dev/it-all-stops">link</a
            >
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
            <a class="red" href="https://www.lanzoor.dev/it-all-begins">link</a>
        </p>
    </section>

    <style lang="css">
        a.blue {
            color: blue;
        }

        a.red {
            color: red;
        }

        a.green {
            color: green;
        }

        a.pink {
            color: pink;
        }
    </style>
{:else if hasRefreshed}
    <section>
        <h1>Things I did today</h1>

        <ol>
            <li>I woke up.</li>
            <li>I opened my eyes.</li>
            <li>I got up.</li>
            <li>I opened the door and ate breakfast.</li>
            <li>I ate a watermelon.</li>
            <li>I ate a lemon.</li>
            <li>I choked.</li>
            <li>I ate another ledmon.</li>
            <li>I misspelt lemon.</li>
            <li>I corrected lemon.</li>
            <li>I looked at the clock.</li>
            <li>I forgot what time it was.</li>
            <li>I looked at the clock again.</li>
            <li>I blinked.</li>
            <li>I blinked again.</li>
            <li>I wondered why I had blinked.</li>
            <li>I continued existing.</li>
            <li>I walked into another room.</li>
            <li>I forgot why I entered the room.</li>
            <li>I walked back.</li>
            <li>I remembered why I entered the room.</li>
            <li>I walked back into the room.</li>
            <li>I forgot again.</li>
            <li>I sat down.</li>
            <li>I stood up.</li>
            <li>I sat down again.</li>
            <li>I became slightly concerned.</li>
            <li>I drank some water.</li>
            <li>I put the glass down.</li>
            <li>I immediately needed the glass again.</li>
            <li>I picked up the glass.</li>
            <li>I drank more water.</li>
            <li>I put it down more carefully this time.</li>
            <li>I looked outside.</li>
            <li>I saw absolutely nothing interesting.</li>
            <li>I continued looking anyway.</li>
            <li>I saw a bird.</li>
            <li>The bird left.</li>
            <li>I considered following it.</li>
            <li>I did not follow it.</li>
            <li>I opened my computer.</li>
            <li>I stared at the screen.</li>
            <li>The screen remained on.</li>
            <li>I opened a terminal.</li>
            <li>I typed something.</li>
            <li>I immediately forgot what I was doing.</li>
            <li>I typed something else.</li>
            <li>It worked.</li>
            <li>I was surprised.</li>
            <li>I closed the terminal.</li>
            <li>I opened it again.</li>
            <li>I accomplished nothing.</li>
            <li>I ate another lemon.</li>
            <li>I spelled lemon correctly this time.</li>
            <li>I considered this an achievement.</li>
            <li>I went outside.</li>
            <li>I came back inside.</li>
            <li>I wondered why I had gone outside.</li>
            <li>I remembered.</li>
            <li>I forgot again.</li>
            <li>I sat down.</li>
            <li>I stood up.</li>
            <li>I checked the clock.</li>
            <li>I had somehow lost three minutes.</li>
            <li>I blamed the clock.</li>
            <li>The clock remained silent.</li>
            <li>I respected its decision.</li>
            <li>I continued my day.</li>
            <li>I looked at a wall.</li>
            <li>The wall was still there.</li>
            <li>I touched the wall.</li>
            <li>The wall did not react.</li>
            <li>I touched it again.</li>
            <li>I regretted this experiment.</li>
            <li>I regretted this experiment again.</li>
            <li>I looked at my hand.</li>
            <li>My hand was still attached.</li>
            <li>I wondered who invented fingers.</li>
            <li>I did not investigate.</li>
            <li>I found a chair.</li>
            <li>I sat on the chair.</li>
            <li>The chair held me.</li>
            <li>I thanked the chair.</li>
            <li>The chair said nothing.</li>
            <li>I understood.</li>
            <li>I stood up.</li>
            <li>I looked under the chair.</li>
            <li>There was nothing there.</li>
            <li>I looked again.</li>
            <li>There was still nothing there.</li>
            <li>I accepted the results.</li>
            <li>I walked away.</li>
            <li>I walked back.</li>
            <li>I forgot why I walked back.</li>
            <li>I walked away again.</li>
            <li>I opened a drawer.</li>
            <li>I found a spoon.</li>
            <li>I did not need a spoon.</li>
            <li>I put the spoon back.</li>
            <li>I opened the drawer again.</li>
            <li>The spoon was still there.</li>
            <li>I closed the drawer.</li>
            <li>I felt accomplished.</li>
            <li>I drank water.</li>
            <li>I wondered where water came from.</li>
            <li>I remembered.</li>
            <li>I forgot.</li>
            <li>I drank more water.</li>
            <li>I put the cup down.</li>
            <li>I missed the table.</li>
            <li>The cup fell.</li>
            <li>The cup survived.</li>
            <li>I decided not to discuss this further.</li>
            <li>I opened a window.</li>
            <li>Air entered.</li>
            <li>I noticed the air.</li>
            <li>The air did not notice me.</li>
            <li>I closed the window.</li>
            <li>I opened it again.</li>
            <li>I closed it again.</li>
            <li>I questioned my decisions.</li>
            <li>I checked the weather.</li>
            <li>The weather existed.</li>
            <li>I continued existing.</li>
            <li>I heard a noise.</li>
            <li>I investigated.</li>
            <li>It was nothing.</li>
            <li>I investigated the nothing.</li>
            <li>It remained nothing.</li>
            <li>I returned to my room.</li>
            <li>I opened my computer.</li>
            <li>I checked my files.</li>
            <li>There were many files.</li>
            <li>I opened none of them.</li>
            <li>I closed the file manager.</li>
            <li>I opened it again.</li>
            <li>I closed it again.</li>
            <li>I wondered why.</li>
            <li>I did not find out.</li>
            <li>I opened a website.</li>
            <li>The website loaded.</li>
            <li>I refreshed it.</li>
            <li>The website loaded again.</li>
            <li>I refreshed it again.</li>
            <li>I began to understand the problem.</li>
            <li>I stopped refreshing it.</li>
            <li>I opened another tab.</li>
            <li>I forgot which tab I needed.</li>
            <li>I closed both tabs.</li>
            <li>I opened the first tab again.</li>
            <li>I remembered.</li>
            <li>I forgot.</li>
            <li>I sighed.</li>
            <li>I drank water.</li>
            <li>I ate a grape.</li>
            <li>The grape was small.</li>
            <li>I ate another grape.</li>
            <li>The second grape was also small.</li>
            <li>I investigated the grapes.</li>
            <li>They were grapes.</li>
            <li>I documented my findings.</li>
            <li>I lost the document.</li>
            <li>I found the document.</li>
            <li>I deleted the document.</li>
            <li>I regretted deleting it.</li>
            <li>I checked the trash.</li>
            <li>The document was there.</li>
            <li>I restored it.</li>
            <li>I immediately deleted it again.</li>
            <li>I questioned my life choices.</li>
            <li>I ate a cracker.</li>
            <li>The cracker was crunchy.</li>
            <li>I ate another cracker.</li>
            <li>This one was also crunchy.</li>
            <li>I considered writing this down.</li>
            <li>I did not write it down.</li>
            <li>I looked at the floor.</li>
            <li>The floor was horizontal.</li>
            <li>I approved of this.</li>
            <li>I looked at the ceiling.</li>
            <li>The ceiling was above me.</li>
            <li>I approved of this too.</li>
            <li>I looked at the wall again.</li>
            <li>The wall remained unchanged.</li>
            <li>I began to suspect the wall.</li>
            <li>The wall remained suspiciously silent.</li>
            <li>I moved on.</li>
            <li>I found a pencil.</li>
            <li>I picked up the pencil.</li>
            <li>I put down the pencil.</li>
            <li>I picked it up again.</li>
            <li>I wondered why.</li>
            <li>I put it down again.</li>
            <li>I walked away.</li>
            <li>I came back.</li>
            <li>I picked up the pencil.</li>
            <li>I wrote nothing.</li>
            <li>I put the pencil down.</li>
            <li>I declared the experiment complete.</li>
            <li>I opened a book.</li>
            <li>I read one sentence.</li>
            <li>I read the sentence again.</li>
            <li>I forgot the sentence.</li>
            <li>I read it a third time.</li>
            <li>I understood the sentence.</li>
            <li>I turned the page.</li>
            <li>I immediately regretted turning the page.</li>
            <li>I turned it back.</li>
            <li>I continued reading.</li>
            <li>I stopped reading.</li>
            <li>I closed the book.</li>
            <li>I opened the book again.</li>
            <li>I closed it again.</li>
            <li>I put the book away.</li>
            <li>I found another book.</li>
            <li>I did not open it.</li>
            <li>I felt productive.</li>
            <li>I checked the time.</li>
            <li>I forgot the time.</li>
            <li>I checked again.</li>
            <li>The time had changed.</li>
            <li>I blamed time.</li>
            <li>Time did not respond.</li>
            <li>I continued.</li>
            <li>I heard another noise.</li>
            <li>I looked around.</li>
            <li>Nothing was moving.</li>
            <li>I became suspicious.</li>
            <li>I waited.</li>
            <li>Nothing happened.</li>
            <li>I waited longer.</li>
            <li>Still nothing happened.</li>
            <li>I left.</li>
            <li>The noise happened again.</li>
            <li>I ignored it.</li>
            <li>The noise stopped.</li>
            <li>I considered this a victory.</li>
            <li>I ate an apple.</li>
            <li>The apple was an apple.</li>
            <li>I ate the rest.</li>
            <li>There was no more apple.</li>
            <li>I mourned the apple briefly.</li>
            <li>I recovered.</li>
            <li>I drank water.</li>
            <li>I looked at my computer.</li>
            <li>The computer was still there.</li>
            <li>I moved the mouse.</li>
            <li>The cursor moved.</li>
            <li>I moved the mouse again.</li>
            <li>The cursor moved again.</li>
            <li>I became fascinated.</li>
            <li>I moved the mouse five more times.</li>
            <li>The cursor continued obeying.</li>
            <li>I stopped.</li>
            <li>I pressed a key.</li>
            <li>A letter appeared.</li>
            <li>I pressed another key.</li>
            <li>Another letter appeared.</li>
            <li>I pressed backspace.</li>
            <li>The letter disappeared.</li>
            <li>I repeated this process.</li>
            <li>I wondered whether this counted as writing.</li>
            <li>I decided that it did.</li>
            <li>I wrote a sentence.</li>
            <li>The sentence was terrible.</li>
            <li>I deleted the sentence.</li>
            <li>I wrote another sentence.</li>
            <li>The second sentence was worse.</li>
            <li>I deleted that too.</li>
            <li>I stared at the blank screen.</li>
            <li>The blank screen stared back.</li>
            <li>I lost.</li>
            <li>I opened a terminal.</li>
            <li>I typed <code>ls</code>.</li>
            <li>Files appeared.</li>
            <li>I typed <code>pwd</code>.</li>
            <li>I discovered where I was.</li>
            <li>I already knew where I was.</li>
            <li>I typed <code>cd ..</code>.</li>
            <li>I went somewhere else.</li>
            <li>I typed <code>cd -</code>.</li>
            <li>I went back.</li>
            <li>I felt powerful.</li>
            <li>I typed a command.</li>
            <li>It failed.</li>
            <li>I typed it again.</li>
            <li>It failed differently.</li>
            <li>I stared at the error.</li>
            <li>The error stared back.</li>
            <li>I searched the error.</li>
            <li>I found a forum post.</li>
            <li>The forum post was from 2014.</li>
            <li>I tried the solution.</li>
            <li>It worked.</li>
            <li>I became happy.</li>
            <li>I forgot what I had originally wanted to do.</li>
            <li>I closed the terminal.</li>
            <li>I opened it again.</li>
            <li>I remembered.</li>
            <li>I forgot again.</li>
            <li>I ate a lemon.</li>
            <li>This lemon was suspicious.</li>
            <li>I inspected the lemon.</li>
            <li>It was normal.</li>
            <li>I ate it.</li>
            <li>I immediately regretted this.</li>
            <li>I drank water.</li>
            <li>I felt better.</li>
            <li>I checked the clock.</li>
            <li>It was later than expected.</li>
            <li>I wondered where the time went.</li>
            <li>The time refused to answer.</li>
            <li>I accepted this.</li>
            <li>I opened the refrigerator.</li>
            <li>I looked inside.</li>
            <li>I found nothing interesting.</li>
            <li>I closed the refrigerator.</li>
            <li>I opened it again.</li>
            <li
                title="Do not open the warp panel (do not open it by pressing Ctrl+Shift+/) and type 'do-not-assets'."
            >
                I saw arir momor in the refrigerator.
            </li>
            <li>I closed and opened the refrigerator again.</li>
            <li>Arir momor disappeared.</li>
            <li>I closed it again.</li>
            <li>I walked away.</li>
            <li>I returned thirty seconds later.</li>
            <li>I opened it again.</li>
            <li>Nothing had changed.</li>
            <li>I began to understand refrigerators. I think.</li>
            <li>I found some cheese.</li>
            <li>I ate the cheese.</li>
            <li>The cheese was good.</li>
            <li>I wanted more cheese.</li>
            <li>There was no more cheese.</li>
            <li>I accepted my fate.</li>
            <li>I sat down.</li>
            <li>I stood up.</li>
            <li>I sat down again.</li>
            <li>I changed my mind.</li>
            <li>I stood up again.</li>
            <li>I walked around.</li>
            <li>I walked in a circle.</li>
            <li>I completed the circle.</li>
            <li>I walked another circle.</li>
            <li>I stopped walking in circles.</li>
            <li>I wondered why I had done that.</li>
            <li>I did not find an answer.</li>
            <li>I looked at a lamp.</li>
            <li>The lamp was off.</li>
            <li>I turned it on.</li>
            <li>The lamp was bright.</li>
            <li>I turned it off.</li>
            <li>The lamp was dark.</li>
            <li>I turned it on again.</li>
            <li>I began questioning my relationship with the lamp.</li>
            <li>I turned it off.</li>
            <li>I left the room.</li>
            <li>I returned to the room.</li>
            <li>The lamp was still off.</li>
            <li>I respected its consistency.</li>
            <li>I checked my phone.</li>
            <li>I had no notifications.</li>
            <li>I checked again.</li>
            <li>I still had no notifications.</li>
            <li>I checked a third time.</li>
            <li>There were still no notifications.</li>
            <li>I put my phone down.</li>
            <li>I picked it back up.</li>
            <li>I opened an app.</li>
            <li>I closed the app.</li>
            <li>I opened another app.</li>
            <li>I closed that one too.</li>
            <li>I locked my phone.</li>
            <li>I unlocked my phone.</li>
            <li>I locked it again.</li>
            <li>I put it away.</li>
            <li>I immediately needed it.</li>
            <li>I took it back out.</li>
            <li>I did not need it anymore.</li>
            <li>I put it away again.</li>
            <li>I sighed.</li>
            <li>I drank water.</li>
            <li>I looked outside.</li>
            <li>It was still outside.</li>
            <li>I found this reassuring.</li>
            <li>I looked at the sky.</li>
            <li>The sky was blue.</li>
            <li>I looked again.</li>
            <li>The sky remained blue.</li>
            <li>I looked at a cloud.</li>
            <li>The cloud moved.</li>
            <li>I watched it move.</li>
            <li>The cloud continued moving.</li>
            <li>I lost interest.</li>
            <li>I looked at another cloud.</li>
            <li>This one was shaped strangely.</li>
            <li>I decided it looked like a potato.</li>
            <li>I became hungry.</li>
            <li>I looked for a potato.</li>
            <li>I found no potato.</li>
            <li>
                I had made a devastating realization that everything in this
                universe is either a potato or not a potato.
            </li>
            <li>I ate a cracker instead.</li>
            <li>The cracker was crunchy.</li>
            <li>I had already established this.</li>
            <li>I continued anyway.</li>
            <li>I found a sock.</li>
            <li>I found another sock.</li>
            <li>They did not match.</li>
            <li>I considered finding their partners.</li>
            <li>I did not.</li>
            <li>I put the socks down.</li>
            <li>I forgot where I put them.</li>
            <li>I found them again.</li>
            <li>I was impressed.</li>
            <li>I found a third sock.</li>
            <li>I became concerned.</li>
            <li>I found no fourth sock.</li>
            <li>I left the socks alone.</li>
            <li>I opened a drawer.</li>
            <li>I found batteries.</li>
            <li>I did not need batteries.</li>
            <li>I closed the drawer.</li>
            <li>I opened another drawer.</li>
            <li>I found a cable.</li>
            <li>I did not know what the cable was for.</li>
            <li>I kept the cable.</li>
            <li>I closed the drawer.</li>
            <li>I forgot about the cable.</li>
            <li>I remembered the cable.</li>
            <li>I forgot again.</li>
            <li>I ate another grape.</li>
            <li>I looked at the ceiling.</li>
            <li>The ceiling remained above me.</li>
            <li>I looked at the floor.</li>
            <li>The floor remained below me.</li>
            <li>I considered gravity.</li>
            <li>Gravity continued working.</li>
            <li>I thanked gravity.</li>
            <li>Gravity did not respond.</li>
            <li>I moved on.</li>
            <li>I heard another noise.</li>
            <li>I ignored it.</li>
            <li>The noise happened again.</li>
            <li>I continued ignoring it.</li>
            <li>The noise stopped.</li>
            <li>I wondered whether ignoring it had worked.</li>
            <li>I decided that it had.</li>
            <li>I drank water.</li>
            <li>I ate a watermelon.</li>
            <li>The watermelon was larger than the grapes.</li>
            <li>I found this reasonable.</li>
            <li>I ate more watermelon.</li>
            <li>I ate even more watermelon.</li>
            <li>I realized there was a lot of watermelon.</li>
            <li>I stopped eating watermelon.</li>
            <li>I saved the rest.</li>
            <li>I forgot where I saved it.</li>
            <li>I searched for it.</li>
            <li>I found it.</li>
            <li>I remembered where I had put it.</li>
            <li>I ate some more.</li>
            <li>I regretted nothing.</li>
            <li>I looked at the clock.</li>
            <li>The clock had advanced.</li>
            <li>I found this suspicious.</li>
            <li>I checked the clock again.</li>
            <li>It was still advancing.</li>
            <li>I decided to stop checking.</li>
            <li>I checked it one last time.</li>
            <li>I stopped.</li>
            <li>I walked to the kitchen.</li>
            <li>I walked back.</li>
            <li>I forgot what I wanted.</li>
            <li>I remembered.</li>
            <li>I walked back to the kitchen.</li>
            <li>I found what I wanted.</li>
            <li>I forgot what it was called.</li>
            <li>I looked it up.</li>
            <li>I remembered the word.</li>
            <li>I forgot the word again.</li>
            <li>I gave up.</li>
            <li>I drank water.</li>
            <li>I sat down.</li>
            <li>I opened my computer.</li>
            <li>I stared at the desktop.</li>
            <li>The desktop contained icons.</li>
            <li>I counted them.</li>
            <li>I lost count.</li>
            <li>I counted again.</li>
            <li>I lost count again.</li>
            <li>I stopped counting.</li>
            <li>I opened a folder.</li>
            <li>There were more folders.</li>
            <li>I opened one.</li>
            <li>There were even more folders.</li>
            <li>I closed everything.</li>
            <li>I wondered where all the folders came from.</li>
            <li>I created another folder.</li>
            <li>I became part of the problem.</li>
            <li>I named the folder something normal.</li>
            <li>I immediately renamed it.</li>
            <li>I renamed it again.</li>
            <li>I settled on a name.</li>
            <li>I forgot what I named it.</li>
            <li>I found it.</li>
            <li>I remembered.</li>
            <li>I closed the folder.</li>
            <li>I closed the file manager.</li>
            <li>I opened the terminal.</li>
            <li>I typed <code>clear</code>.</li>
            <li>The terminal became clear.</li>
            <li>I typed something else.</li>
            <li>I immediately regretted it.</li>
            <li>I pressed Ctrl+C.</li>
            <li>The process stopped.</li>
            <li>I felt victorious. LET'S GOOOOOO</li>
            <li>I typed the command again.</li>
            <li>I pressed Ctrl+C again.</li>
            <li>I learned nothing.</li>
            <li>I closed the terminal.</li>
            <li>I opened it again.</li>
            <li>I wondered why.</li>
            <li>I closed it.</li>
            <li>I opened a text editor.</li>
            <li>I typed one word.</li>
            <li>I deleted the word.</li>
            <li>I typed another word.</li>
            <li>I deleted that word too.</li>
            <li>I saved the empty file.</li>
            <li>I named it diary.</li>
            <li>I closed it.</li>
            <li>I reopened it.</li>
            <li>It was empty.</li>
            <li>I considered this accurate.</li>
            <li>I added a sentence.</li>
            <li>I deleted the sentence.</li>
            <li>I saved the file.</li>
            <li>I closed the editor.</li>
            <li>I opened the file manager.</li>
            <li>I found the file.</li>
            <li>I stared at it.</li>
            <li>I closed the file manager.</li>
            <li>I stood up.</li>
            <li>I sat down.</li>
            <li>I stood up again.</li>
            <li>I walked around.</li>
            <li>I stopped.</li>
            <li>I looked at the wall.</li>
            <li>The wall had not moved.</li>
            <li>I was relieved.</li>
            <li>I touched the wall.</li>
            <li>It was still a wall.</li>
            <li>I walked away.</li>
            <li>I ate a lemon.</li>
            <li>I spelled lemon correctly.</li>
            <li>I became confident.</li>
            <li>I wrote “ledmon.”</li>
            <li>I realized my mistake.</li>
            <li>I corrected it.</li>
            <li>I wrote “lemon.”</li>
            <li>I stared at the word.</li>
            <li>The word looked strange.</li>
            <li>I repeated it several times.</li>
            <li>Lemon stopped looking like a real word.</li>
            <li>I accepted this.</li>
            <li>I ate the lemon.</li>
            <li>I regretted eating the lemon.</li>
            <li>I choked again.</li>
            <li>I drank water.</li>
            <li>I recovered.</li>
            <li>I looked at the clock.</li>
            <li>It was evening.</li>
            <li>I wondered where the day went.</li>
            <li>I remembered writing all of this.</li>
            <li>I questioned my choices.</li>
            <li>I continued anyway.</li>
            <li>I opened the refrigerator.</li>
            <li>There was still no cheese.</li>
            <li>I closed the refrigerator.</li>
            <li>I found a watermelon.</li>
            <li>I ate the watermelon.</li>
            <li>I drank water.</li>
            <li>I looked outside.</li>
            <li>It was dark.</li>
            <li>I looked at the sky.</li>
            <li>The sky was also dark.</li>
            <li>I found this consistent.</li>
            <li>I turned on the light.</li>
            <li>The room became brighter.</li>
            <li>I turned the light off.</li>
            <li>The room became darker.</li>
            <li>I turned it on again.</li>
            <li>I turned it off again.</li>
            <li>I stopped touching the light.</li>
            <li>I sat down.</li>
            <li>I stood up.</li>
            <li>I sat down again.</li>
            <li>I decided to stay seated.</li>
            <li>I remained seated.</li>
            <li>I drank water.</li>
            <li>I looked at my hands.</li>
            <li>They were still there.</li>
            <li>I wiggled my fingers.</li>
            <li>They still worked.</li>
            <li>I stopped wiggling them.</li>
            <li>I looked at the clock.</li>
            <li>The clock continued.</li>
            <li>I decided to sleep soon.</li>
            <li>I did not sleep yet.</li>
            <li>I opened my computer again.</li>
            <li>I checked one thing.</li>
            <li>I checked another thing.</li>
            <li>I checked five more things.</li>
            <li>I forgot the first thing.</li>
            <li>I closed the computer.</li>
            <li>I opened it again.</li>
            <li>I closed it again.</li>
            <li>I stood up.</li>
            <li>I walked to my room.</li>
            <li>I opened the door.</li>
            <li>I entered.</li>
            <li>I closed the door.</li>
            <li>I opened the door.</li>
            <li>I closed the door again.</li>
            <li>I checked whether it was locked.</li>
            <li>It was not locked.</li>
            <li>I locked it.</li>
            <li>I checked again.</li>
            <li>It was locked.</li>
            <li>I felt safer.</li>
            <li>I turned around.</li>
            <li>I looked at my bed.</li>
            <li>The bed was still a bed.</li>
            <li>I approached it.</li>
            <li>I sat on it.</li>
            <li>I lay down.</li>
            <li>I got back up.</li>
            <li>I lay down again.</li>
            <li>I adjusted the pillow.</li>
            <li>I adjusted it again.</li>
            <li>I decided it was fine.</li>
            <li>I checked the time.</li>
            <li>It was late.</li>
            <li>I turned off the light.</li>
            <li>I turned it back on.</li>
            <li>I turned it off again.</li>
            <li>I looked at the ceiling.</li>
            <li>The ceiling was still there.</li>
            <li>I closed my eyes.</li>
            <li>I opened them.</li>
            <li>I closed them again.</li>
            <li>I thought about lemons.</li>
            <li>I stopped thinking about lemons.</li>
            <li>I thought about watermelons.</li>
            <li>I stopped thinking about watermelons.</li>
            <li>I wondered why I had written so much about fruit.</li>
            <li>I had no answer.</li>
            <li>I heard a noise.</li>
            <li>I ignored it.</li>
            <li>I heard another noise.</li>
            <li>I ignored that one too.</li>
            <li>The room became quiet.</li>
            <li>I appreciated the quiet.</li>
            <li>I opened my eyes.</li>
            <li>I closed my eyes.</li>
            <li>I opened them again.</li>
            <li>I checked the clock one last time.</li>
            <li>I regretted checking it.</li>
            <li>I put my phone away.</li>
            <li>I looked at the ceiling again.</li>
            <li>The ceiling had not changed.</li>
            <li>I wondered whether tomorrow would be different.</li>
            <li>I decided tomorrow could wait.</li>
            <li>I closed my eyes.</li>
            <li>I opened them.</li>
            <li>I closed them again.</li>
            <li>I remembered that I had forgotten something.</li>
            <li>I forgot what it was.</li>
            <li>I decided it probably was not important.</li>
            <li>I drank some water.</li>
            <li>I put the cup down.</li>
            <li>I looked at the clock.</li>
            <li>I realized it was very late.</li>
            <li>I stopped thinking.</li>
            <li>I continued thinking.</li>
            <li>I stopped again.</li>
            <li>I closed my eyes.</li>
            <li>I couldn't sleep.</li>
            <li>I got up again.</li>
            <li>I turned my computer on.</li>
            <li>I entered my password and logged in.</li>
            <li>I opened my code editor.</li>
            <li>I opened a repository.</li>
            <li>
                I opened a file named <code
                    >~/Workspace/projects/core/src/routes/(main)/blog/2026/what/diary</code
                >.
            </li>
            <li>I wrote all of the stuff that happened today.</li>
            <li>I pushed the changes.</li>
            <li>I turned my computer off.</li>
            <li>I double checked.</li>
            <li>I triple checked.</li>
            <li>I quadruple checked.</li>
            <li>I went to bed.</li>
            <li>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </li>
        </ol>
    </section>
{:else}
    <section>
        <p>Do not refresh this page and hover over the 319th line.</p>
    </section>
{/if}
