<!-- <script lang="ts">
    import { Decimal } from 'decimal.js';

    const FORMAT_START_THRESHOLD = new Decimal(1_000);
    const SECOND_E_START_THRESHOLD = 1e7;

    const CLASS_ONE = ['K', 'M', 'B', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'Oc', 'No'];
    const CLASS_TWO_PREFIXES = ['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'Oc', 'No'];
    const CLASS_TWO_SUFFIXES = ['Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'];
    const CLASS_THREE_SUFFIXES = ['Ce', 'Du', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne', 'Ce'];

    function format(decimal: Decimal): string {
        if (decimal.lt(FORMAT_START_THRESHOLD)) return decimal.toFixed(2);

        let exponent = decimal.e;
        let mantissa = decimal.div(new Decimal(10).pow(exponent));
        let fixedMantissa = mantissa.toFixed(2);

        let illionIndex = Math.floor(exponent / 3) - 1;
        let illionRemainder = exponent % 3;

        let computedMantissa = mantissa.mul(10 ** illionRemainder);

        return `${computedMantissa} ${illionIndex}-illion`;
    }

    // function format(decimal: Decimal): string {
    //     if (decimal.lt(FORMAT_START_THRESHOLD)) return decimal.toFixed(2);

    //     let exponent = decimal.e;
    //     let mantissa = decimal.div(new Decimal(10).pow(exponent));
    //     let fixedMantissa = mantissa.toFixed(2);

    //     if (decimal.gte(FORMAT_END_THRESHOLD)) {
    //         if (exponent >= SECOND_E_START_THRESHOLD) {
    //             let exponentExponent = new Decimal(decimal.e).e;
    //             let exponentMantissa = new Decimal(decimal.e).div(
    //                 new Decimal(10).pow(exponentExponent)
    //             );

    //             return `${fixedMantissa}e${`${exponentMantissa.toFixed(2)}e${exponentExponent}`}`;
    //         }

    //         return `${fixedMantissa}e${exponent.toString()}`;
    //     }

    //     const tier = Math.floor(exponent / 3);
    //     const mantissaMult = 10 ** (exponent % 3);
    //     const standardMantissa = mantissa.mul(mantissaMult).toFixed(2);

    //     if (tier <= 10) return `${standardMantissa} ${CLASS_ONE[tier - 1]}`;

    //     const secondTier = tier - 11;

    //     const prefix = CLASS_TWO_PREFIXES[secondTier % 10];

    //     const suffix = CLASS_TWO_SUFFIXES[Math.floor(secondTier / 10)];

    //     return `${standardMantissa} ${prefix}${suffix}`;
    // }
</script>

<section>
    <h1>Number Formatter</h1>

    <p>This formats absurdly long numbers into actually readable standard notation.</p>

    <p>1e12 K M B T is {format(new Decimal(1e30))}</p>
</section> -->
