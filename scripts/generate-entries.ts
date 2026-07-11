import { promises as fs } from 'node:fs';
import path from 'node:path';

const BLOG_ROOT = path.resolve('src/routes/docs/blog');
const OUTPUT = path.join(BLOG_ROOT, 'entries.json');

type Entry = {
    slug: string;
    title: string;
    description?: string;
    tags?: string[];
    published: string;
};

const entries: Entry[] = [];

async function walk(dir: string): Promise<void> {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const target: string = path.join(dir, item.name);

        if (item.isDirectory()) {
            console.log(`info: parsing directory ${target}`);
            await walk(target);
            continue;
        } else {
            console.log(`info: parsing file ${target}`);
        }

        if (item.name !== '+page.svelte' || path.dirname(target) === BLOG_ROOT) continue;

        const source = await fs.readFile(target, 'utf8');

        const match = source.match(/export\s+const\s+metadata\s*=\s*({[\s\S]*?});/);

        if (!match) continue;

        const metadata = Function(`return (${match[1]})`)();

        if (!metadata.title) {
            console.log(`warn: ${target}: missing metadata.title`);
            continue;
        }

        if (!metadata.published) {
            console.log(`warn: ${target}: missing metadata.published`);
            continue;
        }

        if (!Array.isArray(metadata.tags)) {
            console.log(`warn: ${target}: metadata.tags must be an array`);
            continue;
        }

        entries.push({
            ...metadata,
            slug: path.relative(BLOG_ROOT, path.dirname(target)).replace(/\\/g, '/'),
        });
    }
}

await walk(BLOG_ROOT);

entries.sort((a, b) => b.published.localeCompare(a.published));

await fs.writeFile(OUTPUT, JSON.stringify(entries, null, 4));

console.log(`successfully generated ${entries.length} blog entries @ src/docs/blog/entries.json`);
