import { codeToHtml } from "shiki";

export async function highlight(code: string, lang: string) {
    const highlighted = await codeToHtml(code, {
        lang,
        theme: "tokyo-night",
    });

    const inner = highlighted
        .replace(/^<pre[^>]*><code[^>]*>/, "")
        .replace(/<\/code><\/pre>$/, "");

    return inner;
}
