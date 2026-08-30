<script lang="ts">
    import KaTeX from "$lib/components/Math/KaTeX.svelte";
    import Breadcrumbs from "$lib/components/Navigation/Breadcrumbs.svelte";
    import { Decimal } from "decimal.js";

    type LargeNumber = {
        mantissa: Decimal;
        exponent: bigint;
    };

    let input = $state("0");

    let value = $derived(parseByNumber(input));
    let illionIndex = $derived(getIllionIndex(value));

    function parseByNumber(input: string): LargeNumber {
        input = input
            .toLowerCase()
            .trim()
            .replace(/[^0-9e.]/g, "");

        if (!input) {
            return {
                mantissa: new Decimal(0),
                exponent: 0n,
            };
        }

        try {
            return parseScientific(input);
        } catch {
            return {
                mantissa: new Decimal(0),
                exponent: 0n,
            };
        }
    }

    function parseScientific(input: string): LargeNumber {
        const eIndex = input.search(/[e]/);

        if (eIndex === -1) {
            return normalizeHugeNumber({
                mantissa: new Decimal(input),
                exponent: 0n,
            });
        }

        const mantissaPart = input.slice(0, eIndex);
        const exponentPart = input.slice(eIndex + 1);

        const mantissa =
            mantissaPart === "" ? new Decimal(1) : new Decimal(mantissaPart);

        const exponent = parseExponent(exponentPart);

        return normalizeHugeNumber({
            mantissa,
            exponent,
        });
    }

    function parseExponent(input: string): bigint {
        input = input.trim();

        if (!input) {
            throw new Error("Missing exponent");
        }

        const eIndex = input.search(/[eE]/);

        if (eIndex === -1) {
            if (!/^[+-]?\d+$/.test(input)) {
                throw new Error(`Invalid exponent: ${input}`);
            }

            return BigInt(input);
        }

        const basePart = input.slice(0, eIndex);
        const exponentPart = input.slice(eIndex + 1);

        const base = basePart === "" ? 1n : BigInt(basePart);

        const exponent = parseExponent(exponentPart);

        if (exponent < 0n) {
            throw new Error("Negative nested exponents are not supported");
        }

        return base * 10n ** exponent;
    }

    function normalizeHugeNumber(value: LargeNumber): LargeNumber {
        if (value.mantissa.isZero()) {
            return {
                mantissa: new Decimal(0),
                exponent: 0n,
            };
        }

        const decimalExponent = BigInt(value.mantissa.e);

        return {
            mantissa: value.mantissa.div(
                new Decimal(10).pow(Number(decimalExponent)),
            ),
            exponent: value.exponent + decimalExponent,
        };
    }

    function getIllionIndex(value: LargeNumber): bigint {
        if (value.mantissa.isZero()) {
            return -1n;
        }

        const illionIndex = floorDiv(value.exponent, 3n) - 1n;

        return illionIndex;
    }

    function representNumber(value: LargeNumber): string {
        return `${computedMantissa(value)} ${sliceNumber(illionIndex).join(",")}-illion${illionIndex === 1n ? "" : "s"}`;
    }

    const Notations = {
        scientific(value: LargeNumber): string {
            return `${value.mantissa} × 10<sup>${value.exponent.toString()}`;
        },

        engineering(value: LargeNumber): string {
            if (value.mantissa.isZero()) {
                return "0 × 10<sup>0</sup>";
            }

            const exponent = value.exponent;

            const engineeringExponent = floorDiv(exponent, 3n) * 3n;

            const shift = exponent - engineeringExponent;

            const mantissa = value.mantissa.mul(
                new Decimal(10).pow(Number(shift)),
            );

            return `${mantissa.toString()} × 10<sup>${engineeringExponent}</sup>`;
        },

        e(value: LargeNumber): string {
            return `${value.mantissa}e${value.exponent.toString()}`;
        },

        conway(value: LargeNumber, style: "traditional" | "community"): string {
            const THOUSANDS = [
                "MI",
                "MC",
                "NA",
                "PC",
                "FM",
                "AT",
                "ZP",
                "YC",
                "RN",
                "QU",
            ];
            const HUNDREDS = [
                "Ce",
                "Dn",
                "Tc",
                "Qe",
                "Qu",
                "Sc",
                "Si",
                "Oe",
                "Ne",
            ];
            const TENS = ["Dc", "Vg", "Tg", "Qd", "Qi", "Se", "St", "Og", "Nn"];
            const ONES = ["U", "D", "T", "Qa", "Qt", "Sx", "Sp", "O", "N"];

            if (value.exponent < 3n) {
                return value.mantissa.toString();
            }

            if (value.exponent < 6n) {
                return `${computedMantissa(value)} k`;
            }

            const INITIAL_ONES = [
                "M",
                "B",
                "T",
                "Qa",
                "Qt",
                "Sx",
                "Sp",
                "Oc",
                "No",
            ];
            const illionIndex = getIllionIndex(value);

            if (illionIndex >= 1n && illionIndex <= 9n) {
                return `${computedMantissa(value)} ${INITIAL_ONES[Number(illionIndex) - 1]}`;
            }

            const groups = sliceNumber(illionIndex);
            const results: string[] = [];

            for (let i = 0; i < groups.length; i++) {
                const digits = groups[i].padStart(3, "0");
                const groupValue = Number(digits);
                if (groupValue === 0) {
                    if (style === "community") {
                        continue;
                    }

                    results.push("N");
                }

                const ones = Number(digits[2]);
                const tens = Number(digits[1]);
                const hundreds = Number(digits[0]);
                const thousandsLevel = groups.length - i - 1;

                let root = "";
                if (ones > 0) root += ONES[ones - 1];
                if (tens > 0) root += TENS[tens - 1];
                if (hundreds > 0) root += HUNDREDS[hundreds - 1];

                if (
                    style === "community" &&
                    thousandsLevel > 0 &&
                    thousandsLevel <= THOUSANDS.length
                ) {
                    root += THOUSANDS[thousandsLevel - 1];
                }

                if (
                    root.startsWith("U") &&
                    THOUSANDS.some((t) => root.endsWith(t))
                ) {
                    root = root.slice(1);
                }

                if (root) results.push(root);
            }

            return `${computedMantissa(value)} ${results.join("-")}`;
        },

        letters(value: LargeNumber) {
            const illionIndex = getIllionIndex(value) + 1n;

            let result = "";

            if (illionIndex >= 1n) {
                let index = illionIndex;

                while (index > 0n) {
                    index--;

                    const remainder = index % 26n;
                    result =
                        String.fromCharCode(Number(remainder) + 97) + result;

                    index /= 26n;
                }
            }

            return `${computedMantissa(value)}${result ? ` ${result}` : ""}`;
        },

        logarithm(value: LargeNumber): string {
            if (value.mantissa.isZero()) {
                return "e0";
            }

            return (
                "e" +
                new Decimal(value.exponent.toString())
                    .plus(value.mantissa.log(10))
                    .toFixed(3)
                    .toString()
            );
        },
    };

    function sliceNumber(value: bigint): string[] {
        const groups: string[] = [];

        for (let index = value.toString().length; index > 0; index -= 3) {
            groups.unshift(
                value.toString().slice(Math.max(0, index - 3), index),
            );
        }

        return groups;
    }

    function floorDiv(a: bigint, b: bigint): bigint {
        const quotient = a / b;
        const remainder = a % b;

        if (remainder !== 0n && remainder > 0n !== b > 0n) {
            return quotient - 1n;
        }

        return quotient;
    }

    function computedMantissa(value: LargeNumber): Decimal {
        let computedMantissa = value.mantissa.times(
            10n ** (value.exponent % 3n),
        );

        return computedMantissa;
    }
