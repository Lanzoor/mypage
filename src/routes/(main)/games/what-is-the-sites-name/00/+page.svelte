<script lang="ts">
    import KaTeX from "$lib/components/Math/KaTeX.svelte";
    import { LStorage } from "$lib/storage";
    import { onMount } from "svelte";

    const scenes = [
        "failed",
        "question01",
        "question02",
        "question03",
        "question04",
        "question05",
        "question06",
        "question07",
        "question08",
        "question09",
        "question10",
        "question11",
        "question12",
        "question13",
        "question14",
        "question15",
        "question16",
        "question17",
        "question18",
        "question19",
        "question20",
        "question21",
        "question22",
        "question23",
        "question24",
        "question25",
        "question26",
        "question27",
        "question28",
        "question29",
        "question30",
        "question31",
    ] as const;

    type Scene = (typeof scenes)[number];

    let checkpoint = $state<Scene>("question01");

    function isScene(value: string): value is Scene {
        return scenes.includes(value as Scene) || value === "failed";
    }

    function setCheckpoint(scene: Scene) {
        checkpoint = scene;
        LStorage.set("site-checkpoint", scene);
    }

    function loadCheckpoint() {
        const saved = LStorage.get("site-checkpoint", "question01");

        console.log("SAVED:", saved);

        if (scenes.includes(saved as Scene)) {
            scene = saved as Scene;
        }
    }

    function advance() {
        if (scene === "failed") {
            scene = checkpoint;
            return;
        }

        const index = scenes.indexOf(scene);

        if (index < scenes.length - 1) {
            scene = scenes[index + 1];
        }
    }

    function restart() {
        scene = "failed";
    }

    let scene = $state<Scene>("question01");

    let object = $state({
        question01: {
            currentAnswer: "",
            correctAnswer: "lanzoor.dev",
        },
        question02: {
            currentAnswer: "",
            correctAnswer: "v",
        },
        question03: {
            currentAnswer: "",
            correctAnswer: "11",
        },
        question04: {
            currentAnswer: "",
            correctAnswer: "lanzoor.dev",
        },
        question09: {
            currentAnswer: "",
            correctAnswer: "319",
        },
        question10: {
            currentAnswer: "",
            correctAnswer: "21",
        },
    });

    onMount(() => {
        console.log(
            "Loaded savedata with state:",
            LStorage.get("site-checkpoint", "question01"),
        );
        loadCheckpoint();
    });
</script>

