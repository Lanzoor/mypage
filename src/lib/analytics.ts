const TRACKING_KEY = 'isTrackingAllowed';
const VISITOR_KEY = 'visitorId';

/**
 * An internal function that generates a unique visitor ID.
 * @returns {number} The generated visitor ID, in UUID form.
 */
function generateVisitorId(): string {
    return crypto.randomUUID();
}

/**
 * Returns whether analytics tracking is enabled or not.
 */
export function isEnabled(): boolean {
    return localStorage.getItem(TRACKING_KEY) === 'true';
}

/**
 * Sets whether analytics tracking is enabled or not.
 * @param {boolean} value - The value to set analytics tracking.
 */
export function setEnabled(value: boolean): void {
    if (value) {
        localStorage.setItem(TRACKING_KEY, 'true');

        if (!localStorage.getItem(VISITOR_KEY)) {
            localStorage.setItem(VISITOR_KEY, generateVisitorId());
        }
    } else {
        localStorage.setItem(TRACKING_KEY, 'false');
    }
}

/**
 * A helper function of `setEnabled()` that toggles whether analytics tracking is enabled or not.
 */
export function toggleEnabled(): void {
    if (isEnabled()) {
        setEnabled(false);
    } else {
        setEnabled(true);
    }
}

/**
 * Gets the visitor ID.
 * @returns {string | null} The visitor ID.
 */
export function getVisitorId(): string | null {
    if (!isEnabled()) {
        return null;
    }

    let id = localStorage.getItem(VISITOR_KEY);

    if (!id) {
        id = generateVisitorId();
        localStorage.setItem(VISITOR_KEY, id);
    }

    return id;
}

/**
 * Tracks the page and records it on a database.
 */
async function trackPageView(): Promise<void> {
    try {
        if (!isEnabled()) {
            return;
        }

        const visitorId = getVisitorId();

        if (!visitorId) {
            return;
        }

        await fetch('https://api.lanzoor.dev/analytics', {
            method: 'POST',
            keepalive: true,
            headers: {
                'Content-Type': 'application/json',
                'X-Visitor-Id': visitorId,
                'X-Client': 'lanzoor-web-dev-six-seven',
            },
            body: JSON.stringify({
                path: location.pathname + location.search,
            }),
        });
    } catch (err) {
        console.error(err);
    }
}

/**
 * Initializes analytics tracking.
 */
export function initialize(): void {
    if (typeof window === 'undefined') return;

    if (localStorage.getItem(TRACKING_KEY) === null) {
        localStorage.setItem(TRACKING_KEY, 'false');
    }

    void trackPageView();
}