</script>

<section>
    <Breadcrumbs />

    <h1>Number Formatter</h1>

    <p>
        This tool formats extremely large numbers into more readable
        representations.
    </p>

    <input
        type="text"
        bind:value={input}
        placeholder="Enter a value... (e.g. 1.79e308)"
    />

    <p>
        <b>
            This formatter currently supports only positive numbers in
            E-notation.
        </b>
        Values such as <code>1E9</code>, <code>1.79e3,008</code>,
        <code>e9</code>, <code>ee9</code>, and <code>1e1e9</code> are valid. Commas
        and other unsupported characters are ignored.
    </p>

    <p>
        <b>
            Although the formatter has no hard limit, some features may begin to
            lose precision at around <code>ee16</code>.
        </b>
    </p>

    <h1>Illion Info</h1>

    <p>
        Illions begin at <code>1e6</code> and increase by one for every three additional
        powers of ten.
    </p>

    <p>
        {@html Notations.scientific(value)}
        is the <b>{sliceNumber(illionIndex).join(",")}th illion</b>, also
        written as <b>{representNumber(value)}</b>.
    </p>

    <h1>Formatted Numbers</h1>

    <ul>
        <li>
            <b>Scientific notation</b><br />
            {@html Notations.scientific(value)}
        </li>

        <li>
            <b>E-notation</b><br />
            {Notations.e(value)}
        </li>

        <li>
            <b>Logarithmic notation</b><br />
            {Notations.logarithm(value)}
        </li>

        <li>
            <b>Engineering notation</b><br />
            {@html Notations.engineering(value)}

            <p class="dim">
                Engineering notation is similar to scientific notation, except
                that the exponent is always a multiple of three.
            </p>
        </li>

        <li>
            <b>Traditional Conway-Wechsler notation</b><br />
            {Notations.conway(value, "traditional")}

            <p class="dim">
                This is the traditional form of Conway-Wechsler notation, also
                known as Standard Notation.<br />
                Nillions are represented by <code>N</code>.
            </p>
        </li>

        <li>
            <b>Community Conway-Wechsler notation</b><br />
            {Notations.conway(value, "community")}<br /><br />

            <p class="dim">
                This version of Conway-Wechsler notation introduces thousands
                suffixes to divide large names into sections, using suffixes
                such as <code>MI</code>, <code>MC</code>, and <code>NA</code>.
                <b>
                    The community version currently supports thousands suffixes
                    up to <code>QU</code> (quectillion), corresponding to
                    <KaTeX content={"10^{3 \\times 10^{30} + 3}"} />. Beyond
                    this point, numbers are displayed without thousands
                    suffixes. This limit is reached at approximately
                    <code>1e3e33</code>.
                </b>
            </p>
        </li>

        <li>
            <b>Letter notation</b><br />
            {Notations.letters(value)}<br /><br />

            <p class="dim">
                This notation is commonly used in simple idle games. Numbers are
                abbreviated using sequential letter suffixes, starting with
                <code>a</code> and continuing through <code>z</code>, followed
                by <code>aa</code>, <code>ab</code>, and so on.
            </p>
        </li>
    </ul>
</section>
