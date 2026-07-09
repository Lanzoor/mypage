<script lang="ts">
    let visible = $state(false);
    let searchValue = $state('');
    let searchDescription = $state('Search for a version!');

    const versionIds = [
        'v26-25-2147483648',
        'v26-24-2147483647',
        'v26-24-0',
        'v26-23-9',
        'v26-23-8',
        'v26-23-7',
        'v26-23-6',
        'v26-23-5',
        'v26-23-4',
        'v26-23-3',
    ];

    function toggleVisibility(force?: boolean) {
        visible = force ?? !visible;
    }

    function handleSearch() {
        let version = searchValue.trim().toLowerCase();

        if (!version.startsWith('v')) {
            version = 'v' + version;
        }

        if (!/^v?\d+(\.\d+)*$/i.test(version)) {
            searchDescription = 'Invalid version format! Please try again.';
            return;
        }

        const targetId = version.replaceAll('.', '-');

        if (!versionIds.includes(targetId)) {
            searchDescription = "Sorry, we couldn't find that version!";
            return;
        }

        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        history.replaceState(null, '', `#${targetId}`);

        searchDescription = `Successfully found version ${version}!`;

        setTimeout(() => {
            visible = false;
        }, 750);
    }
</script>

<svelte:head>
    <title>core Changelog | lanzoor.dev</title>
</svelte:head>

<section>
    <span class="breadcrumbs">
        <a href="/">Home</a>

        <span class="separator">›</span>

        <a href="/projects">Projects</a>

        <span class="separator">›</span>

        <a href="/projects/core">Core</a>

        <span class="separator">›</span>

        <a href="/projects/core/changelog">Changelog</a>
    </span>

    <h1>Changelog</h1>

    <p>
        This page contains a list of all changes and updates made to the website.
        <b>You can use the search bar below to search for a version!</b>
    </p>

    <blockquote class="warning">
        <b class="col bright yellow">Not all changes warrant a new changelog!</b>
        When a change is very small and/or urgent, it may not show up here.
    </blockquote>
</section>

<section id="v26-25-2147483648">
    <h2>Minor update v26.25.2147483648</h2>

    <p class="dim">
        Release date: <b>July 9th, 2026</b>
    </p>

    <p>
        This is the pre-release version of the Svelte port, since I had to make a few important
        posts, as well as a few changes.
    </p>
</section>

<section id="v26-24-2147483647">
    <h2>Minor update v26.24.2147483647</h2>

    <p class="dim">
        Release date: <b>June 28th, 2026</b>
    </p>

    <p>
        <b> This is probably going to be the last update I publish for a while, hence the name. </b>
        For more information, please check
        <a href="/docs/blog/2026/06/monthly-recap.html#svelte"> the monthly recap for June </a>.
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added several topic branches within <code>/docs</code>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the style of monthly recap pages.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the style of the navigation panel.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed some unnecessary pages.
        </li>
        <li>
            <span class="col bright red">-</span><span class="col bright blue">p</span>
            Removed analytics.
        </li>
    </ul>
</section>

<section id="v26-24-0">
    <h1>v26.24.0: The Navigation Overhaul</h1>

    <p class="dim">
        Release date: <b>June 19th, 2026</b>
    </p>

    <p>
        <b>The long-awaited navigation UI/UX overhaul is finally here!</b><br /><br />

        I hesitated quite a bit before publishing this update, but who knows what will happen?
        Anyways, this major update includes several improvements to the navigation experience across
        the website.<br /><br />

        <b>
            As always, please feel free to <a href="#connections">get in touch</a>!
        </b>
        We'd love to hear your feedback. Have a nice day!
    </p>

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            <b>Completely reworked the design of the navigation panels.</b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Massively simplified and improved the design of the footer and its connections.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the design of <code>hr</code> elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the design of breadcrumbs navigation.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Renamed some unintuitive internal names.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the <a href="/credits/assets/">asset credits page</a>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the asset structure.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved the validation logic of the search feature in the changelog page.
        </li>
    </ul>
</section>

<section id="v26-23-9">
    <h2>Minor update v26.23.9</h2>

    <p class="dim">
        Release date: <b>June 16th, 2026</b>
    </p>

    <p>
        <b>We're officially getting ready for the navigation UI/UX overhaul!</b>
    </p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where the analytics panel would pop up in the privacy policy page even after
            seeing it.
        </li>

        <li>
            <span class="col bright green">+</span>
            <b>Added breadcrumbs navigation to most major pages.</b> This would allow for easier navigation
            and clarity.
        </li>

        <li>
            <span class="col bright green">+</span>
            Added a search feature to the changelog page.
        </li>

        <li>
            <span class="col bright green">+</span>
            Implemented a basic <a href="/about">about</a> page.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the structure of some pages on mobile devices.
        </li>
    </ul>
