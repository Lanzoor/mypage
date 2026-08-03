<section>
    <div class="breadcrumbs">
        <a href="/">Home</a>

        <div class="separator">›</div>

        <a href="/projects">Projects</a>

        <div class="separator">›</div>

        <a href="/projects/core">core</a>

        <div class="separator">›</div>

        <a href="/projects/core/changelog">Changelog</a>

        <div class="separator">›</div>

        <a href="/projects/core/changelog/conventions">Conventions</a>
    </div>

    <h1>Changelog Conventions</h1>

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
