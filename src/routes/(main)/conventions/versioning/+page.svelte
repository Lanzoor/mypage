<script>
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
</script>

<section>
    <Breadcrumbs />

    <h1>Versioning Conventions</h1>

    <p>
        Most of our projects follow the versioning conventions described below.
    </p>

    <ol>
        <li>
            <p>
                <b>Versions usually use the <code>v</code> prefix.</b>
            </p>

            <p>
                The <code>v</code> prefix is primarily a stylistic convention, but
                it helps distinguish version strings from other numerical or textual
                values.
            </p>
        </li>

        <li>
            <p>
                <b
                    >The first group represents the year in which the version
                    was released.</b
                >
            </p>

            <p>
                The first group consists of the last two digits of the year in
                which the version was released.
            </p>

            <p>
                For example, a version released in 2026 would begin with
                <code>v26</code>. Therefore, a version such as
                <code>v26.xx.xx</code> indicates that the version was released in
                2026.
            </p>
        </li>

        <li>
            <p>
                <b>The second group represents the release number.</b>
            </p>

            <p>
                A release represents a significant version of a project. The
                second group indicates the sequential number of the release
                within the given year.
            </p>

            <p>
                For example, <code>v27.12.xx</code> indicates the twelfth release
                made in 2027.
            </p>
        </li>

        <li>
            <p>
                <b>The third group represents the subrelease number.</b>
            </p>

            <p>
                A subrelease represents a smaller update to an existing release.
                Subreleases are generally used for changes that do not warrant a
                new release number.
            </p>

            <p>
                For example, <code>v27.12.3</code> indicates the third subrelease
                of the twelfth release made in 2027.
            </p>
        </li>

        <li>
            <p>
                <b
                    >An optional fourth group, marked with the hyphen (<code
                        >-</code
                    >) prefix, refers to a minor change.</b
                >
            </p>

            <p>
                The optional suffix is used when a change is minor or does not
                warrant a separate subrelease number.
            </p>

            <p>
                For example, <code>v27.12.3-2</code> indicates the second minor change
                of the third subrelease of the twelfth release made in 2027.
            </p>
        </li>
    </ol>

    <h2>Rules</h2>

    <ol>
        <li>
            <p>
                <b>
                    The year indicated by the version string is, as well as the
                    release dates within the changelogs, are determined by the
                    release date, <i>not the date when the changes were made.</i
                    >
                </b>
            </p>

            <p>
                The version's year is based on when the version is released to
                the public or otherwise published, rather than when the changes
                were originally made.
            </p>

            <p>
                For example, if a change was made locally on December 31st,
                2026, but the resulting version was released or pushed to GitHub
                on January 1st, 2027, the version would use the <code>v27</code> prefix.
            </p>
        </li>

        <li>
            <p>
                <b>The release and subrelease numbers start from 0.</b>
            </p>

            <p>
                A first version of a project created in 2027 would be <code
                    >v27.0.0</code
                >, <i>NOT</i> <code>v27.0.1</code> or <code>v27.1.0</code>.
            </p>
        </li>

        <li>
            <p>
                <b>The subrelease number resets when a new release is made.</b>
            </p>

            <p>
                When the release number is incremented, the subrelease number is
                reset to <code>0</code>.
            </p>

            <p>
                For example:
                <code>v27.12.3</code> -> <code>v27.13.0</code>
            </p>

            <p>
                This indicates that the project has entered its thirteenth
                release of 2027.
            </p>
        </li>

        <li>
            <p>
                <b
                    >Release and subrelease numbers reset when a new year
                    begins.</b
                >
            </p>

            <p>
                When a project enters a new year, the release number and
                subrelease number are reset.
            </p>

            <p>
                For example:
                <code>v27.12.3</code> -> <code>v28.0.0</code>
            </p>

            <p>
                This indicates that the project has entered its first release of
                2028.
            </p>
        </li>
    </ol>
</section>
