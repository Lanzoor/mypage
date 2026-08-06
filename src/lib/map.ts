export type PageOptions = {
    titlePad?: boolean;
    breadcrumbs?: boolean;
    topPanel?: boolean;
    footerPanel?: boolean;
    legalNotice?: boolean;
    useSitemapMetadata?: boolean;
};

export const defaultOptions: PageOptions = {
    titlePad: true,
    breadcrumbs: true,
    topPanel: true,
    footerPanel: true,
    legalNotice: true,
    useSitemapMetadata: true,
};

export type Page = {
    path: string;
    title: string;
    description?: string;

    options?: {};

    metadata?: {
        ogTitle?: string;
        ogImage?: string;
        ogType?: string;
        themeColor?: string;
    };

    children?: Page[];
};

export type IndexedSitePage = Omit<Page, 'children' | 'options'> & {
    options: PageOptions;
    parent?: IndexedSitePage;
};

export const sitemap: Page[] = [
    {
        path: '/',
        title: 'Welcome!',
        description: 'A website by Lanzoor, including projects, showcases, documents, and more!',

        metadata: {
            ogTitle: 'lanzoor.dev',
            themeColor: '#6f27f5',
        },
    },
    {
        path: '/about',
        title: 'About',

        options: {
            legalNotice: false,
        },
    },
    {
        path: '/conlangs',
        title: 'Conlangs',
        description: 'A collection of my constructed languages.',

        children: [
            {
                path: '/conlangs/proto-lanzavel',
                title: 'Proto-Lanzavel',
            },
        ],
    },
    {
        path: '/conventions',
        title: 'Conventions',

        children: [
            {
                path: '/conventions/changelog',
                title: 'Changelog Conventions',
            },
        ],
    },
    {
        path: '/credits',
        title: 'Credits',
        children: [
            {
                path: '/credits/assets',
                title: 'Asset Credits',
            },
            {
                path: '/credits/contributors',
                title: 'Contributors',
            },
            {
                path: '/credits/fonts',
                title: 'Font Credits',
            },
        ],
    },
    {
        path: '/docs',
        title: 'Documents',
        children: [
            {
                path: '/docs/blog',
                title: 'Blog',
            },
            {
                path: '/docs/linguistics',
                title: 'Linguistics',
            },
            {
                path: '/docs/math',
                title: 'Math',
                children: [
                    {
                        path: '/docs/googology',
                        title: 'Googology',
                        children: [
                            {
                                path: '/docs/googology/CIN',
                                title: 'Consistent Illion Notation',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        path: '/map',
        title: 'Site Map',
    },
    {
        path: '/privacy-policy',
        title: 'Privacy Policy',
        description: 'A detailed privacy policy that lists all details about data collection.',

        options: {
            legalNotice: false,
        },
    },
    {
        path: '/profile',
        title: 'Profile',
    },
    {
        path: '/projects',
        title: 'Projects',
        children: [
            {
                path: '/projects/core',
                title: 'core',

                children: [
                    {
                        path: '/projects/core/changelog',
                        title: 'core Changelog',
                    },
                ],
            },
            {
                path: '/projects/core-api',
                title: 'core-api',
            },
        ],
    },
    {
        path: '/terms-of-service',
        title: 'Terms Of Service',

        options: {
            legalNotice: false,
        },
    },
    {
        path: '/tools',
        title: 'Tools',
        description: 'A collection of some handy tools designed for everyone to use.',

        children: [
            {
                path: '/tools/manual-bpm-checker',
                title: 'Manual BPM Checker',

                options: {
                    footerPanel: false,
                },
            },
        ],
    },
];

function mergeOptions(options?: Partial<PageOptions>): PageOptions {
    return {
        ...defaultOptions,
        ...options,
    };
}

function createPageIndex(pages: Page[]) {
    const pageIndex = new Map<string, IndexedSitePage>();

    function dfs(page: Page, parent?: IndexedSitePage) {
        const indexedPage: IndexedSitePage = {
            ...page,
            options: mergeOptions(page.options),
            parent,
        };

        pageIndex.set(page.path, indexedPage);

        for (const child of page.children ?? []) {
            dfs(child, indexedPage); // fuck recursion
        }
    }

    pages.forEach((page) => dfs(page));

    return pageIndex;
}

export const pageIndex = createPageIndex(sitemap);
