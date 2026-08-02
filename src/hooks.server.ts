import { redirect, type Handle } from '@sveltejs/kit';

type CoreRedirect = {
    from: string[];
    to: string;
    permanent?: boolean;
    preservePath?: boolean;
};

const redirects: CoreRedirect[] = [
    {
        from: ['/documents'],
        to: '/docs',
        preservePath: true,
    },
    {
        from: ['/docs/math/googology/CIN', '/docs/math/googology/cin'],
        to: '/docs/math/googology/consistent-illion-notation',
    },
    {
        from: ['/site-map'],
        to: '/map',
    },
    {
        from: ['/profile'],
        to: 'https://www.lanzoor.xyz',
    },
    {
        from: ['/testing', '/tests'],
        to: '/test',
    },
    {
        from: ['/legacy', '/archived', '/archive'],
        to: 'https://legacy.lanzoor.dev',
    },
    {
        from: ['/tos'],
        to: '/terms-of-service',
    },
    {
        from: ['/api/:path*'],
        to: 'https://api.lanzoor.dev/:path*',
    },
    {
        from: ['/projects/core-api/changelog/:path*'],
        to: 'https://api.lanzoor.dev/docs/changelog/:path*',
    },
    {
        from: ['/projects/conlangs/:path*'],
        to: '/conlangs/:path*',
    },
];

export const handle: Handle = async ({ event, resolve }) => {
    const { pathname } = event.url;

    for (const entry of redirects) {
        const code = entry.permanent === true ? 308 : 307;

        for (const from of entry.from) {
            if (pathname === from) {
                throw redirect(code, entry.to);
            }

            if (entry.preservePath && pathname.startsWith(from + '/')) {
                throw redirect(code, entry.to + pathname.slice(from.length));
            }
        }
    }

    return resolve(event);
};
