import { Version } from './version';

export type AcceptedLegalInfo = {
    privacyPolicy?: string;
    termsOfService?: string;
} | null;

export function getAcceptedLegalInfo(): AcceptedLegalInfo {
    if (typeof window === 'undefined') return null;

    try {
        return JSON.parse(localStorage.getItem('acceptedLegalInfo') ?? 'null');
    } catch {
        return null;
    }
}

export function setAcceptedLegalInfo(value: AcceptedLegalInfo) {
    if (typeof window === 'undefined') return;

    localStorage.setItem('acceptedLegalInfo', JSON.stringify(value));
}

class LegalInformation {
    constructor(
        public lastUpdated: Date,
        public version: Version
    ) {}

    formatTime() {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
        }).format(this.lastUpdated);
    }

    formatVersion() {
        return this.version.toString();
    }
}

export namespace LegalInfo {
    export const privacyPolicy = new LegalInformation(
        new Date('2026-07-23T10:25:00+09:00'),
        new Version(4, 0)
    );

    export const termsOfService = new LegalInformation(
        new Date('2026-07-24T09:30:00+09:00'),
        new Version(1, 1)
    );
}
