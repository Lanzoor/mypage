<script lang="ts">
    import KaTeX from "$lib/components/Math/KaTeX.svelte";
    import Experimental from "$lib/components/Information/Experimental.svelte";
    import NotImplemented from "$lib/components/Information/NotImplemented.svelte";
    import Redirects from "$lib/components/Information/Redirects.svelte";
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
</script>

<section>
    <Breadcrumbs />

    <header>
        <h1>Consistent Illion Notation (CIN)</h1>

        <p>
            <b>The better and more consistent notation for big numbers.</b>
        </p>
    </header>

    <Redirects links={["/docs/math/googology/CIN/"]}></Redirects>

    <Experimental
        description="This page uses KaTeX-like syntax for math equations and expressions."
    />
</section>

<section>
    <h1>Introduction</h1>

    <p>
        Ever since I was a kid, I was a huge fan of idle games and large
        numbers. I also noticed the <b>Conway-Wechsler system</b>
        was used to describe large numbers. This used to fascinate me, since the names
        for large numbers sounded like a mythical artifact.
        <br /><br />
        However, as I grew up, I started noticing how messed up the Conway-Wechsler
        system is. One of the biggest issues for me is that
        <b>the Conway-Wechsler system uses phonological adjustments</b>, which
        means that prefixes can change their shape based on where it's attached
        to.
        <br /><br />
        <b
            >So, I'm very proud to present my own version & improvement of the
            Conway-Wechsler system.</b
        >
        Introducing... the <b>Consistent Illion Notation!</b>
        CIN for short.
    </p>

    <h2>What's the goal of CIN?</h2>

    <p>
        CIN is supposed to make illion index part of large numbers more
        straight-forward to understand, while also being phonologically
        consistent and easy to pronounce.
    </p>
</section>

<section>
    <h1>The Illion Index</h1>

    <p>
        <b
            >We start by converting the number into its illion index form and
            mantissa.</b
        >

        Given a number in scientific notation:

        <KaTeX content="m \times 10^e" display={true} />
    </p>

    <p>
        We can obtain the group index <KaTeX content="j" /> of this number with:
        <KaTeX
            content={`j = \\left\\lfloor \\frac{e}{3} \\right\\rfloor - 1`}
            display={true}
        />
    </p>

    <p>
        We can obtain the illion index <KaTeX content="i" /> of this number with:
    </p>

    <ul>
        <li>
            <KaTeX content={`i = j`} /> for Short Scale
        </li>
        <li>
            <KaTeX content={`i = \\left\\lceil \\frac{j}{2} \\right\\rceil`} /> for
            Long Scale
        </li>
    </ul>

    <p>
        We can determine the illion suffix <KaTeX content="s" /> (<code
            >-illion</code
        >?
        <code>-illiard</code>?) with:
    </p>

    <ul>
        <li>
            For Short Scale:
            <KaTeX content={`s = \\text{-illion}`} display={true} />
        </li>
        <li>
            For Long Scale:
            <ul>
                <li>
                    <KaTeX content={`s_{m} = j \\bmod 2`} />
                </li>
                <li>
                    <KaTeX content={`s = \\text{-illion if } s_{m} = 1`} />
                </li>
                <li>
                    <KaTeX content={`s = \\text{-illiard if } s_{m} = 0`} />
                </li>
            </ul>
        </li>
    </ul>

    <p>
        We can obtain the illion remainder <KaTeX content="i_r" /> for the mantissa
        with:

        <KaTeX content={`i_r = e \\bmod{3}`} display={true} />

        We can obtain the computed mantissa <KaTeX content="m_c" /> with:

        <KaTeX
            content={`
                m_c = m \\times 10^{i_r}`}
            display={true}
        />

        Assuming function <KaTeX content={`\\operatorname{p}(x)`} /> returns the formatted
        prefix of the x-th illion, the number would be expressed as:

        <KaTeX
            content={`
                m_{c} \\quad \\operatorname{p}(i) + s`}
            display={true}
        />
    </p>

    <p>
        CIN's goal is to help define and simplify the illion prefix for big
        numbers, hence the name.
        <b
            >You can use the steps below in order to convert the illion index
            into a CIN notation.</b
        >
    </p>

    <NotImplemented />

    <!-- <h1>The Rule of Three</h1>

    <p>
        <b>The Rule of Three</b> is a fundamental principle in CIN for reading and naming large
        illion numbers.

        <br />

        It states that
        <b
            >every three digits of the illion index are grouped together and assigned a specific
            name,</b
        >
        starting from the right.

        <br /><br />

        For example, suppose we have a number with the illion index \(123,456\). The groups of this
        number would be \(123\) and \(456\). Refer to the table below, which explains how groups are
        named.
    </p>

    <h2>Group Names</h2>

    <table>
        <thead>
            <tr>
                <th>Group Name</th>
                <th>Group Suffix</th>
                <th>Group Suffix Abbreviation</th>
                <th>Position</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Nillion Part</th>
                <td>(none)</td>
                <td>(none)</td>
                <td>The last group</td>
            </tr>
            <tr>
                <th>Millinillion Part</th>
                <td><code>milli-</code></td>
                <td><code>MI</code></td>
                <td>The second-to-last group</td>
            </tr>
            <tr>
                <th>Micrillion Part</th>
                <td><code>micri-</code></td>
                <td><code>MC</code></td>
                <td>The third-to-last group</td>
            </tr>
            <tr>
                <th>Nanillion Part</th>
                <td><code>nani-</code></td>
                <td><code>NA</code></td>
                <td>The fourth-to-last group</td>
            </tr>
            <tr>
                <th>Picillion Part</th>
                <td><code>pici-</code></td>
                <td><code>PC</code></td>
                <td>The fifth-to-last group</td>
            </tr>
            <tr>
                <th>Femtillion Part</th>
                <td><code>femti-</code></td>
                <td><code>FM</code></td>
                <td>The sixth-to-last group</td>
            </tr>
            <tr>
                <th>Attillion Part</th>
                <td><code>atti-</code></td>
                <td><code>AT</code></td>
                <td>The seventh-to-last group</td>
            </tr>
            <tr>
                <th>Zeptillion Part</th>
                <td><code>zepti-</code></td>
                <td><code>ZP</code></td>
                <td>The eighth-to-last group</td>
            </tr>
            <tr>
                <th>Yoctillion Part</th>
                <td><code>yocti-</code></td>
                <td><code>YC</code></td>
                <td>The ninth-to-last group</td>
            </tr>
            <tr>
                <th>Rontillion Part</th>
                <td><code>ronti-</code></td>
                <td><code>RN</code></td>
                <td>The tenth-to-last group</td>
            </tr>
            <tr>
                <th>Quectillion Part</th>
                <td><code>quecti-</code></td>
                <td><code>QU</code></td>
                <td>The eleventh-to-last group</td>
            </tr>
        </tbody>
    </table>

    <h2>Examples</h2>

    <p>The number that has the illion index \(123,456\) would be broken down into:</p>

    <ul>
        <li>
            <b>nillion part</b> - \(456\)
        </li>
        <li>
            <b>millinillion part</b> - \(123\)
        </li>
    </ul>

    <p>The number that has the illion index \(12,340,567\) would be broken down into:</p>

    <ul>
        <li>
            <b>nillion part</b> - \(567\)
        </li>
        <li>
            <b>millinillion part</b> - \(340\)
        </li>
        <li>
            <b>micrillion part</b> - \(12\)
        </li>
    </ul> -->
</section>