</section>

<section id="v26-23-8">
    <h2>Minor update v26.23.8</h2>

    <p class="dim">
        Release date: <b>June 15th, 2026</b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added Japanese font support.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Reworked the entirety of <a href="/credits/contributors/">the contributors page</a>, and
            implemented a better convention for contributor roles.
        </li>
    </ul>
</section>

<section id="v26-23-7">
    <h2>Minor update v26.23.7</h2>

    <p class="dim">
        Release date: <b>June 14th, 2026</b>
    </p>

    <p>A bit of an internal update today.</p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where the privacy policy link within the analytics panel would take you to
            the 404 page.
        </li>

        <li>
            <span class="col bright purple">ƒ</span>
            Fixed a logic issue within the analytics panel, where the panel would still show up on mobile
            devices in the privacy policy page.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            <b>
                Reworked the current font size convention to use <code>em</code> units instead of
                <code>px</code>.
            </b>
            This would allow responsive layouts to be easier to implement, and also improve readability
            on mobile devices.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the design of the analytics panel, in order to make it friendly for devices with
            a significantly short width.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Renamed the frontpage stylesheet from <code>styles.css</code> to
            <code>welcome.css</code> in order to match the new conventions.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved phrasing of some paragraphs within certain sections of the website.
        </li>
    </ul>
</section>

<section id="v26-23-6">
    <h2>Minor update v26.23.6</h2>

    <p class="dim">
        Release date: <b>June 13th, 2026</b>
    </p>

    <p>Small update today.</p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where the frozen state wouldn't get removed after the analytics panel is hidden.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            <b>Completely overhauled the margin system.</b>
            Please do note that the pages within
            <code>/troubleshooting</code> hasn't been updated along yet.
            <i>We will work on this soon.</i>
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the structure within changelogs.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved analytics toggle logic.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Unified <code>&lt;meta&gt;</code> tag usage across pages.
        </li>
    </ul>
</section>

<section id="v26-23-5">
    <h2>Minor update v26.23.5</h2>

    <p class="dim">
        Release date: <b>June 12th, 2026</b>
    </p>

    <p>
        <b>This update is part of the navigation UI/UX overhaul.</b>
        We do not have an ETA for the actual overhaul yet, but it will take place sometime in June.
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added a <code>.frozen</code> attribute to the <code>main</code> element, so some panels can
            disable user interaction with the main content when necessary.
        </li>

        <li>
            <span class="col bright green">+</span>
            Added a link to the <code>core-api</code> project's changelog within
            <a href="/projects"> the projects page </a>.
        </li>

        <li>
            <span class="col bright green">+</span>
            Added a completely alternate layout to the warning panel for mobile devices.
        </li>

        <li>
            <span class="col bright green">+</span>
            Implemented a redirect from <code>/projects/core-api/changelog/:path*</code> to
            <code>https://api.lanzoor.dev/docs/changelog/:path*</code> to match the projects convention.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Improved the color pallete of the warning panel.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Updated <a href="/privacy-policy">the privacy policy</a>
            to <code>v2.3</code> in order to match so it matches the new changes.
        </li>

        <li>
            <span class="col bright yellow">~</span>
            Updated the logic of the script loaded by
            <a href="/privacy-policy">the privacy policy</a>
            to hide the panel when you make a choice via the button.
        </li>
    </ul>
</section>

<section id="v26-23-4">
    <h2>Minor update v26.23.4</h2>

    <p class="dim">
        Release date: <b>June 10th, 2026</b>
    </p>

    <ul>
        <li>
            <span class="col bright yellow">~</span>
            Fixed some in-site links using the <code>_blank</code> attribute in
            <a href="/projects"> the projects page </a>.
        </li>
        <li>
            <span class="col bright yellow">~</span><span class="col bright blue">p</span>
            Altered the color scheme of codeblocks.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed the annoying margin for <code>code</code> and <code>kbd</code> elements.
        </li>
    </ul>
</section>

<section id="v26-23-3">
    <h2>Minor update v26.23.3</h2>

    <p class="dim">
        Release date: <b>June 9th, 2026</b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added a link to
            <a href="https://status.lanzoor.dev"> core-status </a>
            within
            <a href="/projects"> the projects page </a>.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added a changelog page at
            <a href="/projects/core/changelog"> /projects/core/changelog </a>, which is exactly what
            you're looking at right now!
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>Improved top panel link hover animations.</b>
            Implemented a better color pallete and a more noticable text shadow.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                The <a href="/legacy/anti-JPA">anti-JPA project</a> has been moved to the legacy category.
            </b>
            This project will be archived for a while, and will be deleted eventually.
        </li>
        <li>
            <span class="col bright yellow">~</span><span class="col bright blue">p</span>
            Changed the position of the left panel to the right.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed the outdated status page at
            <code>/troubleshooting/status.html</code>, in favor of the new work-in-progress one.
        </li>
    </ul>
