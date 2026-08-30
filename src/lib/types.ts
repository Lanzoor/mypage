export type ChangelogEntry = {
    version: string;
    title?: string;
    published: Date;
};

export type BlogEntry = {
    slug: string;
    title: string;
    description?: string;
    tags?: string[];
    published: string;
};
