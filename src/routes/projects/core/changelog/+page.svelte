<script lang="ts">
    import External from '$lib/components/Links/External.svelte';
    import ChangelogSearch from '$lib/components/Overlays/ChangelogSearch.svelte';
    import { changelogSearchOverlay } from '$lib/overlays.svelte';
</script>

<svelte:head>
    <title>Changelog | core</title>
</svelte:head>

<section>
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/projects">Projects</a>

        <div class="separator">›</div>

        <a href="/projects/core">core</a>

        <div class="separator">›</div>

        <a href="/projects/core/changelog">Changelog</a>
    </div>

    <h1>Changelog</h1>

    <p>
        This page contains a list of all changes and updates made to the website.
        <b>You can use the search bar below to search for a version!</b>
    </p>

    <blockquote class="warning">
        <b class="col bright yellow">Not all changes warrant a new changelog!</b><br />
        If a change is very small and/or urgent, or was not assigned a version tag, it may not show up
        here.
    </blockquote>
</section>

<section id="v26-27-2">
    <h1>Minor update v26.27.2</h1>

    <p class="dim">
        Release date: <b>August 2nd, 2026</b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            <b>Implemented a new system that handles redirects.</b>
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved style definitions for <code>External</code> link elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated information within the <a href="/about">about</a> page.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved design of the navigation panel.
        </li>
    </ul>
</section>

<section id="v26-27-1">
    <h1>Minor update v26.27.1</h1>

    <p class="dim">
        Release date: <b>August 1st, 2026</b>
    </p>

    <ul>
        <li>
            <span class="col bright purple">ƒ</span>
            Fixed an issue where some links would take you to the 404 page.
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>Added the Quick Links section in the <a href="/">frontpage</a>.</b>
        </li>
        <li>
            <span class="col bright green">+</span>
            Added showcase pages to some projects.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Moved the <a href="/conlangs">conlangs</a> section from <code>/projects/conlangs</code>
            to
            <code>/conlangs</code>.<br />
            <b
                >A redirect from <code>/projects/conlangs</code> to
                <code>/conlangs</code> has been implemented for compatibility purposes.</b
            >
        </li>
    </ul>
</section>

<section id="v26-27-0">
    <h1>v26.27.0: Overly Overhauled Overlays</h1>

    <p class="dim">
        Release date: <b>July 29th, 2026</b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span><span class="col bright yellow">~</span>
            <b>
                Added a proper overlays system and migrated all existing overlays to the new system.
            </b><br />
            The new overlays system supports toggle keybindings, interaction and rendering priorities,
            and escape handlers for all components.<br />
            This makes managing existing overlays and creating new ones much easier.
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>Implemented the navigation panel.</b>
            Only the true OGs remember its first design.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added a link to
            <External href="https://www.lanzoor.xyz">core-xyz</External>
            within the <a href="/projects">projects</a> page.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added section numbering for legal documents.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added back several legacy pages, including
            <a href="/legacy/profile-old">the old profile</a>.
        </li>
        <li>
            <span class="col bright green">+</span><span class="col bright orange">i</span>
            <b>Added the <code>External</code> component, and its appropriate styles.</b><br />
            This component is used when referencing external links.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            <b>
                Changed the Terms Of Service URL from <code>/tos</code> to
                <code>/terms-of-service</code>, and added a redirect from <code>/tos</code> to
                <code>/terms-of-service</code>.
            </b><br />
            The shorthand URL <code>/tos</code> can still be used when referring to the Terms Of Service.
            In fact, all in-site links already use it.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Completely overhauled the <a href="/projects">projects page</a>.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved compatibility with devices with smaller screen widths.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved accessibility by adding ARIA roles and reworking interactive elements where possible.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved and expanded the color palette.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed irrelevant styles from the <a href="/">front page</a>.
        </li>
    </ul>
</section>

