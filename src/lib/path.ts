export function normalizePath(path: string) {
    if (path !== "/" && path.endsWith("/")) {
        return path.slice(0, -1);
    }

    return path;
}
