<script lang="ts">
    import shittyImage from "../assets/image14.png";
    import shittyDrawing from "../assets/image1.png";

    import EditorsNote from "../EditorsNote.svelte";
    import DocumentNavigation from "$lib/components/Navigation/DocumentNavigation.svelte";
</script>

<section>
    <h1>PART 4: DEATH AT 20,000 VOLTS</h1>

    <h2>4-1: To Fake a Suicide (again) (AGAIN) (final) (1) (late 2025)</h2>

    <p>
        Yep. Sooooo unpredictable I know. This is like the gazillionth time and
        we all know that. On November 13, shitter sent this poem written in
        Poetic ChatGPT Ahh English to Lanzoor:
    </p>

    <div class="shit">
        Kind soul, whose grace hath stay’d mine hour,<br />
        When all the world seem’d dim and sour—<br /> Take now my thanks, most
        true, most deep, For thou didst grant me cause to keep.<br /><br />

        Where tempests rose and tongues did bite,<br />
        Thy heart yet shone, a steadfast light.<br />
        Though dramas wound, and shadows press, <br />
        Thy mercy brought me gentleness.<br /><br />

        Would I were stronger, whole, and true,<br />
        That I might give such grace as you.<br />
        Yet mark this vow, writ soft and plain:<br />
        Thy kindness shall not fade nor wane.<br /><br />

        Though I must wander far from thee,<br />
        And silence take the place of speech,<br />
        Thy name shall dwell within my heart—<br />
        A gentle star none else may reach.<br /><br />

        And prithee, tell fair Moyari
        <span class="dim">[referring to TheCasualGuy]</span>
        this,<br />
        And Kekeee too, whom I shall miss:<br />
        That I depart from noise and care,<br />
        Yet wish them peace beyond compare.<br />
        Their laughter once did warm my days;<br />
        May light attend them all their ways.<br />

        So fare thee well, good friend, kind guide—<br />
        Though worlds may turn and years divide,<br />
        Know this: thy goodness shall abide,<br />
        Unlost, unbent, within mine heart.<br />
        Thank you for the memories.<br />2011.01.23～2025.12.15
    </div>

    <p>
        <b
            >After that, he left all groups associated with the members, and
            blocked all of them.</b
        > Notice the date? The first date (2011.01.23) refers to his birthday, and
        the second date (2025.12.15) refers to a date after this message has been
        sent.
    </p>

    <p>
        This absolutely meant that it was a fake """suicide""" that's gonna be
        """committed""" on that date. Just like the previous build-up for the
        first Shitter ARG. He only wanted attention. This is not serious at all,
        and was probably another build up for either a shitty ARG, or the
        friendship gain-lose cycle again. (future Lanzoor here, we were so.
        fucking. accurate.)
    </p>

    <p>
        Soon after, as expected, Shitter's account name changed to
        <span class="jp" lang="jp">消すと増えます</span>, which roughly means
        “If [you erase it / you get erased], (it) increases/improves.” This most
        likely symbolizes that, if he disappears ("erase") the world becomes
        better. ("increases")
    </p>

    <p>
        This project was basically dead, until the date (December 15th) came.
        And as expected, Shitter sent Caden a puzzle. Yeah. He's that
        predictable.
    </p>

    <p class="shitty">
        This will be my last cipher.<br />
        The hint is Base XXXVI.<br />
        Thank you for everything.<br />
        I will archiue this account.<br />
        Vntil We Meet Again. TBTYUHRT
    </p>

    <img src={shittyImage} alt="shitty arg" style="width: 40em " />

    <p>
        This image was probably the result of crappy photoshop + AI generated
        image of himself + Shutterstock type shit editing. (also why are the v's
        and the u's swapped) <b
            >However, thanks to Caden, we could see what this puzzle means
            without having to solve this by ourselves.</b
        > (say ty to Caden)
    </p>

    <p>
        Starting with the message, <code>TBTYUHRT</code> is his initials in
        kana;
        <span class="jp" lang="jp">とぶちょうふろた.</span>
    </p>

    <p>Now looking at the image, the long string,</p>

    <div class="display">
        <code>
            r1u93ol1ob3ug4is36b4om4of1u93oq2ol4of2o73ir26g26s2i92i73us1uq4ib4ub3is1ub3is2it1uq4ibr1u93ol1ob3ug4is36b4om4of1u93oq2ol4of2o73ir26g26s2i92i73us1uq4ib4ub3is1ub3is2it1uq4ib</code
        >
    </div>

    <p>
        Converting the long string from base 36 (as hinted by XXXVI) to base 6
        gives:
    </p>

    <div class="display">
        <code
            >4301501303403301401503502404304403101504403404402301501303404202403304402302401103304302102402104402301302301103504401504204301504501503304401501503304402304501504204301543015013034033014015035024043044031015044034044023015013034042024033044023024011033043021024021044023013023011035044015042043015045015033044015015033044023045015042043015
        </code>
    </div>

    <p>
        Decoding the Polybius Cipher with separator <code>0</code> and the
        encryption key <code>ABCDEFGHIKLMNOPQRSTUWXYZ</code> gives:
    </p>

    <div class="display">
        <code>
            SECONDEPISTLETOTHECORINTHIANSFIFTHCHAPTERSEUENTEENTHUERSESECONDEPISTLETOTHECORINTHIANSFIFTHCHAPTERSEUENTEENTHUERSE
        </code>
    </div>

    <p>Sanitizing the output and removing the redundant part gives:</p>

    <div class="display">
        <code
            >SECOND EPISTLE TO THE CORINTHIANS FIFTH CHAPTER SEUENTEENTH UERSE</code
        >
    </div>

    <p>Swapping the u's with v's gives:</p>

    <div class="display">
        <b>
            <code>
                SECOND EPISTLE TO THE CORINTHIANS FIFTH CHAPTER SEVENTEENTH
                VERSE
            </code>
        </b>
    </div>

    <p>This verse (2 Corinthians 5:17) reads:</p>

    <div class="display">
        <code
            >Therefore if any man be in Christ, he is a new creature: old things
            are passed away; behold, all things are become new.</code
        >
    </div>

    <p>
        Which basically means <b
            >"anyone that accepts Christ becomes a new creation".</b
        > The meaning of this was confirmed when Shitter revealed he was converting
        to Mormonism.
    </p>

    <p>Also, the text at the bottom:</p>

    <div class="display"><code>mio voti magno tu omnia vωſon</code></div>

    <p>
        This is a Latin sort of conlang. We couldn't get the exact meaning, but
        it roughly means something like: <b>I wish great things to you.</b>
    </p>

    <p>(he probably doesn't lmfao)</p>

    <h2>4-2: How a Shitter becomes a Criminal (early 2026)</h2>

    <p>
        <b
            >On January 23th, when we all thought that Shitter had disappeared
            already, a devastating message was sent into the group chat.</b
        >
        One of the group members, kekeee pointed out that Shitter was still active
        in some social servers, including the toki pona server, Murder Drones community
        and the Shasavic Music server. Lanzoor decided to join the servers mentioned
        earlier to investigate, however he could not find any real evidence that would
        benefit this situation.
    </p>

    <p>
        On January 24th, Lanzoor tried approaching Shitter in the Shasavic Music
        server to solve the situation once and for all. <b
            >However, as expected, Shitter acted aggressively to Lanzoor's
            words, and even accused Lanzoor of doxxing his school, WHICH IS
            LITERALLY DEFAMATION LANZOOR DIDN'T EVEN DO ALL THAT SHIT</b
        >
    </p>

    <p>
        However, as Lanzoor invited the other group members into the server and
        talked to him in a private thread, we managed to calm him down
        significantly. (We already knew that being angry or aggressive was not
        the answer because it's like the 3rd time we're doing this, duh)
    </p>

    <p>
        While Lanzoor was trying to calm down Shitter, he gathered some
        important details that could ultimately help us grasp WHY Shitter is
        acting like this in the first place. To summarize by using the Shitty
        drawing made by Shitter:
    </p>

    <img src={shittyDrawing} alt="shitty drawing" />

    <ol>
        <li>
            Due to his parent's egregious actions and punishments, that does not
            correlate to his actions, he ended up taking lots of pressure and
            even getting mentally abused at some occasions.
        </li>
        <li>
            He got trauma from the experiences, leading to his brain defaulting
            to the fact that "all humans are dangerous".
        </li>
        <li>
            He even thought he was being hated by both life and god himself, and
            eventually considered suicide as well.
        </li>
        <li>
            <b>
                Due to the reasons above, when approached by a person, his
                actions default to being aggressive and rather questionable.
            </b>
        </li>
    </ol>

    <DocumentNavigation
        previous={{ href: "/docs/shitter/part-3", title: "Part 3" }}
        next={{ href: "/docs/shitter/part-5", title: "Part 5" }}
    />
</section>

<style lang="css">
    .shit {
        font-family: serif;

        font-style: italic;

        padding: 1em;
    }

    .shitty {
        font-family: "Noto Sans Mono";
    }
</style>