</section>

<section id="legend">
    <h1>Legend</h1>

    <h2>Naming Conventions for Changes</h2>

    <h3>Change Writing Conventions</h3>

    <p>
        Changes are written in <b>the past tense</b> rather than the imperative mood commonly used in
        Git commits. This improves readability for visitors who are not familiar with development workflows.
    </p>

    <p>
        Each change entry ends with a period (<code>.</code>).
    </p>

    <h3>Change Order</h3>

    <p>Changes are generally ordered from the most significant to the least significant.</p>

    <h2>Change Prefixes</h2>

    <p>Every change is prefixed with a symbol indicating what happened.</p>

    <ul>
        <li>
            <b>A purple f</b>
            (<span class="col bright purple">ƒ</span>) indicates that an issue has been fixed.
        </li>

        <li>
            <b>A green plus sign</b>
            (<span class="col bright green">+</span>) indicates that something has been added.
        </li>

        <li>
            <b>A yellow tilde</b>
            (<span class="col bright yellow">~</span>) indicates that something has been changed or
            improved.
        </li>

        <li>
            <b>A red minus sign</b>
            (<span class="col bright red">-</span>) indicates that something has been removed.
        </li>

        <li>
            In some cases, a blue
            <span class="col bright blue">p</span>
            may appear after the symbol. This means the change is provisional and may be reverted in the
            future.
        </li>
    </ul>

    <blockquote class="warning">
        <b class="col bright yellow">
            Please note that change prefixes are only intended as a quick summary of a change.
        </b>
        They are subjective and may not fully describe everything included in an update.
        <b
            >For example, an entry marked with a plus sign may also contain modifications to
            existing features.</b
        >
    </blockquote>
</section>

<div id="search-overlay" class:visible>
    <p id="search-description">{searchDescription}</p>

    <div id="search-options">
        <input
            bind:value={searchValue}
            id="search-bar"
            placeholder="Enter a version (e.g. v26.1.0)"
            onkeydown={(e) => e.key === 'Enter' && handleSearch()}
        />

        <button id="search-button" onclick={handleSearch}> Search </button>
    </div>
</div>

<button id="search-toggle" onclick={() => toggleVisibility()}> 🔍 </button>

<style lang="css">
    :root {
        --search-overlay-bg: radial-gradient(
            circle at bottom,
            rgba(0, 0, 0, 0.75),
            transparent 75%
        );
    }

    section {
        padding-left: 20%;
        padding-right: 20%;
    }

    #search-toggle {
        background: #8156ff;
        position: fixed;

        left: 1em;
        bottom: 1em;

        padding: 0.5em;
        border-radius: 2147483647px;
        border: none;
        font-size: 1em;

        transition: 0.5s ease;

        z-index: 1000;
    }

    #search-toggle:hover {
        background: #a689ff;
        box-shadow: 0 0 10px #8156ff;
        cursor: pointer;
    }

    #search-overlay {
        opacity: 0;
        pointer-events: none;
        transform: translateY(50%);

        position: fixed;
        inset: 0;

        padding: 2em 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 1em;

        background: var(--search-overlay-bg);
        z-index: 999;

        transition:
            opacity 0.5s ease,
            transform 0.5s ease;
    }

    #search-overlay.visible {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    #search-description {
        font-size: 0.75em;
        letter-spacing: 0.1em;
    }

    #search-options {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #search-bar {
        font-family: 'JetBrains Mono';

        padding: 0.5em;
        border: 1px solid #7155ff;
        background-color: #1e1e1e;
        box-shadow: 0 0 20px rgba(84, 25, 153, 0.6);
        color: white;
        font-size: 1em;
        transition: 0.2s ease;
        width: min(600px, 80vw);
    }

    #search-bar::placeholder {
        color: #888;
    }

    #search-bar:focus {
        outline: none;
        border-color: #825dff;
    }

    #search-button {
        font-family: 'JetBrains Mono';

        background: #7155ff;
        border: none;
        color: white;

        padding: 0 10px;

        transition: 0.5s ease;
    }

    #search-button:hover {
        background: #aa91ff;
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        :root {
            --search-overlay-bg: radial-gradient(circle at bottom, rgb(0, 0, 0), transparent 75%);
        }
    }
</style>
