import { promises as fs } from 'node:fs';
import path from 'node:path';

const CHANGELOG_ROOT = path.resolve('src/routes/projects/core/changelog/(logs)');
const OUTPUT = path.join(CHANGELOG_ROOT, 'entries.json');

type Entry = {
    version: string;
    title?: string;
    published: Date;
};

async function sleep(timeMs: number): Promise<any> {
    return new Promise((p) => setTimeout(p, timeMs));
}

const entries: Entry[] = [];

async function walk(dir: string): Promise<void> {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const target: string = path.join(dir, item.name);

        if (item.isDirectory()) {
            console.log(`info: parsing directory ${target}`);
            await sleep(5);
            await walk(target);
            continue;
        } else {
            console.log(`info: parsing file ${target}`);
            await sleep(5);
        }

        if (item.name !== '+page.svelte' || path.dirname(target) === CHANGELOG_ROOT) continue;

        const source = await fs.readFile(target, 'utf8');

        const match = source.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?})\s*;?/);

        if (!match) continue;

        const metadata = Function(`return (${match[1]})`)() as Partial<Entry>;

        if (!metadata.published) {
            console.log(`warn: ${target}: missing metadata.published`);
            continue;
        }

        entries.push({
            ...metadata,
            version: path.basename(path.dirname(target)),
        } as Entry);
    }
}

await walk(CHANGELOG_ROOT);

entries.sort((a, b) => Number(b.published) - Number(a.published));

await fs.writeFile(OUTPUT, JSON.stringify(entries, null, 4));

console.log(
    `successfully generated ${entries.length} changelog entries @ /projects/core/changelog/entries.json`
);
