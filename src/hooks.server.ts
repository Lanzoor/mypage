import { normalizePath } from "$lib/path";
import { redirect, type Handle } from "@sveltejs/kit";

type CoreRedirect = {
    from: string[];
    to: string;
    permanent?: boolean;
    preservePath?: boolean;
};

const redirects: CoreRedirect[] = [
    {
        from: ["/documents"],
        to: "/docs",
        preservePath: true,
    },
    {
        from: ["/docs/math/googology/CIN", "/docs/math/googology/cin"],
        to: "/docs/math/googology/consistent-illion-notation",
    },
    {
        from: ["/docs/blog"],
        to: "/blog",
    },
    {
        from: ["/site-map"],
        to: "/map",
    },
    {
        from: ["/testing", "/tests"],
        to: "/test",
    },
    {
        from: ["/legacy", "/archived", "/archive"],
        to: "https://legacy.lanzoor.dev",
    },
    {
        from: ["/legal/tos", "/legal/terms-of-service", "/tos", "/terms"],
        to: "/legal/terms",
    },
    {
        from: ["/privacy-policy", "/privacy", "/legal/privacy-policy"],
        to: "/legal/privacy",
    },
    {
        from: ["/api"],
        to: "https://api.lanzoor.dev",
    },
    {
        from: ["/projects/core-api/changelog"],
        to: "https://api.lanzoor.dev/docs/changelog",
    },
    {
        from: ["/projects/conlangs"],
        to: "/conlangs",
    },
    {
        from: ["/it-all-begins"],
        to: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
];

export const handle: Handle = async ({ event, resolve }) => {
    const pathname = normalizePath(event.url.pathname);

    for (const entry of redirects) {
        const code = entry.permanent === true ? 308 : 307;

        for (const from of entry.from) {
            if (pathname === from) {
                throw redirect(code, entry.to);
            }

            if (entry.preservePath && pathname.startsWith(from + "/")) {
                throw redirect(code, entry.to + pathname.slice(from.length));
            }
        }
    }

    return resolve(event);
};
