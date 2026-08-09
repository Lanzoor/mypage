export namespace LStorage {
    export function storage(): Storage {
        if (typeof window === 'undefined') {
            throw new Error(
                'localStorage is unavailable during SSR.\nConsider wrapping it within an onMount() method.'
            );
        }

        try {
            const storage = window.localStorage;

            storage.setItem('__storage_test__', '1');
            storage.removeItem('__storage_test__');

            return storage;
        } catch {
            throw new Error('localStorage is unavailable.');
        }
    }

    export function register(key: string, value: string): void {
        const storage = LStorage.storage();

        if (storage.getItem(key) === null) {
            storage.setItem(key, value);
        }
    }

    export function set(key: string, value: string): void {
        storage().setItem(key, value);
    }

    export function get(key: string): string | null {
        return storage().getItem(key);
    }

    export function remove(key: string): void {
        return storage().removeItem(key);
    }
}
