import { LStorage } from "./storage";
import { Version } from "./version";

export type AcceptedLegalInformation = {
    privacyPolicy?: string;
    termsOfService?: string;
} | null;

export const LEGAL_KEY = "acceptedLegalInfo";

export namespace AcceptedLegalInfo {
    export function get(): AcceptedLegalInformation {
        try {
            return JSON.parse(LStorage.get(LEGAL_KEY) ?? "null");
        } catch {
            return null;
        }
    }

    export function set(value: AcceptedLegalInformation) {
        LStorage.set(LEGAL_KEY, JSON.stringify(value));
    }
}

export class LegalInformation {
    constructor(
        public lastUpdated: Date,
        public version: Version,
    ) {}

    formatTime() {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short",
        }).format(this.lastUpdated);
    }

    formatVersion() {
        return this.version.toString();
    }
}

export namespace LegalInfo {
    export const privacyPolicy = new LegalInformation(
        new Date("2026-08-07T17:37:00+09:00"),
        new Version(4, 2),
    );

    export const termsOfService = new LegalInformation(
        new Date("2026-08-08T22:36:00+09:00"),
        new Version(2, 0),
    );
}