<section>
    {#if scene === "failed"}
        <h1>You failed!</h1>

        <p>
            Remember: you are currently plaing on lanzoor.dev. <b
                >If you didn't ignore the warnings that is.</b
            >
        </p>

        <button onclick={advance}>Try Again</button>
    {/if}

    {#if scene === "question01"}
        <h2>Confirmation Question 1</h2>

        <h1>What is the name of the website?</h1>

        <p>
            Please input in the <code>xxxxxxx.xxx</code> format.<br />
            Please give the exact input name.
        </p>

        <input
            type="text"
            placeholder="xxxxxxx.xxx"
            bind:value={object.question01.currentAnswer}
        />

        <button
            onclick={() => {
                object.question01.currentAnswer.trim().toLowerCase() ===
                object.question01.correctAnswer
                    ? advance()
                    : restart();
            }}>Check</button
        >
    {/if}

    {#if scene === "question02"}
        <h2>Confirmation Question 2</h2>

        <h1>What is the last letter of the name of the website?</h1>

        <input
            type="text"
            placeholder="x"
            bind:value={object.question02.currentAnswer}
        />

        <button
            onclick={() => {
                object.question02.currentAnswer.trim().toLowerCase() ===
                object.question02.correctAnswer
                    ? advance()
                    : restart();
            }}>Check</button
        >
    {/if}

    {#if scene === "question03"}
        <h2>Confirmation Question 3</h2>

        <h1>How many letters are in the name of the website?</h1>

        <p>This includes the dot.</p>

        <input
            type="text"
            placeholder="xx"
            bind:value={object.question03.currentAnswer}
        />

        <button
            onclick={() => {
                object.question03.currentAnswer.trim().toLowerCase() ===
                object.question03.correctAnswer
                    ? advance()
                    : restart();
            }}>Check</button
        >
    {/if}

    {#if scene === "question04"}
        <h2>Confirmation Question 4</h2>

        <h1>What is the name of the website?</h1>

        <p>The current name is: <b>{object.question04.currentAnswer}</b></p>

        <div class="keyboard-grid">
            <button onclick={() => (object.question04.currentAnswer += "a")}
                >a</button
            >
            <button onclick={() => (object.question04.currentAnswer += "b")}
                >b</button
            >
            <button onclick={() => (object.question04.currentAnswer += "c")}
                >c</button
            >
            <button onclick={() => (object.question04.currentAnswer += "d")}
                >d</button
            >
            <button onclick={() => (object.question04.currentAnswer += "e")}
                >e</button
            >
            <button onclick={() => (object.question04.currentAnswer += "f")}
                >f</button
            >
            <button onclick={() => (object.question04.currentAnswer += "g")}
                >g</button
            >
            <button onclick={() => (object.question04.currentAnswer += "h")}
                >h</button
            >
            <button onclick={() => (object.question04.currentAnswer += "i")}
                >i</button
            >
            <button onclick={() => (object.question04.currentAnswer += "j")}
                >j</button
            >
            <button onclick={() => (object.question04.currentAnswer += "k")}
                >k</button
            >
            <button onclick={() => (object.question04.currentAnswer += "l")}
                >l</button
            >
            <button onclick={() => (object.question04.currentAnswer += "m")}
                >m</button
            >
            <button onclick={() => (object.question04.currentAnswer += "n")}
                >n</button
            >
            <button onclick={() => (object.question04.currentAnswer += "o")}
                >o</button
            >
            <button onclick={() => (object.question04.currentAnswer += "p")}
                >p</button
            >
            <button onclick={() => (object.question04.currentAnswer += "q")}
                >q</button
            >
            <button onclick={() => (object.question04.currentAnswer += "r")}
                >r</button
            >
            <button onclick={() => (object.question04.currentAnswer += "s")}
                >s</button
            >
            <button onclick={() => (object.question04.currentAnswer += "t")}
                >t</button
            >
            <button onclick={() => (object.question04.currentAnswer += "u")}
                >u</button
            >
            <button onclick={() => (object.question04.currentAnswer += "v")}
                >v</button
            >
            <button onclick={() => (object.question04.currentAnswer += "w")}
                >w</button
            >
            <button onclick={() => (object.question04.currentAnswer += "x")}
                >x</button
            >
            <button onclick={() => (object.question04.currentAnswer += "y")}
                >y</button
            >
            <button onclick={() => (object.question04.currentAnswer += "z")}
                >z</button
            >
        </div>

        <div class="keyboard-grid">
            <button onclick={() => (object.question04.currentAnswer += "1")}
                >1</button
            >
            <button onclick={() => (object.question04.currentAnswer += "2")}
                >2</button
            >
            <button onclick={() => (object.question04.currentAnswer += "3")}
                >3</button
            >
            <button onclick={() => (object.question04.currentAnswer += "4")}
                >4</button
            >
            <button onclick={() => (object.question04.currentAnswer += "5")}
                >5</button
            >
            <button onclick={() => (object.question04.currentAnswer += "6")}
                >6</button
            >
            <button onclick={() => (object.question04.currentAnswer += "7")}
                >7</button
            >
            <button onclick={() => (object.question04.currentAnswer += "8")}
                >8</button
            >
            <button onclick={() => (object.question04.currentAnswer += "9")}
                >9</button
            >
            <button onclick={() => (object.question04.currentAnswer += "0")}
                >0</button
            >
            <button onclick={() => (object.question04.currentAnswer += ".")}
                >.</button
            >
            <button onclick={() => (object.question04.currentAnswer += ",")}
                >,</button
            >
            <button onclick={() => (object.question04.currentAnswer += ";")}
                >;</button
            >
            <button onclick={() => (object.question04.currentAnswer += ":")}
                >:</button
            >
            <button onclick={() => (object.question04.currentAnswer += "!")}
                >!</button
            >
            <button onclick={() => (object.question04.currentAnswer += "?")}
                >?</button
            >
            <button onclick={() => (object.question04.currentAnswer += "'")}
                >'</button
            >
            <button onclick={() => (object.question04.currentAnswer += '"')}
                >"</button
            >
            <button onclick={() => (object.question04.currentAnswer += "-")}
                >-</button
            >
            <button onclick={() => (object.question04.currentAnswer += "~")}
                >~</button
            >
        </div>

        <div class="buttons">
            <button
                onclick={() => (object.question04.currentAnswer = "")}
                class="negative"
            >
                Reset
            </button>

            <button
                onclick={() => {
                    object.question04.currentAnswer.trim().toLowerCase() ===
                    object.question04.correctAnswer
                        ? advance()
                        : restart();
                }}
                class="positive"
            >
                Check
            </button>
        </div>
    {/if}

    {#if scene === "question05"}
        <h2>Confirmation Question 5</h2>

        <h1>What is the name of the website?</h1>

        <div class="buttons">
            <button onclick={restart}>lanzooor.dev</button>
            <button onclick={advance}>lanzoor.dev</button>
            <button onclick={restart}>lanzor.dev</button>
            <button onclick={restart}>lanzar.dev</button>
        </div>
    {/if}

    {#if scene === "question06"}
        <h2>Confirmation Question 6</h2>

        <h1>What is the name of the website?</h1>

        <div class="buttons">
            <button onclick={restart}>lanzor.dev</button>
            <button onclick={restart}>lanzorr.dev</button>
            <button onclick={restart}>lanzar.dev</button>
            <button onclick={restart}>lanzir.dev</button>
            <button onclick={restart}>lanzer.dev</button>
            <button onclick={restart}>lanzal.dev</button>
            <button onclick={restart}>lanzol.dev</button>
            <button onclick={restart}>lanzul.dev</button>
            <button onclick={restart}>lanzur.dev</button>
            <button onclick={restart}>lanzel.dev</button>
            <button onclick={restart}>lanzoo.dev</button>
            <button onclick={restart}>lanzooo.dev</button>
            <button onclick={restart}>lanzooor.dev</button>
            <button onclick={restart}>lanzooor.dev</button>
            <button onclick={restart}>lannzoor.dev</button>
            <button onclick={restart}>lanzzoor.dev</button>
            <button onclick={restart}>laanzoor.dev</button>
            <button onclick={restart}>llanzoor.dev</button>
            <button onclick={restart}>lanzoorr.dev</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzor.dev</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzoor.dew</button>
            <button onclick={restart}>lanzoor.dav</button>
            <button onclick={restart}>lanzoor.dov</button>
            <button onclick={restart}>lanzoor.dve</button>
            <button onclick={restart}>lanzoor.ev</button>
            <button onclick={restart}>lanzoor.dv</button>
            <button onclick={restart}>lanzoor.dev.com</button>
            <button onclick={restart}>lanzoor.dev.net</button>
            <button onclick={restart}>lanzoor.dev.org</button>
            <button onclick={restart}>lanzoor.dev.io</button>
            <button onclick={restart}>lanzoor.com</button>
            <button onclick={restart}>lanzoor.net</button>
            <button onclick={restart}>lanzoor.org</button>
            <button onclick={restart}>lanzoor.io</button>
            <button onclick={restart}>lanzoor.xyz</button>
            <button onclick={restart}>manzoor.dev</button>
            <button onclick={restart}>maznoor.dev</button>
            <button onclick={restart}>mazoor.dev</button>
            <button onclick={restart}>lamzoor.dev</button>
            <button onclick={restart}>lamnoor.dev</button>
            <button onclick={restart}>laznoor.dev</button>
            <button onclick={restart}>lazoor.dev</button>
            <button onclick={restart}>lanzmoor.dev</button>
            <button onclick={restart}>lanzor.dev</button>
            <button onclick={restart}>lanzir.dev</button>
            <button onclick={restart}>lanzar.dev</button>
            <button onclick={restart}>lanzor.dev</button>
            <button onclick={restart}>lanzoor.de</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzoor.d3v</button>
            <button onclick={restart}>lanzoor.vdev</button>
            <button onclick={restart}>lanzoor.dev1</button>
            <button onclick={restart}>lanzoor.dev0</button>
            <button onclick={restart}>lanzoor-dev.dev</button>
            <button onclick={restart}>lanzoor_dev.dev</button>
            <button onclick={restart}>lanzoorweb.dev</button>
            <button onclick={restart}>lanzoor-site.dev</button>
            <button onclick={restart}>lanzoorwebsite.dev</button>
            <button onclick={restart}>Lanzoor.dev</button>
            <button onclick={restart}>LANZOOR.DEV</button>
            <button onclick={restart}>lAnZoOr.DeV</button>
            <button onclick={restart}>Lanzoor.DEV</button>
            <button onclick={restart}>lanzoor.DEV</button>
            <button onclick={restart}>LANzoor.dev</button>
            <button onclick={restart}>lanZoor.dev</button>
            <button onclick={restart}>lanzoOr.dev</button>
            <button onclick={restart}>lanzoor.Dev</button>
            <button onclick={restart}>lanzoor.dev.dev</button>
            <button onclick={restart}>lanzoor.dev.xyz</button>
            <button onclick={restart}>lanzoor.dev.com</button>
            <button onclick={restart}>lanzoor.dev.net</button>
            <button onclick={restart}>lanzoor.dev.org</button>
            <button onclick={restart}>lanzoor.dev.io</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzoor.dvv</button>
            <button onclick={restart}>lanzoor.dve</button>
            <button onclick={restart}>lanzoor.vev</button>
            <button onclick={advance}>lanzoor.dev</button>
            <button onclick={restart}>lanzoor.dev1</button>
            <button onclick={restart}>lanzoor.dev2</button>
            <button onclick={restart}>lanzoor.dev3</button>
            <button onclick={restart}>lanzooor.dev</button>
            <button onclick={restart}>lanzooooor.dev</button>
            <button onclick={restart}>lanzzoor.dev</button>
            <button onclick={restart}>llanzoor.dev</button>
            <button onclick={restart}>llanzooor.dev</button>
            <button onclick={restart}>lannzoor.dev</button>
            <button onclick={restart}>lannzoor.dev</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzoor.devv</button>
            <button onclick={restart}>lanzoor.dav</button>
            <button onclick={restart}>lanzoor.dov</button>
        </div>
    {/if}

    {#if scene === "question07"}
        <h2>Confirmation Question 7</h2>

        <h1>
            Which organization operates the registry for the TLD of this
            website?
        </h1>

        <p>
            Hint: the TLD of this website is <code>.dev</code>.
        </p>

        <div class="buttons">
            <button onclick={restart}>Verisign</button>
            <button onclick={restart}>Cloudflare Registry</button>
            <button onclick={restart}>Porkbun Registry</button>
            <button onclick={advance}>Google Registry</button>
            <button onclick={restart}>Amazon Registry Services</button>
        </div>
    {/if}

    {#if scene === "question08"}
        <h2>Confirmation Question 8</h2>

        <h1>Do you agree that the name of the website is lanzoor.dev?</h1>

        <div class="buttons">
            <button onclick={restart} lang="ko" class="unicode">아니요</button>
            <button onclick={restart} lang="en">No</button>
            <button onclick={restart} lang="id">tidak</button>
            <button onclick={restart} lang="hi" class="unicode">नहीं</button>
            <button onclick={advance} lang="ru" class="unicode">да</button>
            <button onclick={restart} lang="zh" class="unicode">不是</button>
            <button onclick={restart} lang="ja" class="unicode"
                >クソくらえ</button
            >
            <button onclick={restart} lang="tr">hayır</button>
        </div>
    {/if}

    {#if scene === "question09"}
        <h2>Confirmation Question 9</h2>

        <h1>Solve the question.</h1>

        <p>
            Let the constant <KaTeX content="n" /> represent the number of characters
            in the website's name. Determine the largest possible value of <KaTeX
                content="x"
            /> satisfying:
        </p>

        <KaTeX display={true} content="x^2 - (30n + 6)x = -n \times 493" />

        <input
            type="text"
            placeholder="xxx"
            bind:value={object.question09.currentAnswer}
        />

        <button
            onclick={() => {
                object.question09.currentAnswer.trim().toLowerCase() ===
                object.question09.correctAnswer
                    ? advance()
                    : restart();
            }}>Check</button
        >
    {/if}

    {#if scene === "question10"}
        <h2>Confirmation Question 10</h2>

        <h1>Solve the question.</h1>

        <p>
            Let <KaTeX content="n" /> be the number of characters in the website's
            name.
        </p>

        <p>
            Consider an electrically neutral atom whose number of protons is
            equal to
            <KaTeX content="n" />. Its mass number is <KaTeX content="23" />.
        </p>

        <p>
            The atom is subsequently ionized by removing <KaTeX content="2" />
            electrons. It then encounters another particle with <KaTeX
                content="1"
            />
            additional neutron and <KaTeX content="1" /> fewer electron than the original
            neutral atom.
        </p>

        <p>
            Using the information above, determine the total number of
            <b>neutrons</b> in the original atom plus the total number of
            <b>electrons</b> in the resulting ion.
        </p>

        <KaTeX
            display={true}
            content={"\\boxed{N_{\\mathrm{neutrons}}+N_{\\mathrm{electrons}}}"}
        />

        <input
            type="text"
            placeholder="xx"
            bind:value={object.question10.currentAnswer}
        />

        <button
            onclick={() => {
                if (
                    object.question10.currentAnswer.trim().toLowerCase() ===
                    object.question10.correctAnswer
                ) {
                    setCheckpoint("question11");
                    advance();
                } else {
                    restart();
                }
            }}>Check</button
        >
    {/if}

    {#if scene === "question11"}
        <p class="dim">
            Good job, you have reached a checkpoint! Only 40 more questions left
            to go!
        </p>

        <h2>Confirmation Question 11</h2>

        <h1>Are you sure you're playing on lanzoor.dev?</h1>

        <div class="buttons">
            <button onclick={advance}>Yes.</button>
            <button onclick={restart}>No.</button>
        </div>
    {/if}

    {#if scene === "question12"}
        <h2>Confirmation Question 12</h2>

        <h1>
            Do you understand that you must play this game on lanzoor.dev for
            the full experience?
        </h1>

        <div class="buttons">
            <button onclick={restart}>I don't understand.</button>
            <button onclick={advance}>I understand.</button>
            <button onclick={restart}>I ate a watermelon yesterday.</button>
        </div>
    {/if}

    {#if scene === "question13"}
        <h2>Confirmation Question 13</h2>

        <h1>Do you know the name of the website?</h1>

        <div class="buttons">
            <button onclick={advance}>I know.</button>
            <button onclick={restart}>I don't know.</button>
        </div>
    {/if}

    {#if scene === "question14"}
        <div class="jp enable-spacing" lang="jp">
            <h2>確認問題 第１４問</h2>

            <h1>このウェブサイトの名前を知っていますか？</h1>

            <div class="buttons">
                <button onclick={advance}>知っています。</button>
                <button onclick={restart}>知っていません。</button>
            </div>
        </div>
    {/if}

    {#if scene === "question15"}
        <div class="jp enable-spacing" lang="jp">
            <h2>確認問題 第１５問</h2>

            <h1>
                このゲームを完全に楽しむためには、lanzoor.devでプレイする必要があることを理解していますか？
            </h1>

            <div class="buttons">
                <button onclick={restart}>クソを食らってください。</button>
                <button onclick={restart}>理解しませんでした。</button>
                <button onclick={advance}>理解しました。</button>
            </div>
        </div>
    {/if}

    {#if scene === "question16"}
        <div class="jp enable-spacing" lang="jp">
            <h2>確認問題 第１６問</h2>

            <h1>このウェブサイトの名前はlanzoor.devですか？</h1>

            <div class="buttons">
                <button onclick={restart}>いいえ。</button>
                <button onclick={advance}>はい。</button>
                <button onclick={restart}>水とご飯ください。</button>
            </div>
        </div>
    {/if}

    {#if scene === "question17"}
        <div class="noto-sans enable-spacing" lang="el">
            <h2>Ερώτηση επιβεβαίωσης 17</h2>

            <h1>Είναι το όνομα της ιστοσελίδας lanzoor.dev;</h1>

            <div class="buttons">
                <button onclick={restart}>όχι</button>
                <button onclick={advance}>ναι</button>
            </div>
        </div>
    {/if}

    {#if scene === "question18"}
        <div class="noto-sans enable-spacing" lang="el">
            <h2>Ερώτηση επιβεβαίωσης 18</h2>

            <h1>
                Καταλαβαίνεις ότι πρέπει να παίξεις αυτό το παιχνίδι στο
                lanzoor.dev για την καλύτερη δυνατή εμπειρία;
            </h1>

            <div class="buttons">
                <button onclick={restart}>Άντε γαμήσου</button>
                <button onclick={advance}>Καταλαβαίνω</button>
                <button onclick={restart}>Δεν καταλαβαίνω</button>
            </div>
        </div>
    {/if}

    {#if scene === "question19"}
        <div class="noto-sans enable-spacing" lang="el">
            <h2>Ερώτηση επιβεβαίωσης 19</h2>

            <h1>Ξέρεις το όνομα αυτής της ιστοσελίδας;</h1>

            <div class="buttons">
                <button onclick={advance}>Ξέρω.</button>
                <button onclick={restart}>Μου αρέσει να τρώω καρπούζι.</button>
                <button onclick={restart}>Δεν ξέρω.</button>
            </div>
        </div>
    {/if}

    {#if scene === "question20"}
        <h2>Konf&imacr;rma-k&emacr;sta 20</h2>

        <h1>
            Da alenj&umacr;roca q&emacr;t der p&amacr;kel vel n&omacr;ma es
            lanzoor.dev ka?
        </h1>

        <div class="buttons">
            <button onclick={restart}>Ik nj&umacr;roca.</button>
            <button onclick={restart}>Ik ga nj&umacr;roca.</button>
            <button onclick={restart}>Ik w&imacr;le nj&umacr;roca.</button>
        </div>

        <div class="buttons">
            <button
                onclick={() => {
                    setCheckpoint("question21");
                    advance();
                }}>Ik alenj&umacr;roca.</button
            >
            <button onclick={restart}>Ik ga alenj&umacr;roca.</button>
            <button onclick={restart}>Ik w&imacr;le alenj&umacr;roca.</button>
        </div>
    {/if}

    {#if scene === "question21"}
        <p class="dim">
            Good job, you have reached yet another checkpoint! Only 30 more
            questions left to go!
        </p>

        <h2>Confirmation Question 21</h2>

        <h1>What is lanzoor.dev?</h1>

        <div class="buttons">
            <button onclick={restart}>A type of cheese.</button>
            <button onclick={restart}>A button.</button>
            <button onclick={restart}>An orchestra.</button>
            <button
                onclick={() => {
                    advance();
                }}>A website.</button
            >
            <button onclick={restart}>A company that produces cheese.</button>
            <button onclick={restart}>A language.</button>
            <button onclick={restart} class="negative"
                >Nothing. It doesn't exist.</button
            >
        </div>
    {/if}

    {#if scene === "question22"}
        <h2>Confirmation Question 22</h2>

        <h1>What is the name of the website?</h1>

        <div class="scroll">
            <div>a</div>
            <div>b</div>
            <div>c</div>
            <div>d</div>
            <div>e</div>
            <div>f</div>
            <div>g</div>
            <div>h</div>
            <div>i</div>
            <div>j</div>
            <div>k</div>
            <div>l</div>
            <div>m</div>
            <div>n</div>
            <div>o</div>
            <div>p</div>
            <div>q</div>
            <div>r</div>
            <div>s</div>
            <div>t</div>
            <div>u</div>
            <div>v</div>
            <div>w</div>
            <div>x</div>
            <div>y</div>
            <div>z</div>
        </div>
    {/if}
</section>

<style>
    .keyboard-grid {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        gap: 0.5em;
        max-width: 20em;
    }

    .keyboard-grid button {
        aspect-ratio: 1;
        font-size: 1.25em;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 2em;
        row-gap: 1em;
    }

    .buttons button {
        background: rgba(255, 255, 255, 0.25);
        color: white;
        padding: 0.5em;
        border-radius: 0.25em;
        border: 2px solid rgba(255, 255, 255, 0.5);
        transition: 200ms ease;
    }

    .buttons button:hover {
        background: rgba(255, 255, 255, 0.5);
    }

    .buttons button.negative {
        background: var(--dark-red);
        color: var(--bright-red);
        border: 2px solid var(--red);
    }

    .buttons button.negative:hover {
        background: var(--red);
        color: var(--dark-red);
    }

    .buttons button.positive {
        background: var(--dark-green);
        color: var(--bright-green);
        border: 2px solid var(--green);
    }

    .buttons button.positive:hover {
        background: var(--green);
        color: var(--dark-green);
    }
</style>