<section id="v26-26-0">
    <h2>v26.26.0: The Legal Update</h2>

    <p class="dim">
        Release date: <b>July 24th, 2026</b>
    </p>

    <p>
        <b>Here's a surprise update! You definitely weren't expecting this, right?</b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            <b>Added the <a href="/tos">Terms of Service</a> page.</b>
        </li>
        <li>
            <span class="col bright green">+</span>
            <b>
                Added a notice panel that notifies you whether the Legal Information changes, or you
                first visit the website.
            </b>
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the ability to exit the search screen within the
            <a href="/projects/core/changelog/">changelogs</a> by pressing the
            <kbd>Escape</kbd> key.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added <a href="/conlangs/">conlangs</a> as a collection within the
            <a href="/projects">projects page</a>.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the internal change marker (<span class="col bright orange">i</span>) for
            changelog entries.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added new navigation entries to the footer panel.
        </li>
        <li>
            <span class="col bright green">+</span><span class="col bright orange">i</span>
            <b>Added automatic cleanup of outdated localStorage data.</b><br />
            Previously stored keys that are no longer used may now be automatically removed.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved style definitions for <code>{'<kbd>'}</code>, <code>{'<ul>'}</code>,
            <code>{'<ol>'}</code>, as well as some block elements.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Improved color palette.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Updated <a href="/about">/about</a> to match the new changes.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Changed layout of the footer panel.
        </li>
        <li>
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
            Renamed long selector identifiers.
        </li>
        <li>
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
            Split <code>app.css</code> into even more stylesheets.
        </li>
        <li>
            <span class="col bright red">-</span>
            <b>Completely removed intentional data collection. Period.</b>
        </li>
        <li>
            <span class="col bright red">-</span>
            Completely removed the analytics notice panel, in favor of the new one.
        </li>
        <li>
            <span class="col bright red">-</span>
            Added clear visuals in the Privacy Policy page to indicate that data collection has been temporarily
            disabled.
        </li>
    </ul>
</section>

<section id="v26-25-0">
    <h1>v26.25.0: The Svelte Migration</h1>

    <p class="dim">
        Release date: <b>July 15th, 2026</b>
    </p>

    <p>
        <b>The Svelte migration process has been fully completed!</b><br />
        We have migrated every page <span class="dim">(excluding deletions)</span> and feature to the
        new version. Although the process was tedious, the migration was definitely worth it.
    </p>

    <p>
        <b>
            Anyways, we've decided to make a few changes here and there. We hope you like it! Thanks
            as always.
        </b>
    </p>

    <ul>
        <li>
            <span class="col bright green">+</span>
            Added selection styles by the <code>::selection</code> pseudo-element.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <a href="/tools/">tools</a> project collection.
        </li>
        <li>
            <span class="col bright green">+</span>
            Added the <a href="/tools/">tools</a> as a collection within the
            <a href="/projects">projects page</a>.
        </li>
        <li>
            <span class="col bright green">+</span>
            Migrated the <a href="/credits/assets">asset credits</a> page.
        </li>
        <li>
            <span class="col bright yellow">+</span><span class="col bright orange">i</span>
            Added proper <code>robots.txt</code> definitions and restrictions.
        </li>
        <li>
            <span class="col bright yellow">~</span>
            Reworked the design of the <a href="/projects">projects page</a>.
        </li>
        <li>
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
            Added <code>rel="noopener noreferrer"</code> attributes to external links.
        </li>
        <li>
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
            Split global styles into multiple stylesheet documents.
        </li>
        <li>
            <span class="col bright red">-</span>
            Removed some unnecessary and now irrelevant information.
        </li>
    </ul>
</section>

<section id="v26-25-2147483648">
    <h2>Minor update v26.25.2147483648</h2>

    <p class="dim">
        Release date: <b>July 9th, 2026</b>
    </p>

    <p>
        <b>This is the pre-release version of the Svelte port.</b><br />
        Although the Svelte port is not complete, we decided to release this version earlier since we
        had to make a few important posts, as well as a few changes.
    </p>

    <p class="dim">
        <i> Changelog unavailable. </i>
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
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
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
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
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
            <span class="col bright yellow">~</span><span class="col bright orange">i</span>
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
            Added a completely alternate layout for the warning panel for mobile devices.
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
                Moved the <a href="/legacy/anti-JPA">anti-JPA project</a> to the legacy category.
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

        <li>
            In some cases, a orange
            <span class="col bright orange">i</span> may appear after the symbol. This means the change
            is internal and does not affect the user experience.
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

<button id="search-toggle" onclick={() => (changelogSearchOverlay.open = true)}> 🔍 </button>

<ChangelogSearch />

<style lang="css">
    :root {
        --search-overlay-bg: radial-gradient(
            circle at bottom,
            rgba(0, 0, 0, 0.75),
            transparent 75%
        );
    }

    section {
        padding: 2em 6em;
    }

    @media (max-width: 768px) {
        section {
            padding: 2em;
        }
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
</style>
