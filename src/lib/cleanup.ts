import { LStorage } from "./storage";

const keysToRemove = ["hasSeenNotice", "isTrackingAllowed", "legalConf"];

export function cleanupOldData() {
    if (typeof window === "undefined") return;

    for (const key of keysToRemove) {
        LStorage.remove(key);
    }
}
