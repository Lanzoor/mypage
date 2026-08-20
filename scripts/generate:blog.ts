import { promises as fs } from "node:fs";
import path from "node:path";
import { type BlogEntry } from "../src/lib/types";

const BLOG_ROOT = path.resolve("src/routes/(main)/blog/(entries)/");
const OUTPUT = path.join(BLOG_ROOT, "entries.json");

async function sleep(timeMs: number): Promise<any> {
    return new Promise((p) => setTimeout(p, timeMs));
}

const entries: BlogEntry[] = [];

async function walk(dir: string): Promise<void> {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const target: string = path.join(dir, item.name);

        if (item.isDirectory()) {
            console.info(`info: parsing directory ${target}`);
            await sleep(5);
            await walk(target);
            continue;
        } else {
            console.info(`info: parsing file ${target}`);
            await sleep(5);
        }

        if (item.name !== "+page.svelte" || path.dirname(target) === BLOG_ROOT)
            continue;

        const source = await fs.readFile(target, "utf8");

        const match = source.match(
            /export\s+const\s+metadata\s*=\s*({[\s\S]*?})\s*;?/,
        );

        if (!match) continue;

        const metadata = Function(
            `return (${match[1]})`,
        )() as Partial<BlogEntry>;

        if (!metadata.title) {
            console.warn(
                `warn: ${target}: missing metadata.title, skipping...`,
            );
            continue;
        }

        if (!metadata.published) {
            console.warn(
                `warn: ${target}: missing metadata.published, skipping...`,
            );
            continue;
        }

        if (!Array.isArray(metadata.tags)) {
            console.warn(
                `warn: ${target}: metadata.tags must be an array, skipping...`,
            );
            continue;
        }

        entries.push({
            ...metadata,
            slug: path
                .relative(BLOG_ROOT, path.dirname(target))
                .replace(/\\/g, "/"),
        } as BlogEntry);

        console.info(`info: parsed file ${target}`);
    }
}

await walk(BLOG_ROOT);

entries.sort((a, b) => Number(b.published) - Number(a.published));

await fs.writeFile(OUTPUT, JSON.stringify(entries, null, 4));

console.log(
    `successfully generated ${entries.length} blog entries @ /blog/(entries)/entries.json`,
);
