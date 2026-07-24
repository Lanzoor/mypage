const keysToRemove = ['hasSeenNotice', 'isTrackingAllowed', 'legalConf', 'visitorId'];

export function cleanupOldData() {
    if (typeof window === 'undefined') return;

    for (const key of keysToRemove) {
        localStorage.removeItem(key);
    }
}
