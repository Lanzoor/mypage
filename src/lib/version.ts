export class Version {
    public readonly parts: readonly number[];

    constructor(...parts: readonly number[]) {
        if (parts.length === 0) {
            throw new Error("A version must contain at least one number.");
        }

        if (parts.some((p) => !Number.isInteger(p) || p < 0)) {
            throw new Error("Version parts must be non-negative integers.");
        }

        this.parts = [...parts];
    }

    static of(...parts: number[]) {
        return new Version(...parts);
    }

    static parse(input: string): Version {
        const match = input
            .trim()
            .match(/^v?(\d+(?:\.\d+)*)(?:-(dev|alpha|beta|rc|release))?$/i);

        if (!match) {
            throw new Error(`Invalid version: "${input}"`);
        }

        const parts = match[1].split(".").map(Number);

        return new Version(...parts);
    }

    static fromJSON(json: { parts: number[] }) {
        return new Version(...json.parts);
    }

    equals(other: Version): boolean {
        return this.compare(other) === 0;
    }

    compare(other: Version): number {
        const max = Math.max(this.parts.length, other.parts.length);

        for (let i = 0; i < max; i++) {
            const a = this.parts[i] ?? 0;
            const b = other.parts[i] ?? 0;

            if (a < b) return -1;
            if (a > b) return 1;
        }

        return 0;
    }

    lt(other: Version) {
        return this.compare(other) < 0;
    }

    lte(other: Version) {
        return this.compare(other) <= 0;
    }

    gt(other: Version) {
        return this.compare(other) > 0;
    }

    gte(other: Version) {
        return this.compare(other) >= 0;
    }

    clone() {
        return new Version(...this.parts);
    }

    bumpMajor() {
        return new Version(...[this.parts[0] + 1, 0, 0]);
    }

    bumpMinor() {
        const parts = [...this.parts];

        while (parts.length < 2) parts.push(0);

        parts[1]++;
        parts.fill(0, 2);

        return new Version(...parts);
    }

    bumpPatch() {
        const parts = [...this.parts];

        while (parts.length < 3) parts.push(0);

        parts[2]++;

        return new Version(...parts);
    }

    toString() {
        return `v${this.parts.join(".")}`;
    }

    format() {
        return this.toString();
    }

    toJSON() {
        return {
            parts: this.parts,
        };
    }
}
